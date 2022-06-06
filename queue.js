class Queue{

    constructor(c){
        this.c = c
        this.elements = new Object(c)
        this.head = 0
        this.tail = 0
    }

    enqueue(element){
        if(this.c === (this.length()-1)){
            this.dequeue()
        }
        this.elements[this.tail] = element
        this.tail++ 
    }

    dequeue(){
        const element  = this.elements[this.head]
        delete this.elements[this.head]
        this.head++
        return element
    }

    lastFour(){
        return [this.elements[this.tail-4],this.elements[this.tail-3],this.elements[this.tail-2],this.elements[this.tail-1]]
    }

    length(){
        return this.tail - this.head
    }
}