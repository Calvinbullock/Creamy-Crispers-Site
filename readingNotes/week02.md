
# 1.7 Modifying the Document. 

## insertAdjacentHTML/Text/Element
- more efficient then other options
- more fine control over where the insert occurs

- methods to insert / remove 
    - document.createElement(tag) – creates an element with the given tag,
    - document.createTextNode(value) – creates a text node (rarely used),
    - elem.cloneNode(deep) – clones the element, if deep==true then with all descendants.
    - node.append(...nodes or strings) – insert into node, at the end,
    - node.prepend(...nodes or strings) – insert into node, at the beginning,
    - node.before(...nodes or strings) –- insert right before node,
    - node.after(...nodes or strings) –- insert right after node,
    - node.replaceWith(...nodes or strings) –- replace node.
    - node.remove() –- remove the node.

# local / session storage
- key: value pairs
- bond to a tab not the browser

- local APIs
    - setItem(key, value) – store key/value pair.
    - getItem(key) – get the value by key.
    - removeItem(key) – remove the key with its value.
    - clear() – delete everything.
    - key(index) – get the key number index.
    - length – the number of stored items.
    - Use Object.keys to get all keys.
    - We access keys as object properties, in that case storage event isn’t triggered.

# imports / exports 
- any declaration can be exported 
    - arrays 
    - classes
    - function
    - variables

- exports can be used during a declaration or at the end of a file
    - `can also import * as foo from './foo.js'` -- imports everything that is exported
- imported var should be named after the file -- when using default exsport

# Questionss
- N/A
