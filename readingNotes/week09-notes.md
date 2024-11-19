# Calvin Bullock -- week 9

# Variable Scope, Closure
#### code blocks
- var and funcs exist only in the code block they are declared in
- scope is often (but not always) based on curly braces

#### global Lexical Environment
- (like a globale base object)

#### var
- A variable is a property of a special internal object, associated with the currently executing block/function/script.
- Working with variables is actually working with the properties of that object.

#### functions
- functions are values like variables
- HOWEVER functions are available right away (unlike let, that is unusable till the declaration)
    - When a function runs, a new Lexical Environment is created automatically to store local variables and parameters

#### inner / outer Lexical
- the inner Lexical has a reference to the outer for vars and functions.
    - the inner is searched first then the outer if no match is in the inner

#### garbage collection
- often function lexical is killed after the function completes
    - it is most correct to say a lexical dies when it is unreachable (like most objects)

#### Real life optimizations
- JS engines work to optimize vars, this means that if a var is not used it is removed
- this means removed vars are not available in a debugger

# Currying
- Currying is a transformation of functions, from callable as `f(a, b, c)` into callable as `f(a)(b)(c)`
- EX:
    ```js
    // CURRY HERE
    function curry(f) { // curry(f) does the currying transform
      return function(a) {
        return function(b) {
          return f(a, b);
        };
      };
    }

    // usage
    function sum(a, b) {
      return a + b;
    }

    let curriedSum = curry(sum);

    alert( curriedSum(1)(2) ); // 3
    ```
- from the reading -- "Currying allows us to easily get partials. As we’ve seen in the logging example, after currying the three argument universal function log(date, importance, message) gives us partials when called with one argument (like log(date)) or two arguments (like log(date, importance))."
    - so currying lets us break up a function so we don't need all the vars every time???
    - still not sure why this is useful but I hope to understand it better...

# Web APIs: Drawing Graphics
- the browser contains some very powerful graphics programming tools,
    - Scalable Vector Graphics (SVG) language
    - to APIs for drawing on HTML <canvas> elements (see The Canvas API and WebGL)

#### Graphics on the web
- some of the first `grahpics on the web where`
    - img tags
    - css background img
    - SVGs

- canvas was added to give devs even more ability in 2004
- useful for:
    - games
    - graphics
    - 2d animations
- openGL was then added in 2006-2007
    - #D graphics

#### Canvas
- need a canvas tag
    - `<canvas width="320" height="240"></canvas>`
- should add a fall back description
    ```js
    <canvas width="320" height="240">
      <p>Description of the canvas for those unable to view it.</p>
    </canvas>
    ```

#### Drawing Paths
- "Basically, this involves writing code to specify exactly what path the pen should move along on your canvas"
    - beginPath() — start drawing a path at the point where the pen currently is on the canvas. On a new canvas, the pen starts out at (0, 0).
    - moveTo() — move the pen to a different point on the canvas, without recording or tracing the line; the pen "jumps" to the new position.
    - fill() — draw a filled shape by filling in the path you've traced so far.
    - stroke() — draw an outline shape by drawing a stroke along the path you've drawn so far.
    - You can also use features like lineWidth and fillStyle/strokeStyle with paths as well as rectangles.
    ```js
    // Example drawing
    ctx.fillStyle = "rgb(255 0 0)";
    ctx.beginPath();
    ctx.moveTo(50, 50);
    // draw your path
    ctx.fill();
    ```
- drawing lines
- drawing circles

#### text
- fillText() — draws filled text.
- strokeText() — draws outline (stroke) text.
- propeties to control size and rendering
    - EX: `font -- lets you specify font family, size, etc. `

#### images
- can render simple images
    ```js
    // creat img
    const image = new Image();
    image.src = "firefox.png";

    // load img
    image.addEventListener("load", () => ctx.drawImage(image, 20, 20));

    // display only part or resize it
    ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);

    // update Accessibility Description
    canvas.setAttribute("aria-label", "Firefox Logo");
    ```

#### other abilities
- there is a lot of specific exsamples here
    - Loops Animations
    - Animations
    - A simple drawing application

#### WEB-GL
- Some of the Libraries
    - Three.js
    - PlayCanvas
    - Babylon.js.

