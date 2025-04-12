//Exporting from a Module

// mathUtils.ts
export function add(a: number, b: number): number {
    return a + b;
  }
  
  export const PI = 3.14;
 
//Importing from a Module

// app.ts
import { add, PI } from "./mathUtils";

console.log(add(5, 3)); // 8
console.log(PI);        // 3.14


// Default Export

// logger.ts
export default function logMessage(message: string): void {
    console.log("Log:", message);
  }

// app.ts
import logMessage from "./logger";

logMessage("Arif is learning modules!");

