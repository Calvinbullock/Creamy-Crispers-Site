# Calvin Bullock - Oct 16th 2024

# Fetching
- `let promise = fetch(url, [options])`
    - this can be used to get data from serves and other sites (which are still servers...) 
    - url – the URL to access.
    - options – optional parameters: method, headers etc.
    - will return a status code (400- ok, 404 - not found, etc)

- `let response = await fetch(url);`
    - response.text() – read the response and return as text,
    - response.json() – parse the response as JSON,
    - response.formData() – return the response as FormData object (explained in the next chapter),
    - response.blob() – return the response as Blob (binary data with type),
    - response.arrayBuffer() – return the response as ArrayBuffer (low-level representation of binary data),
    - additionally, response.body is a ReadableStream object, it allows you to read the body chunk-by-chunk, we’ll see an example later.

    ```js 
    // pure js promise syntax
    fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
        .then(response => response.json())
        .then(commits => alert(commits[0].author.login));

    // ------------------------------------------------------- \\

    // note the use of await with res.text()
    //      if using the res(promise) await is needed
    let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
    let text = await response.text(); // read response body as text
    alert(text.slice(0, 80) + '...');

    // ------------------------------------------------------- \\

    // can only use one body-reading method promise
    let text = await response.text(); // response body consumed
    let parsed = await response.json(); // fails (already consumed)

    // ------------------------------------------------------- \\

    // adding headers to fetch
    let response = fetch(protectedUrl, {
        headers: {
            Authentication: 'secret'
        }
    });

    ```

## Post
- post is a option in the fetch func

```js
let user = {
    name: 'John',
    surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
    method: 'POST', // <---- POST keyword
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);
```

# Fetch: Cross-Origin Requests
- sending a fetch to another site needs a special header with:
    - “CORS”: Cross-Origin Resource Sharing - policy
    - used to help protect security of the web

## Safe request
- two types of CORS
    - safe 
    - all others

    - Safe method: GET, POST or HEAD
    - Safe headers – the only allowed custom headers are:
        - Accept,
        - Accept-Language,
        - Content-Language,
        - Content-Type with the value application/x-www-form-urlencoded, multipart/form-data or text/plain.

    - unsafe
        - PUT method 
        - API-Key HTTP-header 
    - even a very old server should be ready to accept a safe request

- If a request is cross-origin, the browser always adds the Origin header to it.
    - Cache-Control
    - Content-Language
    - Content-Length
    - Content-Type
    - Expires
    - Last-Modified
    - Pragma

## “Unsafe” requests
- can use any request
    - get
    - post
    - patch
    - delete

- modern browsers send a "pre-flight" check before an unsafe request.
    - A preflight request uses the method OPTIONS, no body and three headers:
        - Access-Control-Request-Method header has the method of the unsafe request.
        - Access-Control-Request-Headers header provides a comma-separated list of its unsafe HTTP-headers.
        - Origin header tells from where the request came. (such as https://javascript.info
    - If the server agrees to serve the requests, then it should respond with empty body, status 200 and headers:

## Credentials
- cross origin -- no credentials
- we can send creds.. like in the example below
```js
fetch('http://another.com', {
  credentials: "include"
});
```

# Rest parameters and spread syntax
- Many JavaScript built-in functions support an arbitrary number of arguments.
    - EX:
        - Math.max(arg1, arg2, ..., argN) – returns the greatest of the arguments.
        - Object.assign(dest, src1, ..., srcN) – copies properties from src1..N into dest

- Js functions will not give an excessive args error **it just wont use them**
    ```js
    function sum(a, b) {
    return a + b;
    }
    
    let x = alert( sum(1, 2, 3, 4, 5) ); // x = 3
    ```

- a function can gather the extra vars into an array 
    - this is the REST param -- `...titles`
    - it has to be the last in the function declaration
    ```js
    function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName ); // Julius Caesar
    
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    alert( titles[0] ); // Consul
    alert( titles[1] ); // Imperator
    alert( titles.length ); // 2
    }
    
    showName("Julius", "Caesar", "Consul", "Imperator");
    ```

- can also use `arguments` var as an iterable
    - **like $1, $2, etc in bash functions**
    ```js
    function showName() {
    alert( arguments.length );
    alert( arguments[0] );
    alert( arguments[1] );
    
    // it's iterable
    // for(let arg of arguments) alert(arg);
    }
    
    // shows: 2, Julius, Caesar
    showName("Julius", "Caesar");
    
    // shows: 1, Ilya, undefined (no second argument)
    showName("Ilya");
    ```

- can use a similar idea as the REST params to clone a arr or object
    ```js
    let arr = [1, 2, 3];
    
    let arrCopy = [...arr]; // spread the array into a list of parameters
                            // then put the result into a new array
    let objCopy = { ...obj }
    ```

# How Single-Page Applications Work
- navagating will not change the location

- Ex:
    - curent loc - "/src/" 
    - clicks sign in
    - page "changes"
    - path is still "/src/"

- use a "router"
    - this will re-render the page but not actually move

## Session history
- navigation usually makes new entry's into the sess history
    - this would include the DOM among other info

- single pages are to avoid hitting the server as mutch
    - but this means that the sess history for the "page" will 
        often be over written using the normal sess history
    - this is why the History API was created
        - the API has 3 core functions (among other):
            - pushState
            - replaceState
            - go

    - pushState and repaceState bot
        - pushState adds a new history entry, while replaceState modifies the existing one.
        - pushState creates a "forward" navigation history, while replaceState doesn't.
        - pushState can be used to create a "back" button history, while replaceState cannot.
    - go() is lime useing the back button in the browser
    ```js
    go(-1); // go back one entry
    go(1); // go forward one entry
    go(-10); // go way back
    go(0); // reload
    go(); // reload
    ```

## Navigating in SPAs using the History API
- SPAs use a click handler to call 
    - history.pushState()/history.replaceState() are used to navigate
    - Many routers use a History API wrapper to merge these steps.

    ```js
    // React example
    const Link = ({ children, href }) => (
    <a
        href={href}
        onClick={event => {
        // override native behavior
        event.preventDefault();
        // navigate using the History API
        // (ignoring replaceState() for brevity)
        history.pushState(null, '', href);
        // finally, let the router know navigation happened!
        }
    >
        {children}
    </a>
    );
    <Link href="/somewhere">Somewhere</Link>
    // renders
    <a href="/somewhere">Somewhere</a>
    // but clicking on it will trigger a history.pushState() call
    ```

    - using the address bar will still overwrite the history API Documents

# The problem with single page apps
- using SPAs can cause issues and become very complex due to Js routing
- this article advocates for using multiple index.html's but in different suborders
    - makes the clam:
        - that its cleaner
        - simpler
        - matches the default of browser navigation
        - now js routing and click interception

