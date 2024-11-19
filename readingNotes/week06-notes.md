# Calvin Bullock -- week 6

# Form properties and methods
- forms give you a `form.element` collection 
    - `elements` are not dependent on for structure or nesting

```html
<form name="my">
  <input name="one" value="1">
  <input name="two" value="2">
</form>

<script>
  // get the form
  let form = document.forms.my; // <form name="my"> element

  // get the element
  let elem = form.elements.one; // <input name="one"> element

  alert(elem.value); // 1
</script>
```

## input / textarea
- accses as input.value (string) or input.checked

# Forms: event and method submit

## event submit
- two ways to submit a form
    - he first – to click <input type="submit"> or <input type="image">.
    - The second – press Enter on an input field.

- can submit a form to the server manually `form.submit()`call 
    - submit event is not generated - It is assumed that if the programmer calls `form.submit()`, then the script already processed the form

# Using FormData Objects Effectively
- need to create a formData obj by passing the forms data into `FormData()`
    - often done using a event handler
- forms need a name attribute when working in form data object
- `preventDefault` is a function that stops js from reloading the page when submitting 
- a form data object can be passed around as just that, an object

# Client-side form validation
- right data right formate
- protect user data
- protect ourselves

## client-side validation types
- ### built in html
    - required: Specifies whether a form field needs to be filled in before the form can be submitted.
    - minlength and maxlength: Specifies the minimum and maximum length of textual data (strings).
    - min and max: Specifies the minimum and maximum values of numerical input types.
    - type: Specifies whether the data needs to be a number, an email address, or some other specific preset type.
    - pattern: Specifies a regular expression that defines a pattern the entered data needs to follow.

    - When an element is valid, the following things are true:
        - The element matches the `:valid CSS` pseudo-class, which lets you apply a specific style to valid elements.
        - If the user tries to send the data, the browser will submit the form, provided there is nothing else stopping it from doing so (e.g., JavaScript).

    - When an element is invalid, the following things are true:
        - The element matches the `:invalid CSS` pseudo-class, and sometimes other UI pseudo-classes (e.g., :out-of-range) depending on the error, which lets you apply a specific style to invalid elements.
        - If the user tries to send the data, the browser will block the form and display an error message.
        ```css
        input:invalid {
            border: 2px dashed red;
        }
        
        input:valid {
            border: 2px solid black;
        }
        ```

    - required attribute
        ```html
        <form>
            <label for="choose">Would you prefer a banana or cherry? (required)</label>
            <input id="choose" name="i-like" required />
            <button>Submit</button>
        </form>
        <style>
            input:invalid {
                border: 2px dashed red;
            }
    
            input:invalid:required {
                background-image: linear-gradient(to right, pink, lightgreen);
            }
    
            input:valid {
                border: 2px solid black;
            }
        </style>
        ```

    - Reg-Ex
        ```html
        <form>
            <label for="choose">Would you prefer a banana or a cherry?</label>
            <input id="choose" name="i-like" required pattern="[Bb]anana|[Cc]herry" />
            <button>Submit</button>
        </form>
        ```

    - min / max length
        ```html
        <input
            type="text"
            id="choose"
            name="i-like"
            required
            minlength="6"           <------- min
            maxlength="6"           <------- max
        />    
        ```

- ### validation js
    - #### constrant API works on:
        - HTMLButtonElement (represents a <button> element)
        - HTMLFieldSetElement (represents a <fieldset> element)
        - HTMLInputElement (represents an <input> element)
        - HTMLOutputElement (represents an <output> element)
        - HTMLSelectElement (represents a <select> element)
        - HTMLTextAreaElement (represents a <textarea> element)

    - #### properties that can be checked on the options above
        - validationMessage: Returns a localized message describing the validation constraints that the control doesn't satisfy (if any). 
        - validity: Returns a ValidityState object that contains several properties describing the validity state of the element - few listed
            - patternMismatch: Returns true if the value does not match the specified pattern  -- If true element = :invalid CSS pseudo-class.
            - tooLong: Returns true  **value > maximum** length specified by the maxlength attribute -- If true, the element = :invalid CSS pseudo-class. 
            - tooShort: Returns true if the `value < minimum` length specified by the minlength attribute --  If true, the element = :invalid CSS pseudo-class.
            - rangeOverflow: Returns true if the `value > maximum` specified by the max attribute -- If true, the element = :invalid and :out-of-range CSS pseudo-classes.
            - rangeUnderflow: Returns true if the `value < minimum` specified by the min attribute -- If true, the element = :invalid and :out-of-range CSS pseudo-classes.
            - typeMismatch: Returns true if the value is not in the required syntax (when type is email or url) -- If true, element = :invalid CSS pseudo-class.
            - valid: Returns true if the element meets all its validation constraints, and is therefore considered to be valid, or false if it fails any constraint. If true, the element = :valid CSS pseudo-class; the :invalid CSS pseudo-class otherwise.
            - valueMissing: Returns true if the element has a required attribute, but no value, or false otherwise. If true, element = :invalid CSS pseudo-class.

        - willValidate: Returns true if the element will be validated when the form is submitted; false otherwise.

    - #### Validating forms without a built-in API
        - Q's to ask:
            - What kind of validation should I perform?
            - What should I do if the form doesn't validate?
            - How can I help the user to correct invalid data?

