let id = 0;

function getNextId() {
    id += 1;
    return id;
}

console.log(getNextId()); // Output: 1
console.log(getNextId()); // Output: 2
console.log(getNextId()); // Output: 3
