# Calvin Bullock -- week 6

## Object methods, "this"
- objs usally represent a real work item or entity (eg: a person)
- can assign a function to an obj creating a **method**
    ```js
        let user = {
            name: "John",
            age: 30
        };

        user.sayHi = function() {
            alert("Hello!");
        };

        user.sayHi(); // Hello!
        
        // -------------------------------------------------------
        // different ways to define methods

        // these objects do the same
        user = {
            sayHi: function() {     //<---- the "function keyword was removed"
                alert("Hello");
            }
        };

        // method shorthand looks better, right?
        user = {
            sayHi() { // same as "sayHi: function(){...}"
                alert("Hello");
            }
        };

        // -------------------------------------------------------
        // using this

        let user = {
            name: "John",
            age: 30,
        
            sayHi() {
                // "this" is the "current object"
                alert(this.name);
            }

        };
        
        user.sayHi(); // John

        // -------------------------------------------------------
        // can access the object without "this", by referencing it via the outer variable: 
        //   **But such code is unreliable**

        let user = {
            name: "John",
            age: 30,

            sayHi() {
                alert(user.name); // "user" instead of "this"
            }

        };
    ```
- 
    - `this` in js can be used on functions that are not part of a class "not declared as a method"

- arrow functions have there own rules
    - If we reference this from such a function, it’s taken from the outer “normal” function.
    ```js
        let user = {
            firstName: "Ilya",
            sayHi() {
                let arrow = () => alert(this.firstName);
                arrow();
            }
        };

        user.sayHi(); // Ilya
    ```

## what is `THIS` keyword in JS
- using `this` without a given obj `this = window`
- can use bindings to pass in this when the obj can't have an function added to it.
```js
    function talk(param1, param2 ) {
        return `I am ${this.name}`
    }

    const = me {
        name: 'Sina'
    }

    talk.bind(me)

    // this is called binding
    const meTalk = talk.bind(me)
    meTalk() // prints Sina

    // using with params
    talk.bind(me, param1, param2)
    talk.apply(me, [param1, param2]) // this will take extra params as array
```

- can make constructors in js
```js
    function Person(n) {
        this.talk = n;
        this.talk = function() = {
            console.log(this);
        }
    }
    cosnt me = Person('bella');
    me.talk(); // prints bella
```

- callback functions will use `this` differently
    - a default use of `this` in a callback func will often refure to the scope of the function that is doing the callback not the function being called back
    - can use `callBakFunc.bind(obj)` to pass in the this you want to use

## CSS animation

### css transitions
- can use css to tell an element how to move or change
    ```html
        <!-- this shows a slow background color change animation -->
        <button id="color">Click me</button>

        <style>
        #color {
            transition-property: background-color;
            transition-duration: 3s;
        }
        </style>

        <script>
        color.onclick = function() {
            this.style.backgroundColor = 'red';
        };
        </script>
    ```
    - four css properties in animations
        - `transition-property`
        - `transition-duration`
        - `transition-timing-function`
        - `transition-delay`
    - 

- transition-property
    - transition-property 
        - you list properties to animate Ex: left, margin-left, height, color. (could write `all`, AKA `animate all properties`.)
        - note that, some properties can not be animated. However, most common properties can be

- transition-duration
    - In transition-duration specify animation length - (use: CSS time format: in seconds s or milliseconds ms)

- transition-delay
    - In transition-delay we can specify the delay before the animation. 
    - For instance, if transition-delay is 1s and transition-duration is 2s, then the animation starts 1 second after the property change and the total duration will be 2 seconds.

    - Negative values are also possible. 
        - Then the animation is shown immediately, but the starting point of the animation will be after given value (time). 
        - EX: transition-delay is -1s and transition-duration is 2s, then animation starts from the halfway point and total duration will be 1 second.

- transition-timing-function
    - The timing function describes how the animation process is distributed along its timeline. Will it start slowly and then go fast, or vice versa.

- Bezier Curve
    - `cubic-bezier(x2, y2, x3, y3)` -- flat / linear change 
    - Here we need to specify only 2nd and 3rd control points, because the 1st one is fixed to (0,0) and the 4th one is (1,1)
    - `cubic-bezier(0.0, 0.5, 0.5 ,1.0)` -- non linear

    | ease*                  | ease-in	              | ease-out               | ease-in-out            |
    | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
    | (0.25, 0.1, 0.25, 1.0) | (0, 0, 0.58, 1.0)      | (0.42, 0, 1.0, 1.0)    | (0.42, 0, 0.58, 1.0)   |
    

    ```css
        .train {
            left: 0;
            transition: left 5s ease-out;
            /* same as transition: left 5s cubic-bezier(0, .5, .5, 1); */
        }
        

        /*A Bezier curve can make the animation exceed its range */
        .train {
            left: 100px;
            transition: left 5s cubic-bezier(.5, -1, .5, 2);
            /* click on a train sets left to 450px */
        }
    ```
- Event: “transitionend”
    - When the CSS animation finishes, the transitionend event triggers.
    - It is widely used to do an action after the animation is done. Also we can join animations.
    - For instance, the ship in the example below starts to sail there and back when clicked, each time farther and farther to the right:
        - [boat Ex](https://javascript.info/css-animations#event-transitionend) 
        ```js
            function go() {
                if (times % 2) {
                // sail to the right
                boat.classList.remove('back');
                boat.style.marginLeft = 100 * times + 200 + 'px';
                } else {
                // sail to the left
                boat.classList.add('back');
                boat.style.marginLeft = 100 * times - 200 + 'px';
                }
            
            }
        ```
- Keyframes
    - We can join multiple simple animations together using the @keyframes CSS rule.
    ```css
        @keyframes go-left-right {        /* give it a name: "go-left-right" */
            from { left: 0px; }             /* animate from left: 0px */
            to { left: calc(100% - 50px); } /* animate to left: 100%-50px */
        }
    ```
     

