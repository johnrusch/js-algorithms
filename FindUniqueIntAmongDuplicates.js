function findUniqueId(ints) {
    let uniqueId = 0;

    ints.forEach(int => {
        uniqueId ^= int
    });
    return uniqueId;
}