class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    if (head.next === null) return;
    if (head === null) {
        throw new Error("Head must not be null, no node found");
    }
    let currentNode = head;
    let prevNode = null;
    let nextNode = null;
    while (currentNode !== null) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    return prevNode;
}