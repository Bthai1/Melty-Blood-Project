const canvas = document.querySelector('#gameScreen')
const ctx = canvas.getContext('2d')

canvas.width = 1067
canvas.height = 720

const background = new Sprite({
    position:{
        x:0,
        y:0
    },
    imageSrc:'./img/stage/On the Park.png',
})
function chooseMiyako(coordX,coordY){
    let user = new Character({
        position:{
            x:coordX,
            y:coordY
        },
        width:115,
        height:235,
        scale: 2.35,
        imageSrc:'./img/character/miyako/miyIdle.png',
        sprites:{
            idle:{
                imageSrc: './img/character/miyako/miyIdle.png',
                framesMax: 8,
                framesHold: 8,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            walkF:{
                imageSrc: './img/character/miyako/miywalkF.png',
                framesMax: 12,
                framesHold: 5,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            walkB:{
                imageSrc: './img/character/miyako/miywalkB.png',
                framesMax: 12,
                framesHold: 5,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            crouch:{
                imageSrc: './img/character/miyako/miycrouch.png',
                framesMax: 6,
                framesHold: 5,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            crouchIdle:{
                imageSrc: './img/character/miyako/miycrouchIdle.png',
                framesMax: 4,
                framesHold: 20,
                hitbox:{
                    offset:{
                        x:0,
                        y:388
                    },
                    width:100,
                    height:140
                }
            },
            stand:{
                imageSrc: './img/character/miyako/miystand.png',
                framesMax: 6,
                framesHold: 5,
                hitbox:{
                    offset:{
                        x:0,
                        y:388
                    },
                    width:100,
                    height:140
                }
            },
            jumpUp:{
                imageSrc: './img/character/miyako/miyjumpStraight.png',
                framesMax: 16,
                framesHold: 7,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:140
                }
            },
            jumpBackward:{
                imageSrc: './img/character/miyako/miyjumpBack.png',
                framesMax: 17,
                framesHold: 7,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:140
                }
            },
            jumpForward:{
                imageSrc: './img/character/miyako/miyjumpForward.png',
                framesMax: 19,
                framesHold: 7,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:140
                }
            },
            fall:{
                imageSrc: './img/character/miyako/miyfall.png',
                framesMax: 1,
                framesHold: 1,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:140
                }
            },
            fiveA:{
                imageSrc: './img/character/miyako/miy5A.png',
                framesMax: 6,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:70,
                        y:356
                    },
                    width:70,
                    height:55
                },
                hitbox:{
                    offset:{
                        x:10,
                        y:310
                    },
                    width:70,
                    height:200
                },
                hitbox1:{
                    offset:{
                        x:55,
                        y:346
                    },
                    width:96,
                    height:70
                },
            },
            fiveB:{
                imageSrc: './img/character/miyako/miy5B.png',
                framesMax: 8,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:60,
                        y:366
                    },
                    width:80,
                    height:90
                },
                hitbox:{
                    offset:{
                        x:60,
                        y:346
                    },
                    width:65,
                    height:70
                },
                hitbox1:{
                    offset:{
                        x:-5,
                        y:415
                    },
                    width:115,
                    height:100
                },
                hitbox2:{
                    offset:{
                        x:10,
                        y:330
                    },
                    width:70,
                    height:160
                },
            },
            fiveC:{
                imageSrc: './img/character/miyako/miy5C.png',
                framesMax: 10,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:60,
                        y:310
                    },
                    width:80,
                    height:189
                },
                hitbox:{
                    offset:{
                        x:-10,
                        y:415
                    },
                    width:90,
                    height:100
                },
                hitbox1:{
                    offset:{
                        x:15,
                        y:310
                    },
                    width:70,
                    height:120
                },
            },
            twoA:{
                imageSrc: './img/character/miyako/miy2A.png',
                framesMax: 8,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:60,
                        y:421
                    },
                    width:99,
                    height:85
                },
                hitbox:{
                    offset:{
                        x:0,
                        y:370
                    },
                    width:165,
                    height:160
                }
            },
            twoB:{
                imageSrc: './img/character/miyako/miy2B.png',
                framesMax: 11,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:70,
                        y:399
                    },
                    width:35,
                    height:108
                },
                attackbox1:{
                    offset:{
                        x:100,
                        y:280
                    },
                    width:35,
                    height:108
                },
                hitbox:{
                    offset:{
                        x:10,
                        y:415
                    },
                    width:90,
                    height:100
                },
                hitbox1:{
                    offset:{
                        x:30,
                        y:310
                    },
                    width:70,
                    height:120
                },
                hitbox2:{
                    offset:{
                        x:95,
                        y:290
                    },
                    width:45,
                    height:110
                },

            },
            twoC:{
                imageSrc: './img/character/miyako/miy2C.png',
                framesMax: 10,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:60,
                        y:480 
                    },
                    width:130,
                    height:33
                },
                hitbox:{
                    offset:{
                        x:-10,
                        y:390
                    },
                    width:120,
                    height:130
                },
                hitbox1:{
                    offset:{
                        x:45,
                        y:460 
                    },
                    width:110,
                    height:60
                },

            },
            jA:{
                imageSrc: './img/character/miyako/miyjA.png',
                framesMax: 6,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:78,
                        y:309
                    },
                    width:25,
                    height:80
                },
                attackbox1:{
                    offset:{
                        x:85,
                        y:345
                    },
                    width:57,
                    height:67
                },
                hitbox:{
                    offset:{
                        x:-10,
                        y:300
                    },
                    width:100,
                    height:140
                },
                hitbox1:{
                    offset:{
                        x:60,
                        y:310
                    },
                    width:80,
                    height:80
                },
                hitbox2:{
                    offset:{
                        x:80,
                        y:335
                    },
                    width:70,
                    height:90
                }
            },
            jB:{
                imageSrc: './img/character/miyako/miyjB.png',
                framesMax: 8,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:-30,
                        y:305
                    },
                    width:156,
                    height:35
                },
                attackbox1:{
                    offset:{
                        x:38,
                        y:336
                    },
                    width:35,
                    height:80
                },
                hitbox:{
                    offset:{
                        x:-40,
                        y:290
                    },
                    width:150,
                    height:50
                },
                hitbox1:{
                    offset:{
                        x:45,
                        y:330
                    },
                    width:35,
                    height:100
                },
                hitbox2:{
                    offset:{
                        x:-30,
                        y:340
                    },
                    width:80,
                    height:100
                }
            },
            jC:{
                imageSrc: './img/character/miyako/miyjC.png',
                framesMax: 10,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:65,
                        y:365
                    },
                    width:65,
                    height:75
                },
                hitbox:{
                    offset:{
                        x:45,
                        y:335
                    },
                    width:95,
                    height:95
                },
                hitbox1:{
                    offset:{
                        x:-10,
                        y:330
                    },
                    width:80,
                    height:80
                },
                hitbox2:{
                    offset:{
                        x:-35,
                        y:360
                    },
                    width:80,
                    height:80
                },
                hitbox3:{
                    offset:{
                        x:0,
                        y:290
                    },
                    width:80,
                    height:80
                },


            },
            dashForward:{
                imageSrc: './img/character/miyako/miydashForward.png',
                framesMax: 7,
                framesHold: 7,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            dashBackward:{
                imageSrc: './img/character/miyako/miydashBack.png',
                framesMax: 18,
                framesHold: 5,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            sixC:{
                imageSrc: './img/character/miyako/miy6C.png',
                framesMax: 10,
                framesHold: 7,
                attackbox:{
                    offset:{
                        x:67,
                        y:300
                    },
                    width:76,
                    height:85
                },
                attackbox1:{
                    offset:{
                        x:67,
                        y:317
                    },
                    width:58,
                    height:103
                },
                hitbox:{
                    offset:{
                        x:71,
                        y:325
                    },
                    width:50,
                    height:50
                },
                hitbox1:{
                    offset:{
                        x:20,
                        y:340
                    },
                    width:55,
                    height:80
                },
                hitbox2:{
                    offset:{
                        x:0,
                        y:380
                    },
                    width:85,
                    height:85
                },
                hitbox3:{
                    offset:{
                        x:-10,
                        y:430
                    },
                    width:120,
                    height:85
                }
            },
            quakeStompA:{
                imageSrc: './img/character/miyako/miyquakeStomp.png',
                framesMax: 9,
                framesHold: 7,
                attackbox:{
                    offset:{
                        x:-100,
                        y:500
                    },
                    width:280,
                    height:85
                },
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            quakeStompB:{
                imageSrc: './img/character/miyako/miyquakeStomp.png',
                framesMax: 9,
                framesHold: 11,
                attackbox:{
                    offset:{
                        x:-250,
                        y:500
                    },
                    width:580,
                    height:85
                },
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            quakeStompC:{
                imageSrc: './img/character/miyako/miyquakeStomp.png',
                framesMax: 9,
                framesHold: 14,
                attackbox:{
                    offset:{
                        x:-250,
                        y:500
                    },
                    width:580,
                    height:85
                },
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                } 
            },
            arrowFistA:{
                imageSrc: './img/character/miyako/miyarrowFist.png',
                framesMax: 18,
                framesHold: 4,
                attackbox:{
                    offset:{
                        x:60,
                        y:376
                    },
                    width:108,
                    height:70
                },
                hitbox:{
                    offset:{
                        x:-5,
                        y:425
                    },
                    width:115,
                    height:100
                },
                hitbox1:{
                    offset:{
                        x:10,
                        y:360
                    },
                    width:115,
                    height:70
                }, 
                hitbox2:{
                    offset:{
                        x:30,
                        y:330
                    },
                    width:60,
                    height:60
                }         
            },
            arrowFistB:{
                imageSrc: './img/character/miyako/miyarrowFist.png',
                framesMax: 18,
                framesHold: 4,
                attackbox:{
                    offset:{
                        x:60,
                        y:376
                    },
                    width:108,
                    height:70
                },
                hitbox:{
                    offset:{
                        x:-5,
                        y:425
                    },
                    width:115,
                    height:100
                },
                hitbox1:{
                    offset:{
                        x:10,
                        y:360
                    },
                    width:115,
                    height:70
                },
                hitbox2:{
                    offset:{
                        x:30,
                        y:330
                    },
                    width:60,
                    height:60
                }    
            },
            arrowFistC:{
                imageSrc: './img/character/miyako/miyarrowFist.png',
                framesMax: 18,
                framesHold: 4,
                attackbox:{
                    offset:{
                        x:60,
                        y:376
                    },
                    width:108,
                    height:70
                },
                hitbox:{
                    offset:{
                        x:-5,
                        y:425
                    },
                    width:115,
                    height:100
                },
                hitbox1:{
                    offset:{
                        x:10,
                        y:360
                    },
                    width:115,
                    height:70
                },
                hitbox2:{
                    offset:{
                        x:30,
                        y:330
                    },
                    width:60,
                    height:60
                } 
            },
            doubleKick:{
                imageSrc: './img/character/miyako/miydoubleKick.png',
                framesMax: 16,
                framesHold: 7,
                attackbox:{
                    offset:{
                        x:50,
                        y:300
                    },
                    width:105,
                    height:35
                },
                attackbox1:{
                    offset:{
                        x:50,
                        y:326
                    },
                    width:40,
                    height:120
                },
                hitbox:{
                    offset:{
                        x:35,
                        y:300
                    },
                    width:105,
                    height:45
                },
                hitbox1:{
                    offset:{
                        x:25,
                        y:322
                    },
                    width:50,
                    height:130
                },
                hitbox2:{
                    offset:{
                        x:5,
                        y:335
                    },
                    width:35,
                    height:150
                },
                hitbox3:{
                    offset:{
                        x:-10,
                        y:280
                    },
                    width:80,
                    height:80
                }

            },
            idleLeft:{
                imageSrc: './img/character/miyako/miyIdleLeft.png',
                framesMax: 8,
                framesHold: 8,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            walkFLeft:{
                imageSrc: './img/character/miyako/miywalkFLeft.png',
                framesMax: 12,
                framesHold: 5,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            walkBLeft:{
                imageSrc: './img/character/miyako/miywalkBLeft.png',
                framesMax: 12,
                framesHold: 5,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            crouchLeft:{
                imageSrc: './img/character/miyako/miycrouchLeft.png',
                framesMax: 6,
                framesHold: 5,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            crouchIdleLeft:{
                imageSrc: './img/character/miyako/miycrouchIdleLeft.png',
                framesMax: 4,
                framesHold: 20,
                hitbox:{
                    offset:{
                        x:0,
                        y:388
                    },
                    width:100,
                    height:140
                }
            },
            standLeft:{
                imageSrc: './img/character/miyako/miystandLeft.png',
                framesMax: 6,
                framesHold: 5,
                hitbox:{
                    offset:{
                        x:0,
                        y:388
                    },
                    width:100,
                    height:140
                }
            },
            jumpUpLeft:{
                imageSrc: './img/character/miyako/miyjumpStraightLeft.png',
                framesMax: 16,
                framesHold: 7,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:140
                }
            },
            jumpBackwardLeft:{
                imageSrc: './img/character/miyako/miyjumpBackLeft.png',
                framesMax: 17,
                framesHold: 7,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:140
                }
            },
            jumpForwardLeft:{
                imageSrc: './img/character/miyako/miyjumpForwardLeft.png',
                framesMax: 19,
                framesHold: 7,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:140
                }
            },
            fallLeft:{
                imageSrc: './img/character/miyako/miyfallLeft.png',
                framesMax: 1,
                framesHold: 1,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:140
                }
            },
            fiveALeft:{
                imageSrc: './img/character/miyako/miy5ALeft.png',
                framesMax: 6,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:-35,
                        y:356
                    },
                    width:70,
                    height:55
                },
                hitbox:{
                    offset:{
                        x:10,
                        y:310
                    },
                    width:70,
                    height:200
                },
                hitbox1:{
                    offset:{
                        x:-55,
                        y:346
                    },
                    width:96,
                    height:70
                },
            },
            fiveBLeft:{
                imageSrc: './img/character/miyako/miy5BLeft.png',
                framesMax: 8,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:-35,
                        y:366
                    },
                    width:80,
                    height:90
                },
                hitbox:{
                    offset:{
                        x:-15,
                        y:346
                    },
                    width:65,
                    height:70
                },
                hitbox1:{
                    offset:{
                        x:-5,
                        y:415
                    },
                    width:115,
                    height:100
                },
                hitbox2:{
                    offset:{
                        x:10,
                        y:330
                    },
                    width:70,
                    height:160
                },
                
            },
            fiveCLeft:{
                imageSrc: './img/character/miyako/miy5CLeft.png',
                framesMax: 10,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:-35,
                        y:310
                    },
                    width:80,
                    height:189
                },
                hitbox:{
                    offset:{
                        x:-10,
                        y:415
                    },
                    width:90,
                    height:100
                },
                hitbox1:{
                    offset:{
                        x:15,
                        y:310
                    },
                    width:70,
                    height:120
                },
            },
            twoALeft:{
                imageSrc: './img/character/miyako/miy2ALeft.png',
                framesMax: 8,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:-57,
                        y:421
                    },
                    width:99,
                    height:85
                },
                hitbox:{
                    offset:{
                        x:-60,
                        y:370
                    },
                    width:165,
                    height:160
                }
            },
            twoBLeft:{
                imageSrc: './img/character/miyako/miy2BLeft.png',
                framesMax: 11,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:-10,
                        y:399
                    },
                    width:35,
                    height:108
                },
                attackbox1:{
                    offset:{
                        x:-35,
                        y:280
                    },
                    width:35,
                    height:108
                },
                hitbox:{
                    offset:{
                        x:10,
                        y:415
                    },
                    width:90,
                    height:100
                },
                hitbox1:{
                    offset:{
                        x:-10,
                        y:310
                    },
                    width:70,
                    height:120
                },
                hitbox2:{
                    offset:{
                        x:-35,
                        y:290
                    },
                    width:45,
                    height:110
                },
            },
            twoCLeft:{
                imageSrc: './img/character/miyako/miy2CLeft.png',
                framesMax: 10,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:-92,
                        y:480 
                    },
                    width:130,
                    height:33
                },
                hitbox:{
                    offset:{
                        x:-10,
                        y:390
                    },
                    width:120,
                    height:130
                },
                hitbox1:{
                    offset:{
                        x:-55,
                        y:460 
                    },
                    width:110,
                    height:60
                },
            },
            jALeft:{
                imageSrc: './img/character/miyako/miyjALeft.png',
                framesMax: 6,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:0,
                        y:309
                    },
                    width:25,
                    height:80
                },
                attackbox1:{
                    offset:{
                        x:-40,
                        y:345
                    },
                    width:57,
                    height:67
                },
                hitbox:{
                    offset:{
                        x:-10,
                        y:300
                    },
                    width:100,
                    height:140
                },
                hitbox1:{
                    offset:{
                        x:-35,
                        y:310
                    },
                    width:80,
                    height:80
                },
                hitbox2:{
                    offset:{
                        x:-50,
                        y:335
                    },
                    width:70,
                    height:90
                }
            },
            jBLeft:{
                imageSrc: './img/character/miyako/miyjBLeft.png',
                framesMax: 8,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:-30,
                        y:305
                    },
                    width:156,
                    height:35
                },
                attackbox1:{
                    offset:{
                        x:20,
                        y:336
                    },
                    width:35,
                    height:80
                },
                hitbox:{
                    offset:{
                        x:-15,
                        y:290
                    },
                    width:150,
                    height:50
                },
                hitbox1:{
                    offset:{
                        x:10,
                        y:330
                    },
                    width:35,
                    height:100
                },
                hitbox2:{
                    offset:{
                        x:35,
                        y:340
                    },
                    width:80,
                    height:100
                }
            },
            jCLeft:{
                imageSrc: './img/character/miyako/miyjCLeft.png',
                framesMax: 10,
                framesHold: 8,
                attackbox:{
                    offset:{
                        x:-35,
                        y:365
                    },
                    width:65,
                    height:75
                },
                hitbox:{
                    offset:{
                        x:-45,
                        y:335
                    },
                    width:95,
                    height:95
                },
                hitbox1:{
                    offset:{
                        x:30,
                        y:330
                    },
                    width:80,
                    height:80
                },
                hitbox2:{
                    offset:{
                        x:60,
                        y:360
                    },
                    width:80,
                    height:80
                },
                hitbox3:{
                    offset:{
                        x:10,
                        y:290
                    },
                    width:80,
                    height:80
                },
            },
            dashForwardLeft:{
                imageSrc: './img/character/miyako/miydashForwardLeft.png',
                framesMax: 7,
                framesHold: 7,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            dashBackwardLeft:{
                imageSrc: './img/character/miyako/miydashBackLeft.png',
                framesMax: 18,
                framesHold: 5,
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            sixCLeft:{
                imageSrc: './img/character/miyako/miy6CLeft.png',
                framesMax: 10,
                framesHold: 7,
                attackbox:{
                    offset:{
                        x:-45,
                        y:300
                    },
                    width:76,
                    height:85
                },
                attackbox1:{
                    offset:{
                        x:-25,
                        y:317
                    },
                    width:58,
                    height:103
                },
                hitbox:{
                    offset:{
                        x:-20,
                        y:325
                    },
                    width:50,
                    height:50
                },
                hitbox1:{
                    offset:{
                        x:20,
                        y:340
                    },
                    width:55,
                    height:80
                },
                hitbox2:{
                    offset:{
                        x:0,
                        y:380
                    },
                    width:85,
                    height:85
                },
                hitbox3:{
                    offset:{
                        x:-10,
                        y:430
                    },
                    width:120,
                    height:85
                }
            },
            quakeStompALeft:{
                imageSrc: './img/character/miyako/miyquakeStompLeft.png',
                framesMax: 9,
                framesHold: 7,
                attackbox:{
                    offset:{
                        x:-90,
                        y:500
                    },
                    width:280,
                    height:85
                },
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            quakeStompBLeft:{
                imageSrc: './img/character/miyako/miyquakeStompLeft.png',
                framesMax: 9,
                framesHold: 11,
                attackbox:{
                    offset:{
                        x:-220,
                        y:500
                    },
                    width:580,
                    height:85
                },
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            quakeStompCLeft:{
                imageSrc: './img/character/miyako/miyquakeStompLeft.png',
                framesMax: 9,
                framesHold: 14,
                attackbox:{
                    offset:{
                        x:-220,
                        y:500
                    },
                    width:580,
                    height:85
                },
                hitbox:{
                    offset:{
                        x:0,
                        y:310
                    },
                    width:100,
                    height:200
                }
            },
            arrowFistALeft:{
                imageSrc: './img/character/miyako/miyarrowFistLeft.png',
                framesMax: 18,
                framesHold: 4,
                attackbox:{
                    offset:{
                        x:-75,
                        y:376
                    },
                    width:108,
                    height:70
                },
                hitbox:{
                    offset:{
                        x:-5,
                        y:425
                    },
                    width:115,
                    height:100
                },
                hitbox1:{
                    offset:{
                        x:-20,
                        y:360
                    },
                    width:115,
                    height:70
                }, 
                hitbox2:{
                    offset:{
                        x:15,
                        y:330
                    },
                    width:60,
                    height:60
                }
            },
            arrowFistBLeft:{
                imageSrc: './img/character/miyako/miyarrowFistLeft.png',
                framesMax: 18,
                framesHold: 4,
                attackbox:{
                    offset:{
                        x:-75,
                        y:376
                    },
                    width:108,
                    height:70
                },
                hitbox:{
                    offset:{
                        x:-5,
                        y:425
                    },
                    width:115,
                    height:100
                },
                hitbox1:{
                    offset:{
                        x:-20,
                        y:360
                    },
                    width:115,
                    height:70
                }, 
                hitbox2:{
                    offset:{
                        x:15,
                        y:330
                    },
                    width:60,
                    height:60
                }
            },
            arrowFistCLeft:{
                imageSrc: './img/character/miyako/miyarrowFistLeft.png',
                framesMax: 18,
                framesHold: 4,
                attackbox:{
                    offset:{
                        x:-75,
                        y:376
                    },
                    width:108,
                    height:70
                },
                hitbox:{
                    offset:{
                        x:-5,
                        y:425
                    },
                    width:115,
                    height:100
                },
                hitbox1:{
                    offset:{
                        x:-20,
                        y:360
                    },
                    width:115,
                    height:70
                }, 
                hitbox2:{
                    offset:{
                        x:15,
                        y:330
                    },
                    width:60,
                    height:60
                }
            },
            doubleKickLeft:{
                imageSrc: './img/character/miyako/miydoubleKickLeft.png',
                framesMax: 16,
                framesHold: 7,
                attackbox:{
                    offset:{
                        x:-50,
                        y:300
                    },
                    width:105,
                    height:35
                },
                attackbox1:{
                    offset:{
                        x:10,
                        y:326
                    },
                    width:40,
                    height:120
                },
                hitbox:{
                    offset:{
                        x:-35,
                        y:300
                    },
                    width:105,
                    height:45
                },
                hitbox1:{
                    offset:{
                        x:30,
                        y:322
                    },
                    width:50,
                    height:130
                },
                hitbox2:{
                    offset:{
                        x:60,
                        y:335
                    },
                    width:35,
                    height:150
                },
                hitbox3:{
                    offset:{
                        x:0,
                        y:280
                    },
                    width:80,
                    height:80
                }
            },
        }
    })
    return user
    }

//Key press object
keys1 = {
    w:{
        pressed: false,
        holdKey: false
    },
    a:{
        pressed: false,
        holdKey: false
    },
    s:{
        pressed: false,
        holdKey: false
    },
    d:{
        pressed: false,
        holdKey: false
    },
    u:{
        pressed: false,
        holdKey: false
    },
    i:{
        pressed: false,
        holdKey: false
    },
    o:{
        pressed: false,
        holdKey: false
    },
}
keys2 ={
    ArrowUp:{
        pressed: false,
        holdKey: false
    },
    ArrowDown:{
        pressed: false,
        holdKey: false
    },
    ArrowLeft:{
        pressed: false,
        holdKey: false
    },
    ArrowRight:{
        pressed: false,
        holdKey: false
    },
    1:{
        pressed: false,
        holdKey: false
    },
    2:{
        pressed: false,
        holdKey: false
    },
    3:{
        pressed: false,
        holdKey: false
    }
}

function chooseSprites(user,upKey,downKey,rightKey,leftKey,aKey,bKey,cKey,keys){
    if(user.direction === 'right'){
        if(keys[downKey].pressed && user.isGrounded){
            if(keys[aKey].pressed && !keys[aKey].holdKey){
                keys[aKey].holdKey = true
                user.switchSprite('twoA')
            }else if(keys[bKey].pressed && !keys[bKey].holdKey){
                keys[bKey].holdKey = true
                user.switchSprite('twoB')
            }else if(keys[cKey].pressed && !keys[cKey].holdKey){
                keys[cKey].holdKey = true
                user.switchSprite('twoC')
            }else if(user.checkLastFrame('crouch') || user.checkLastFrame('twoA') || user.checkLastFrame('twoB') || user.checkLastFrame('twoC') || user.checkCurrImage('crouchIdle') ){
                user.switchSprite('crouchIdle')
            }else if(user.image !== user.sprites.crouchIdle.image){
                user.switchSprite('crouch')
            }
        }
        else if(keys[leftKey].pressed && keys[rightKey].pressed && user.isGrounded){
            user.switchSprite('idle')
            user.velocity.x = 0
        }
        else if(keys[rightKey].pressed){
            if(user.queue.lastFour()[3] == rightKey && user.queue.lastFour()[2] == rightKey && user.isGrounded && !keys[rightKey].holdKey){
                user.switchSprite('dashForward')
            }else if(keys[cKey].pressed && !keys[cKey].holdKey && user.isGrounded){
                user.switchSprite('sixC')
                keys[cKey].holdKey = true
            }
            else if(user.isGrounded){
                user.switchSprite('walkF')
            }else if(!user.isGrounded && user.checkCurrImage('jumpUp')) {
                user.velocity.x = 1.5
            }
            keys[rightKey].holdKey= true
        } 
        else if(keys[leftKey].pressed){
            if(user.queue.lastFour()[3] == leftKey && user.queue.lastFour()[2] == leftKey && user.isGrounded && !keys[leftKey].holdKey){
                user.switchSprite('dashBackward')
            }else if(user.isGrounded){
                user.switchSprite('walkB')
            }else if(!user.isGrounded && user.checkCurrImage('jumpUp')){
                user.velocity.x = -1.5
            }
            keys[leftKey].holdKey= true
        }
        else if(keys[aKey].pressed && !keys[aKey].holdKey && user.isGrounded){
            if(user.queue.lastFour()[3] == downKey && user.queue.lastFour()[2] == rightKey && user.queue.lastFour()[1] == downKey && user.queue.lastFour()[0] == rightKey && user.isGrounded && !keys[aKey].holdKey){
                user.switchSprite('doubleKick')
                keys[aKey].holdKey = true
            }else if(user.queue.lastFour()[3] == downKey && user.queue.lastFour()[2] == downKey && user.isGrounded && !keys[aKey].holdKey){
                user.switchSprite('quakeStompA')
                keys[aKey].holdKey = true
            }else if(user.queue.lastFour()[3] == leftKey && user.queue.lastFour()[2] == downKey && user.isGrounded && !keys[aKey].holdKey){
                user.switchSprite('arrowFistA')
                keys[aKey].holdKey = true
            }else{
                keys[aKey].holdKey = true
                user.switchSprite('fiveA')
            }
        } 
        else if(keys[bKey].pressed && !keys[bKey].holdKey && !user.followThroughAnimation('fiveB') && user.isGrounded){
            if(user.queue.lastFour()[3] == downKey && user.queue.lastFour()[2] == downKey && user.isGrounded && !keys[bKey].holdKey){
                user.switchSprite('quakeStompB')
                keys[bKey].holdKey = true
            }else if(user.queue.lastFour()[3] == leftKey && user.queue.lastFour()[2] == downKey && user.isGrounded && !keys[bKey].holdKey){
                user.switchSprite('arrowFistB')
                keys[bKey].holdKey = true
            }else{
                keys[bKey].holdKey = true
                user.switchSprite('fiveB')
            }
        }
        else if(keys[cKey].pressed && !keys[cKey].holdKey && !user.followThroughAnimation('fiveC') && user.isGrounded){
            if(user.queue.lastFour()[3] == downKey && user.queue.lastFour()[2] == downKey && user.isGrounded && !keys[cKey].holdKey){
                user.switchSprite('quakeStompC')
                keys[cKey].holdKey = true
            }else if(user.queue.lastFour()[3] == leftKey && user.queue.lastFour()[2] == downKey && user.isGrounded && !keys[cKey].holdKey){
                user.switchSprite('arrowFistC')
                keys[cKey].holdKey = true
            }else{
                keys[cKey].holdKey = true
                user.switchSprite('fiveC')
            }
        }
        else{
            if(user.isGrounded && user.checkCurrImage('idle')) user.velocity.x = 0

            if( user.checkLastFrame('stand')){
                user.switchSprite('idle')
            }
            else if(user.image === user.sprites.crouchIdle.image || user.image === user.sprites.stand.image || user.image === user.sprites.crouch.image){
                user.switchSprite('stand')
            }else if(user.isGrounded){
                user.switchSprite('idle')
            }
        }
        if(!user.isGrounded){
            if(keys[aKey].pressed && !keys[aKey].holdKey){
                keys[aKey].holdKey = true
                user.switchSprite('jA')
            }else if(keys[bKey].pressed && !keys[bKey].holdKey){
                keys[bKey].holdKey = true
                user.switchSprite('jB')
            }else if(keys[cKey].pressed && !keys[cKey].holdKey){
                keys[cKey].holdKey = true
                user.switchSprite('jC')
            }else if(user.checkLastFrame('jA') || user.checkLastFrame('jB') || user.checkLastFrame('jC')){
                user.switchSprite('fall')
            }
        }else if(keys[upKey].pressed && keys[rightKey].pressed && user.isGrounded && user.checkCurrImage('walkF')){
            user.switchSprite('jumpForward')
            user.velocity.y = -10.5
        }
        else if(keys[upKey].pressed && keys[leftKey].pressed && user.isGrounded && user.checkCurrImage('walkB')){
            user.switchSprite('jumpBackward')
            user.velocity.y = -10.5
        }
        else if(keys[upKey].pressed && user.isGrounded && user.checkCurrImage('idle')){
            user.switchSprite('jumpUp')
            user.velocity.y = -10.5
        }

        if(keys[leftKey].pressed && (user.checkCurrImage('idle') || user.checkCurrImage('crouchIdle') || 
        user.checkCurrImage('stand') || user.checkCurrImage('crouch') || user.checkCurrImage('jumpUp') || 
        user.checkCurrImage('jumpBackward') || user.checkCurrImage('jumpForward') || user.checkCurrImage('fall') || user.checkCurrImage('walkB'))){
            user.isBlocking = true
        }else{
            user.isBlocking = false
        }

    }else if(user.direction === 'left'){
        if(keys[downKey].pressed && user.isGrounded){
            if(keys[aKey].pressed && !keys[aKey].holdKey){
                keys[aKey].holdKey = true
                user.switchSprite('twoALeft')
            }else if(keys[bKey].pressed && !keys[bKey].holdKey){
                keys[bKey].holdKey = true
                user.switchSprite('twoBLeft')
            }else if(keys[cKey].pressed && !keys[cKey].holdKey){
                keys[cKey].holdKey = true
                user.switchSprite('twoCLeft')
            }else if(user.checkLastFrame('crouchLeft') || user.checkLastFrame('twoALeft') || user.checkLastFrame('twoBLeft') || user.checkLastFrame('twoCLeft') || user.checkCurrImage('crouchIdleLeft') ){
                user.switchSprite('crouchIdleLeft')
            }else if(user.image !== user.sprites.crouchIdle.image){
                user.switchSprite('crouchLeft')
            }
        }
        else if(keys[leftKey].pressed && keys[rightKey].pressed && user.isGrounded){
            user.switchSprite('idleLeft')
            user.velocity.x = 0
        }
        else if(keys[leftKey].pressed){
            if(user.queue.lastFour()[3] == leftKey && user.queue.lastFour()[2] == leftKey && user.isGrounded && !keys[leftKey].holdKey){
                user.switchSprite('dashForwardLeft')
            }else if(keys[cKey].pressed && !keys[cKey].holdKey && user.isGrounded){
                user.switchSprite('sixCLeft')
                keys[cKey].holdKey = true
            }
            else if(user.isGrounded){
                user.switchSprite('walkFLeft')
            }else if(!user.isGrounded && user.checkCurrImage('jumpUpLeft')) {
                user.velocity.x = -1.5
            }
            keys[leftKey].holdKey= true
        } 
        else if(keys[rightKey].pressed){
            if(user.queue.lastFour()[3] == rightKey && user.queue.lastFour()[2] == rightKey && user.isGrounded && !keys[rightKey].holdKey){
                user.switchSprite('dashBackwardLeft')
            }else if(user.isGrounded){
                user.switchSprite('walkBLeft')
            }else if(!user.isGrounded && user.checkCurrImage('jumpUpLeft')){
                user.velocity.x = 1.5
            }
            keys[rightKey].holdKey= true
        }
        else if(keys[aKey].pressed && !keys[aKey].holdKey && user.isGrounded){
            if(user.queue.lastFour()[3] == downKey && user.queue.lastFour()[2] == leftKey && user.queue.lastFour()[1] == downKey && user.queue.lastFour()[0] == leftKey && user.isGrounded && !keys[aKey].holdKey){
                user.switchSprite('doubleKickLeft')
                keys[aKey].holdKey = true
            }else if(user.queue.lastFour()[3] == downKey && user.queue.lastFour()[2] == downKey && user.isGrounded && !keys[aKey].holdKey){
                user.switchSprite('quakeStompALeft')
                keys[aKey].holdKey = true
            }else if(user.queue.lastFour()[3] == rightKey && user.queue.lastFour()[2] == downKey && user.isGrounded && !keys[aKey].holdKey){
                user.switchSprite('arrowFistALeft')
                keys[aKey].holdKey = true
            }else{
                keys[aKey].holdKey = true
                user.switchSprite('fiveALeft')
            }
        } 
        else if(keys[bKey].pressed && !keys[bKey].holdKey && !user.followThroughAnimation('fiveBLeft') && user.isGrounded){
            if(user.queue.lastFour()[3] == downKey && user.queue.lastFour()[2] == downKey && user.isGrounded && !keys[bKey].holdKey){
                user.switchSprite('quakeStompBLeft')
                keys[bKey].holdKey = true
            }else if(user.queue.lastFour()[3] == rightKey && user.queue.lastFour()[2] == downKey && user.isGrounded && !keys[bKey].holdKey){
                user.switchSprite('arrowFistBLeft')
                keys[bKey].holdKey = true
            }else{
                keys[bKey].holdKey = true
                user.switchSprite('fiveBLeft')
            }
        }
        else if(keys[cKey].pressed && !keys[cKey].holdKey && !user.followThroughAnimation('fiveCLeft') && user.isGrounded){
            if(user.queue.lastFour()[3] == downKey && user.queue.lastFour()[2] == downKey && user.isGrounded && !keys[cKey].holdKey){
                user.switchSprite('quakeStompCLeft')
                keys[cKey].holdKey = true
            }else if(user.queue.lastFour()[3] == rightKey && user.queue.lastFour()[2] == downKey && user.isGrounded && !keys[cKey].holdKey){
                user.switchSprite('arrowFistCLeft')
                keys[cKey].holdKey = true
            }else{
                keys[cKey].holdKey = true
                user.switchSprite('fiveCLeft')
            }
        }
        else{
            if(user.isGrounded && user.checkCurrImage('idleLeft')) user.velocity.x = 0

            if( user.checkLastFrame('standLeft')){
                user.switchSprite('idleLeft')
            }
            else if(user.image === user.sprites.crouchIdleLeft.image || user.image === user.sprites.standLeft.image || user.image === user.sprites.crouchLeft.image){
                user.switchSprite('standLeft')
            }else if(user.isGrounded){
                user.switchSprite('idleLeft')
            }
        }
        if(!user.isGrounded){
            if(keys[aKey].pressed && !keys[aKey].holdKey){
                keys[aKey].holdKey = true
                user.switchSprite('jALeft')
            }else if(keys[bKey].pressed && !keys[bKey].holdKey){
                keys[bKey].holdKey = true
                user.switchSprite('jBLeft')
            }else if(keys[cKey].pressed && !keys[cKey].holdKey){
                keys[cKey].holdKey = true
                user.switchSprite('jCLeft')
            }else if(user.checkLastFrame('jALeft') || user.checkLastFrame('jBLeft') || user.checkLastFrame('jCLeft')){
                user.switchSprite('fallLeft')
            }
        }else if(keys[upKey].pressed && keys[leftKey].pressed && user.isGrounded && user.checkCurrImage('walkFLeft')){
            user.switchSprite('jumpForwardLeft')
            user.velocity.y = -10.5
        }
        else if(keys[upKey].pressed && keys[rightKey].pressed && user.isGrounded && user.checkCurrImage('walkBLeft')){
            user.switchSprite('jumpBackwardLeft')
            user.velocity.y = -10.5
        }
        else if(keys[upKey].pressed && user.isGrounded && user.checkCurrImage('idleLeft')){
            user.switchSprite('jumpUpLeft')
            user.velocity.y = -10.5
        }
        
        if(keys[rightKey].pressed && (user.checkCurrImage('idleLeft') || user.checkCurrImage('crouchIdleLeft') || 
        user.checkCurrImage('standLeft') || user.checkCurrImage('crouchLeft') || user.checkCurrImage('jumpUpLeft') || 
        user.checkCurrImage('jumpBackwardLeft') || user.checkCurrImage('jumpForwardLeft') || user.checkCurrImage('fallLeft') || user.checkCurrImage('walkBLeft'))){
            user.isBlocking = true
        }else{
            user.isBlocking = false
        }
    }
}

function keyListener(user,upKey,downKey,rightKey,leftKey,aKey,bKey,cKey,keys){
    //Movement listener
    window.addEventListener('keydown', (event) =>{
        switch(event.key){
            case upKey:
                keys[upKey].pressed = true
                user.queue.enqueue(upKey)
                break
            case leftKey:
                keys[leftKey].pressed = true
                user.queue.enqueue(leftKey)
                break
            case downKey:
                keys[downKey].pressed = true
                user.queue.enqueue(downKey)
                break
            case rightKey:
                keys[rightKey].pressed = true
                user.queue.enqueue(rightKey)
                break
            case aKey:
                keys[aKey].pressed = true
                break
            case bKey:
                keys[bKey].pressed = true
                break
            case cKey:
                keys[cKey].pressed = true
                break
        }
    })

    window.addEventListener('keyup', (event) =>{
        switch(event.key){
            case upKey:
                keys[upKey].pressed = false
                break
            case leftKey:
                keys[leftKey].pressed = false
                keys[leftKey].holdKey = false
                break
            case downKey:
                keys[downKey].pressed = false
                break
            case rightKey:
                keys[rightKey].pressed = false
                keys[rightKey].holdKey = false
                break
            case aKey:
                keys[aKey].holdKey = false
                keys[aKey].pressed = false
                break
            case bKey:
                keys[bKey].holdKey = false
                keys[bKey].pressed = false
                break
            case cKey:
                keys[cKey].holdKey = false
                keys[cKey].pressed = false
                break
        }
    })
}

function determineWinner({player,enemy, timerId}){
    clearTimeout(timerId)
    if(player.health === enemy.health){
        document.querySelector('#displayText').innerHTML = 'TIE'
    } else if(player.health > enemy.health){
        document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
    } else if(player.health < enemy.health){
        document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
    }
}

//Check if attackbox collides with hitbox
function hitCollision({rectangle1, rectangle2}){
    return (
        (rectangle1.attackbox.position.x + rectangle1.attackbox.width >= rectangle2.hitbox.position.x 
            && rectangle1.attackbox.position.x <= rectangle2.hitbox.position.x + rectangle2.hitbox.width
            && rectangle1.attackbox.position.y + rectangle1.attackbox.height >= rectangle2.hitbox.position.y
            && rectangle1.attackbox.position.y <= rectangle2.hitbox.position.y + rectangle2.hitbox.height) 
        ||
        (rectangle1.attackbox1.position.x + rectangle1.attackbox1.width >= rectangle2.hitbox.position.x 
            && rectangle1.attackbox1.position.x <= rectangle2.hitbox.position.x + rectangle2.hitbox.width
            && rectangle1.attackbox1.position.y + rectangle1.attackbox1.height >= rectangle2.hitbox.position.y
            && rectangle1.attackbox1.position.y <= rectangle2.hitbox.position.y + rectangle2.hitbox.height) 
        ||
        (rectangle1.attackbox.position.x + rectangle1.attackbox.width >= rectangle2.hitbox1.position.x 
            && rectangle1.attackbox.position.x <= rectangle2.hitbox1.position.x + rectangle2.hitbox1.width
            && rectangle1.attackbox.position.y + rectangle1.attackbox.height >= rectangle2.hitbox1.position.y
            && rectangle1.attackbox.position.y <= rectangle2.hitbox1.position.y + rectangle2.hitbox1.height) 
        ||
        (rectangle1.attackbox1.position.x + rectangle1.attackbox1.width >= rectangle2.hitbox1.position.x 
            && rectangle1.attackbox1.position.x <= rectangle2.hitbox1.position.x + rectangle2.hitbox1.width
            && rectangle1.attackbox1.position.y + rectangle1.attackbox1.height >= rectangle2.hitbox1.position.y
            && rectangle1.attackbox1.position.y <= rectangle2.hitbox1.position.y + rectangle2.hitbox1.height)
        ||
        (rectangle1.attackbox.position.x + rectangle1.attackbox.width >= rectangle2.hitbox2.position.x 
            && rectangle1.attackbox.position.x <= rectangle2.hitbox2.position.x + rectangle2.hitbox2.width
            && rectangle1.attackbox.position.y + rectangle1.attackbox.height >= rectangle2.hitbox2.position.y
            && rectangle1.attackbox.position.y <= rectangle2.hitbox2.position.y + rectangle2.hitbox2.height) 
        ||
        (rectangle1.attackbox1.position.x + rectangle1.attackbox1.width >= rectangle2.hitbox2.position.x 
            && rectangle1.attackbox1.position.x <= rectangle2.hitbox2.position.x + rectangle2.hitbox2.width
            && rectangle1.attackbox1.position.y + rectangle1.attackbox1.height >= rectangle2.hitbox2.position.y
            && rectangle1.attackbox1.position.y <= rectangle2.hitbox2.position.y + rectangle2.hitbox2.height)
        ||
        (rectangle1.attackbox.position.x + rectangle1.attackbox.width >= rectangle2.hitbox3.position.x 
            && rectangle1.attackbox.position.x <= rectangle2.hitbox3.position.x + rectangle2.hitbox3.width
            && rectangle1.attackbox.position.y + rectangle1.attackbox.height >= rectangle2.hitbox3.position.y
            && rectangle1.attackbox.position.y <= rectangle2.hitbox3.position.y + rectangle2.hitbox3.height) 
        ||
        (rectangle1.attackbox1.position.x + rectangle1.attackbox1.width >= rectangle2.hitbox3.position.x 
            && rectangle1.attackbox1.position.x <= rectangle2.hitbox3.position.x + rectangle2.hitbox3.width
            && rectangle1.attackbox1.position.y + rectangle1.attackbox1.height >= rectangle2.hitbox3.position.y
            && rectangle1.attackbox1.position.y <= rectangle2.hitbox3.position.y + rectangle2.hitbox3.height)  
    )
}



//player and enemy user both use the Miyako sprites
player = chooseMiyako(0,0)
enemy = chooseMiyako(900,0)

keyListener(player,'w','s','d','a','u','i','o',keys1)
keyListener(enemy,'ArrowUp','ArrowDown','ArrowRight','ArrowLeft','1','2','3',keys2)

function animate(){
    window.requestAnimationFrame(animate)
    background.update()
    player.update()
    enemy.update()

    //Choose direction
    if(player.position.x > enemy.position.x){
        player.direction = 'left'
        enemy.direction = 'right'
    } else if (player.position.x < enemy.position.x){
        player.direction = 'right'
        enemy.direction = 'left'
    }



    //player collision
    if(player.position.x + player.width >= enemy.position.x && player.position.x <= enemy.position.x+enemy.width &&(Math.abs(enemy.velocity.x) === Math.abs(player.velocity.x))){
        player.velocity.x = 0
        enemy.velocity.x = 0 
    }
    else if(player.position.x + player.width >= enemy.position.x && (Math.abs(enemy.velocity.x) >= Math.abs(player.velocity.x))
    && player.direction == 'right' && enemy.direction == 'left'){
        player.position.x = enemy.position.x - enemy.width
    }
    else if(player.position.x + player.width >= enemy.position.x &&(Math.abs(enemy.velocity.x) <= Math.abs(player.velocity.x))
    && player.direction == 'right' && enemy.direction == 'left'){
        enemy.position.x = player.position.x + player.width
    }
    else if(enemy.position.x + enemy.width >= player.position.x && (Math.abs(enemy.velocity.x) <= Math.abs(player.velocity.x))
    && player.direction == 'left' && enemy.direction == 'right'){
        enemy.position.x = player.position.x - player.width
    }
    else if(enemy.position.x + enemy.width >= player.position.x &&(Math.abs(enemy.velocity.x) >= Math.abs(player.velocity.x))
    && player.direction == 'left' && enemy.direction == 'right'){
        player.position.x = enemy.position.x + enemy.width
    }

    chooseSprites(player,'w','s','d','a','u','i','o',keys1)
    chooseSprites(enemy,'ArrowUp','ArrowDown','ArrowRight','ArrowLeft','1','2','3',keys2)

    if ( 
        hitCollision({
            rectangle1:player,
            rectangle2:enemy
        })&& !enemy.isBlocking){
        enemy.health -= 1
        gsap.to('#enemyHealth',{
            width:enemy.health + '%'
        })
    }

    if ( 
        hitCollision({
            rectangle1:enemy,
            rectangle2:player
        })&& !player.isBlocking) {
        player.health -= 1
        gsap.to('#playerHealth',{
            width:player.health + '%'
        })
    }

    if(player.health <=0 || enemy.health <= 0){
        document.querySelector('#displayText').style.display = 'flex'
        determineWinner({player,enemy,timerId})
    }

}

let timer = 90
let timerId
function decreaseTimer(){
    if(timer > 0){
    timerId = setTimeout(decreaseTimer, 1000)
    timer --
    document.querySelector('#timer').innerHTML = timer
    }

    if(timer === 0){
        document.querySelector('#displayText').style.display = 'flex'
        determineWinner({player,enemy,timerId})
    }
}

decreaseTimer()

animate()
