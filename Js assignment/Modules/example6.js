// Importing specific functions and variables
import { add, subtract, PI } from './math.js';

console.log(add(5, 3));        // Output: 8
console.log(subtract(5, 3));   // Output: 2
console.log(PI);               // Output: 3.14159


// Default export
export default function greet(name) {
  return `Hello, ${name}!`;
} 
