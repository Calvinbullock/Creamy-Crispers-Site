# Calvin Bullock -- week 10

# An Introduction to Functions, Execution Context and the Call Stack (22min)
- variables are stored in memory
- functions are stored as a block of all the modular-ized lines / instructions
- JS goose line by line
    - a function call is a pointer to the memory it does not go back to the function declaration in the script file
- a script is one line at a time
- when an var is waiting for a function to store to complete to store the value it leaves the key set to `undefined`
- a new function call opens a new execution context to run and store the vars in.
- js needs to track the current `execution context`
    - and track the location to return too
        - **this is the call stack**

# How to Understand Callbacks & Higher Order Functions (40min)
- a function is to be reusable and generic
- you can pass a function as a variable
```js
    // we can pass a function to do a thing in a function
    function highOrder(instructions) {
        output = []
        output.push(instructions())
        return output
    }

    function squareNum(a, b) {
        return a * b
    }

    highOrder(squareNum(a, b))
```
- functions are first class objects
    - they are just like an object
        - they can be stored in variable
        - passed as parameters
        - returned as a output value
    - can be invoked **unlike ** an object
