
# Calvin Bullock - Oct 2nd 2024

# Read 10 Mobile UX design principles

## content prioritization
- short attention span
- grab attention quick

## make navigation intuitive
- give the user everything they need for a task on on page
    - limit the need to switch pages

## Touchscreen Target Sizes
- apple suggests = 44 pixels wide x 44 pixels tall
- Microsoft suggests = touch target of 9mm/34px -- minimum of 7mm/26px. 
- spacing between targets is also important

## Provide User Control
- users like to feel in control
    - added settings to help this
- give states icons and updates to the user when nessacery

## Legible Text Content

## Hand Position Controls
- think about what the user can reach easily

## Minimize Data Input
- limit data entry

## Create a Seamless Experience
- pick up and leave off across devices

## Test Your Design
- test often, early, and optimize

# Read MDN Introduction to web APIs
- APIs json objects back and forth
- the objects have key value pairs witch set different modes and update data.
- connect different code basses and tools
- know the entry points when using an API
- APIs help control security and access points

# Read setTimeout and setInterval
## set time out
- runs a function after delay passes
- if first param is string - converts to function
- can set timeout to a variable and even cancel the timeout later if you wish
- settimeout with 0 delay will run after the current script finishes

## set interval
- runs a function continuously every set unit of time
- works much basically like the timeout function
- can use nested set timeouts as a more flexible setinterval
```javascript
// nested setInterval Ex:
let timerId = setTimeout(function tick() {
alert('tick');
timerId = setTimeout(tick, 2000); // (*)
}, 2000);
```

# Questionss
- N/A

