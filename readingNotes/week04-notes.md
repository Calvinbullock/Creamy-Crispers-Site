# Calvin Bullock - Oct 10th 2024

## Browser Debugging

- "The debugger keyword only works when the dev tools are open"
- has all the usuwal
    - step
    - step over
    - step into
    - step out
    - watch - global, local, 
    - call stack

## Codding Style
- "That is actually the art of programming – to take a complex task and code it in a way that is both correct and human-readable. A good code style greatly assists in that."
- Egyptian style -- I have never heard it called this before 
    - I like that js uses my prefers style
- its still strange when I see round brackets broken like this I think I looks better then the alternative but still looks a bit strange to me
```js
if (
  id === 123 &&
  moonPhase === 'Waning Gibbous' &&
  zodiacSign === 'Libra'
) {
  letTheSorceryBegin();
}
```
- vertical indents / newlines to separate code blocks -- I like lots of this -- I think it's more readable
- semicolons == Good -- less bugs / issues
- Avoid to much nesting -- always a good idea
- helper functions
    - ether above or below the code they are "helping"
    - be consistent
    - -- I usually prefer functions above

- ____Most import thing is consistency___

## Error Handling
- try...catch only works for runtime errors
    - AKA the code that throw's the errors must be code that runs properly
- set Time can break a try catch
- errors are an object (json)
    - _Built in errors_
        - name
        - message
        - stack
    - special / custom errors can also be created by the user
        - don't have to be an object
        - Error constructors:
        ```js
        let error = new Error(message);
        // or
        let error = new SyntaxError(message);
        let error = new ReferenceError(message);
        // ...
        ```
- can use `finally` if all else fails this will run


