const n1 ={
    data: 100
}
const n2 = {
    data: 200
}
// how to reference node2 from node 1
n1.next = n2

console.log(n1)

class Node{
    constructor(data,next = null){
        this.data = data,
        this.next = next
    }
}
// intially we have a empty liked list so the head would be null and the size would be 0
class Linkedlist{
    constructor(){
        this.head = null,
        this.size = 0
    }
}
// insert the first node
// creates the head of the linked list. Will push whatever node that was in its place to the right 
insertFirst(data){
    this.head = new Node(data,this.head)
}

//insert the last node

insertLast(data){
    let node = new Node(data)
    let current

    // if list is empty then make a head. head and tail would be equal to each other

    if(this.head === null){
        this.head = node
    }else{
        current = this.head
        while(current.next){
            current = current.next
        }
            current.next = node

        }
     this.size++
    }


// insert at a index

//get at index

//remove at index

// clear the list 

// print the list data

printListData(){
    let current = this.head

    while(current){
        console.log(curret.data)
        current = current.next
    }
}
