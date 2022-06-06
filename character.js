class Character{

    constructor({position, width, height, imageSrc, sprites, scale, direction}){
        this.position = position
        this.velocity = {x:0,y:0}
        this.width = width
        this.height = height
        this.image = new Image()
        this.image.src = imageSrc
        this.framesElapsed = 0
        this.framesMax = 8
        this.framesCurrent = 0
        this.framesHold = 5
        this.sprites = sprites
        this.scale = scale
        this.holdFrame = false
        this.isGrounded = false
        this.previousKeys = {pastkey1:''}
        this.queue = new Queue(4)
        this.direction = direction
        this.health = 100
        this.isBlocking = false
        this.attackbox = {
            position:{
                x:this.position.x,
                y:this.position.y
            },
            offset:{
                x:0,
                y:0
            },
            width:undefined,
            height:undefined
        }
        this.attackbox1 = {
            position:{
                x:this.position.x,
                y:this.position.y
            },
            offset:{
                x:0,
                y:0
            },
            width:undefined,
            height:undefined
        }
        this.hitbox = {
            position:{
                x:this.position.x,
                y:this.position.y
            },
            offset:{
                x:0,
                y:0
            },
            width:undefined,
            height:undefined
        }
        this.hitbox1 = {
            position:{
                x:this.position.x,
                y:this.position.y
            },
            offset:{
                x:0,
                y:0
            },
            width:undefined,
            height:undefined
        }
        this.hitbox2 = {
            position:{
                x:this.position.x,
                y:this.position.y
            },
            offset:{
                x:0,
                y:0
            },
            width:undefined,
            height:undefined
        }
        this.hitbox3 = {
            position:{
                x:this.position.x,
                y:this.position.y
            },
            offset:{
                x:0,
                y:0
            },
            width:undefined,
            height:undefined
        }


        for(const sprite in this.sprites){
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
    }

    animateFrames(){
        this.framesElapsed++
        if(this.framesElapsed % this.framesHold === 0){
            if(this.framesCurrent < this.framesMax-1){
                this.framesCurrent++
            }
            else{
                this.framesCurrent = 0
            }
        }
    }

    checkLastFrame(sprite){
        if(this.image === this.sprites[sprite].image && this.framesCurrent === this.framesMax - 1){
            return true
        } else{
            return false
        }
    }

    checkCurrImage(sprite){
        if(this.image === this.sprites[sprite].image){
            return true
        } else{
            return false
        }
    }

    //Make sure the animation isn't interupted with another switchSprite call
    followThroughAnimation(sprite){
        if(this.image === this.sprites[sprite].image && this.framesCurrent < this.framesMax - 1){
            return true
        } else{
            return false
        }
    }

    //Check if attackboxes or hitboxes exist
    checkBox(sprite, box){
        if(this.sprites[sprite][box]){
            this[box] = {
                    position:{
                        x:this.position.x,
                        y:this.position.y
                    },
                    offset:{
                        x:this.sprites[sprite][box].offset.x,
                        y:this.sprites[sprite][box].offset.y
                    },
                    width:this.sprites[sprite][box].width,
                    height:this.sprites[sprite][box].height
                }
        }else{
            this[box] = {
                position:{
                    x:this.position.x,
                    y:this.position.y
                },
                offset:{
                    x:0,
                    y:0
                },
                width:0,
                height:0
            }
        }
    }

    //Change the values for sprite to be drawn correctly
    switchSpriteValues(sprite){
        this.image = this.sprites[sprite].image
        this.framesMax = this.sprites[sprite].framesMax
        this.framesHold = this.sprites[sprite].framesHold
        this.framesCurrent = 0

        this.checkBox(sprite, 'attackbox')
        this.checkBox(sprite, 'attackbox1')

        this.checkBox(sprite, 'hitbox')
        this.checkBox(sprite, 'hitbox1')
        this.checkBox(sprite, 'hitbox2')
        this.checkBox(sprite, 'hitbox3')
    }

    switchSprite(sprite){

        //if followThrough animation exit function so switch statement
        //isn't reached so sprite can't be switched
        if(this.followThroughAnimation('fiveA')) return
        if(this.followThroughAnimation('fiveB')) return
        if(this.followThroughAnimation('fiveC')) return
        if(this.followThroughAnimation('twoA')) return
        if(this.followThroughAnimation('twoB')) return  
        if(this.followThroughAnimation('twoC')) return
        if(this.followThroughAnimation('sixC')) return
        if(this.followThroughAnimation('stand')) return
        if(this.followThroughAnimation('dashForward')) return
        if(this.followThroughAnimation('dashBackward')) return
        if(this.followThroughAnimation('quakeStompA')) return
        if(this.followThroughAnimation('quakeStompB')) return
        if(this.followThroughAnimation('quakeStompC')) return
        if(this.followThroughAnimation('arrowFistA')) return        
        if(this.followThroughAnimation('arrowFistB')) return
        if(this.followThroughAnimation('arrowFistC')) return
        if(this.followThroughAnimation('doubleKick')) return

        if(this.followThroughAnimation('fiveALeft')) return
        if(this.followThroughAnimation('fiveBLeft')) return
        if(this.followThroughAnimation('fiveCLeft')) return
        if(this.followThroughAnimation('twoALeft')) return
        if(this.followThroughAnimation('twoBLeft')) return  
        if(this.followThroughAnimation('twoCLeft')) return
        if(this.followThroughAnimation('sixCLeft')) return
        if(this.followThroughAnimation('standLeft')) return
        if(this.followThroughAnimation('dashForwardLeft')) return
        if(this.followThroughAnimation('dashBackwardLeft')) return
        if(this.followThroughAnimation('quakeStompALeft')) return
        if(this.followThroughAnimation('quakeStompBLeft')) return
        if(this.followThroughAnimation('quakeStompCLeft')) return
        if(this.followThroughAnimation('arrowFistALeft')) return        
        if(this.followThroughAnimation('arrowFistBLeft')) return
        if(this.followThroughAnimation('arrowFistCLeft')) return
        if(this.followThroughAnimation('doubleKickLeft')) return
        //if(this.followThroughAnimation('crouch')) return
        //if(this.followThroughAnimation('jumpUp')) return
        
        if(!this.isGrounded){
            if(this.followThroughAnimation('jA')) return
            if(this.followThroughAnimation('jB')) return
            if(this.followThroughAnimation('jC')) return
            
            if(this.followThroughAnimation('jALeft')) return
            if(this.followThroughAnimation('jBLeft')) return
            if(this.followThroughAnimation('jCLeft')) return
        }



        switch (sprite) {
            case 'idle':
                if(this.image !== this.sprites.idle.image){
                    this.switchSpriteValues('idle')
                }
                break;
            case 'walkF':
                if(this.image !== this.sprites.walkF.image){
                    this.switchSpriteValues('walkF')
                    this.velocity.x = 3
                }
                break;
            case 'walkB':
                if(this.image !== this.sprites.walkB.image){
                    this.switchSpriteValues('walkB')
                    this.velocity.x = -3
                }
                break;
            case 'fiveA':
                if(this.image !== this.sprites.fiveA.image){
                    this.switchSpriteValues('fiveA')
                    this.velocity.x = 0
                }
                break;
            case 'crouch':
                if(this.image !== this.sprites.crouch.image){
                    this.switchSpriteValues('crouch')
                    this.velocity.x = 0
                }
                break;
            case 'crouchIdle':
                if(this.image !== this.sprites.crouchIdle.image){
                    this.switchSpriteValues('crouchIdle')
                    this.velocity.x = 0
                }
                break;
            case 'stand':
                if(this.image !== this.sprites.stand.image){
                    this.switchSpriteValues('stand')
                }
                break;
            case 'jumpUp':
                if(this.image !== this.sprites.jumpUp.image){
                    this.switchSpriteValues('jumpUp')
                }
                break;
            case 'jumpBackward':
                if(this.image !== this.sprites.jumpBackward.image){
                    this.switchSpriteValues('jumpBackward')
                    this.velocity.x = -2
                }
                break;
                case 'jumpForward':
            if(this.image !== this.sprites.jumpForward.image){
                this.switchSpriteValues('jumpForward')
                this.velocity.x = 2
            }
            break;
            case 'fall':
            if(this.image !== this.sprites.fall.image){
                this.switchSpriteValues('fall')
                this.framesCurrent = 0
            }
            break;
            case 'fiveB':
                if(this.image !== this.sprites.fiveB.image){
                    this.switchSpriteValues('fiveB')
                    this.velocity.x = .5
                }
                break;
            case 'fiveC':
                if(this.image !== this.sprites.fiveC.image){
                    this.switchSpriteValues('fiveC')
                    this.velocity.x = 1.5
                }
                break;
            case 'twoA':
                if(this.image !== this.sprites.twoA.image){
                    this.switchSpriteValues('twoA')
                    this.framesCurrent = 0
                }
                break;
            case 'twoB':
                if(this.image !== this.sprites.twoB.image){
                    this.switchSpriteValues('twoB')
                    this.velocity.x = .05
                }
                break;
            case 'twoC':
                if(this.image !== this.sprites.twoC.image){
                    this.switchSpriteValues('twoC')
                    this.velocity.x = .15
                }
                break;
            case 'jA':
                if(this.image !== this.sprites.jA.image){
                    this.switchSpriteValues('jA')
                    this.framesCurrent = 0
                }
                break;
            case 'jB':
                if(this.image !== this.sprites.jB.image){
                    this.switchSpriteValues('jB')
                    this.framesCurrent = 0
                }
                break;
            case 'jC':
                if(this.image !== this.sprites.jC.image){
                    this.switchSpriteValues('jC')
                    this.framesCurrent = 0
                }
            break;
            case 'dashForward':
                if(this.image !== this.sprites.dashForward.image){
                    this.switchSpriteValues('dashForward')
                    this.velocity.x = 5
                }
                break;
            case 'dashBackward':
                if(this.image !== this.sprites.dashBackward.image){
                    this.switchSpriteValues('dashBackward')
                    this.velocity.x = -3.5
                }
                break;
            case 'sixC':
                if(this.image !== this.sprites.sixC.image){
                    this.switchSpriteValues('sixC')
                    this.velocity.x = .5
                }
                break;
            case 'quakeStompA':
                if(this.image !== this.sprites.quakeStompA.image){
                    this.switchSpriteValues('quakeStompA')
                    this.framesCurrent = 0
                }
                break;
            case 'quakeStompB':
                if(this.image !== this.sprites.quakeStompB.image){
                    this.switchSpriteValues('quakeStompB')
                    this.framesCurrent = 0
                }                
                break;
            case 'quakeStompC':
                if(this.image !== this.sprites.quakeStompC.image){
                    this.switchSpriteValues('quakeStompC')
                    this.framesCurrent = 0
                }
                break;
            case 'arrowFistA':
            if(this.image !== this.sprites.arrowFistA.image){
                this.switchSpriteValues('arrowFistA')
                this.velocity.x = .75
            }
            break;
            case 'arrowFistB':
                if(this.image !== this.sprites.arrowFistB.image){
                    this.switchSpriteValues('arrowFistB')
                    this.velocity.x = 4
                    this.velocity.y = -3
                }
                break;
            case 'arrowFistC':
                if(this.image !== this.sprites.arrowFistC.image){
                    this.switchSpriteValues('arrowFistC')
                    this.velocity.x = 4
                    this.velocity.y = -3
                }
                break;
            case 'doubleKick':
                if(this.image !== this.sprites.doubleKick.image){
                    this.switchSpriteValues('doubleKick')
                    this.velocity.x = 2
                    this.velocity.y = -10
                }
                break;
            case 'idleLeft':
                if(this.image !== this.sprites.idleLeft.image){
                    this.switchSpriteValues('idleLeft')
                }
                break;
            case 'walkFLeft':
                if(this.image !== this.sprites.walkFLeft.image){
                    this.switchSpriteValues('walkFLeft')
                    this.velocity.x = -3
                }
                break;
            case 'walkBLeft':
                if(this.image !== this.sprites.walkBLeft.image){
                    this.switchSpriteValues('walkBLeft')
                    this.velocity.x = 3
                }
                break;
            case 'fiveALeft':
                if(this.image !== this.sprites.fiveALeft.image){
                    this.switchSpriteValues('fiveALeft')
                    this.velocity.x = 0
                }
                break;
            case 'crouchLeft':
                if(this.image !== this.sprites.crouchLeft.image){
                    this.switchSpriteValues('crouchLeft')
                    this.velocity.x = 0
                }
                break;
            case 'crouchIdleLeft':
                if(this.image !== this.sprites.crouchIdleLeft.image){
                    this.switchSpriteValues('crouchIdleLeft')
                    this.velocity.x = 0
                }
                break;
            case 'standLeft':
                if(this.image !== this.sprites.standLeft.image){
                    this.switchSpriteValues('standLeft')
                }
                break;
            case 'jumpUpLeft':
                if(this.image !== this.sprites.jumpUpLeft.image){
                    this.switchSpriteValues('jumpUpLeft')
                }
                break;
            case 'jumpBackwardLeft':
                if(this.image !== this.sprites.jumpBackwardLeft.image){
                    this.switchSpriteValues('jumpBackwardLeft')
                    this.velocity.x = 2
                }
                break;
                case 'jumpForwardLeft':
            if(this.image !== this.sprites.jumpForwardLeft.image){
                this.switchSpriteValues('jumpForwardLeft')
                this.velocity.x = -2
            }
            break;
            case 'fallLeft':
            if(this.image !== this.sprites.fallLeft.image){
                this.switchSpriteValues('fallLeft')
            }
            break;
            case 'fiveBLeft':
                if(this.image !== this.sprites.fiveBLeft.image){
                    this.switchSpriteValues('fiveBLeft')
                    this.velocity.x = -.5
                }
                break;
            case 'fiveCLeft':
                if(this.image !== this.sprites.fiveCLeft.image){
                    this.switchSpriteValues('fiveCLeft')
                    this.velocity.x = -1.5
                }
                break;
            case 'twoALeft':
                if(this.image !== this.sprites.twoALeft.image){
                    this.switchSpriteValues('twoALeft')
                }
                break;
            case 'twoBLeft':
                if(this.image !== this.sprites.twoBLeft.image){
                    this.switchSpriteValues('twoBLeft')
                    this.velocity.x = -.05
                }
                break;
            case 'twoCLeft':
                if(this.image !== this.sprites.twoCLeft.image){
                    this.switchSpriteValues('twoCLeft')
                    this.velocity.x = -.15
                }
                break;
            case 'jALeft':
                if(this.image !== this.sprites.jALeft.image){
                    this.switchSpriteValues('jALeft')
                }
                break;
            case 'jBLeft':
                if(this.image !== this.sprites.jBLeft.image){
                    this.switchSpriteValues('jBLeft')
                }
                break;
            case 'jCLeft':
                if(this.image !== this.sprites.jCLeft.image){
                    this.switchSpriteValues('jCLeft')
                }
            break;
            case 'dashForwardLeft':
                if(this.image !== this.sprites.dashForwardLeft.image){
                    this.switchSpriteValues('dashForwardLeft')
                    this.velocity.x = -5
                }
                break;
            case 'dashBackwardLeft':
                if(this.image !== this.sprites.dashBackwardLeft.image){
                    this.switchSpriteValues('dashBackwardLeft')
                    this.velocity.x = 3.5
                }
                break;
            case 'sixCLeft':
                if(this.image !== this.sprites.sixCLeft.image){
                    this.switchSpriteValues('sixCLeft')
                    this.velocity.x = -.5
                }
                break;
            case 'quakeStompALeft':
                if(this.image !== this.sprites.quakeStompALeft.image){
                    this.switchSpriteValues('quakeStompALeft')
                }
                break;
            case 'quakeStompBLeft':
                if(this.image !== this.sprites.quakeStompBLeft.image){
                    this.switchSpriteValues('quakeStompBLeft')
                }                
                break;
            case 'quakeStompCLeft':
                if(this.image !== this.sprites.quakeStompCLeft.image){
                    this.switchSpriteValues('quakeStompCLeft')
                }
                break;
            case 'arrowFistALeft':
            if(this.image !== this.sprites.arrowFistALeft.image){
                this.switchSpriteValues('arrowFistALeft')
                this.velocity.x = -.75
            }
            break;
            case 'arrowFistBLeft':
                if(this.image !== this.sprites.arrowFistBLeft.image){
                    this.switchSpriteValues('arrowFistBLeft')
                    this.velocity.x = -4
                    this.velocity.y = -3
                }
                break;Left
            case 'arrowFistCLeft':
                if(this.image !== this.sprites.arrowFistCLeft.image){
                    this.switchSpriteValues('arrowFistCLeft')
                    this.velocity.x = -4
                    this.velocity.y = -3
                }
                break;
            case 'doubleKickLeft':
                if(this.image !== this.sprites.doubleKickLeft.image){
                    this.switchSpriteValues('doubleKickLeft')
                    this.velocity.x = -2
                    this.velocity.y = -10
                }
                break;
        }
    }

    //draw sprite to screen
    draw(){
        ctx.drawImage(
            this.image,
            this.framesCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.position.x - 250,
            this.position.y ,
            this.image.width / this.framesMax * this.scale,
            this.image.height * this.scale
        )
    }

    

    //draw attackboxes and hitboxes on screen
    drawBox(color,box){
        ctx.fillStyle = color
        ctx.fillRect(
            box.position.x,
            box.position.y,
            box.width,
            box.height
        )
    }

    calculateBoxPosition(box){
        box.position.x = this.position.x + box.offset.x
        box.position.y = this.position.y + box.offset.y
    }

    update(){
        const gravity = 0.2
        this.draw()
        this.animateFrames()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.calculateBoxPosition(this.attackbox)
        this.calculateBoxPosition(this.attackbox1)
        this.calculateBoxPosition(this.hitbox)
        this.calculateBoxPosition(this.hitbox1)
        this.calculateBoxPosition(this.hitbox2)
        this.calculateBoxPosition(this.hitbox3)

        //Uncomment to see the hitbox and attackbox 
        /*this.drawBox('green', this.hitbox)
        this.drawBox('green', this.hitbox1)
        this.drawBox('green', this.hitbox2)
        this.drawBox('green', this.hitbox3)
        this.drawBox('red', this.attackbox)
        this.drawBox('red', this.attackbox1)*/
        
        

        //wall collision
        if(this.position.x < 0 ){
            this.position.x = 0
            this.velocity.x = 0
        }else if(this.position.x + 42 > 1000){
            this.position.x = 1000 - 42
            this.velocity.x = 0
        }

        if(this.position.y + this.velocity.y + (this.height*this.scale) >= canvas.height - 50){
            this.velocity.y = 0
            this.position.y = canvas.height - 50 - (this.height * this.scale)
            this.isGrounded = true
        }else{
            this.velocity.y += gravity
            this.isGrounded = false
        }

    }

    
}