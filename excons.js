function parse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.error("Error parsing JSON:", e);
        return null;
    }
}

const jsonString = '{"name": "Alice", "age": 30}';
const parsedData = parse(jsonString);
console.log(parsedData);  // Output: { name: 'Alice', age: 30 }
