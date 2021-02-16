class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function kthToLastNode(k, headNode) {

    //sets pointers to the head and to 
    //the node after the head
    let firstPointer = headNode;
    let secondPointer = headNode.next;

    //iterates through the linked list 'k' 
    //steps from the head
    let i = 1;
    while (i < k) {
        i++;
        secondPointer = secondPointer.next;
    }

    //if the secondPointer doesn't exist we know
    //that the input for 'k' is greater than the
    //length of the list
    if (secondPointer === null) {
        throw new Error("k must be shorter than length of linked list.")
    }

    //while the secondPointer is not null
    //progress through the list
    while (secondPointer !== null) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }
    //once secondPointer is null return the 
    //first pointer
    return firstPointer;
}