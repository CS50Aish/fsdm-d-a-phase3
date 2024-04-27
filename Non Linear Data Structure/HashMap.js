// Creating a HashMap
let hashMap = new Map();

//Initialize with key value pairs
hashMap.set('key1', 'value1');
hashMap.set('key2', 'value2');
hashMap.set('key3', 'value3');
hashMap.set('key4', 'value4');
hashMap.set('key5', 'value5');

// Display the values in the HashMap
for(let [key, value] of hashMap){
    console.log(`key: ${key}, Value: ${value}`)
}

// Accessing a specific value by key
console.log('\nValue of key2:', hashMap.get('key2'));

// Check if a key exists in the HashMap
console.log('\nHashMap has key1:', hashMap.has('key1'));

// Replace or Update exisitng values of key2, and key4
hashMap.set('key2', 'value6');
hashMap.set('key4', 'value8');

console.log('\nHashMap after updating key2, and key4');

// Display the values in the HashMap
for(let [key, value] of hashMap){
    console.log(`key: ${key}, Value: ${value}`)
}

// Removing a key from the hashmap
hashMap.delete('key5');

console.log('\nHashMap after removing key5');

// Display the values in the HashMap
for(let [key, value] of hashMap){
    console.log(`key: ${key}, Value: ${value}`)
}

console.log("HashMap Size: ", hashMap.size);

// Clearing all elements from HashMap
hashMap.clear();

console.log('\nHashMap after clearing all the key value pairs');

// Display the values in the HashMap
for(let [key, value] of hashMap){
    console.log(`key: ${key}, Value: ${value}`)
}

console.log("HashMap Size: ", hashMap.size);