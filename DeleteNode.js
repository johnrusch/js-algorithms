function deleteNode(node) {
    const nextNode = node.next;

    if (nextNode) {
        node.value = nextNode.value;
        node.next = nextNode.next;
    } else {
        throw new Error("Can't delete the last node here ;)")
    }
}