# Calvin Bullock -- week 8

# Get Started with JSON Web Tokens

## What is JSON Web Token?
- used to seculy transfer information as JSON
- is digital signed for security and trust
- can use with HMAC algorithm) or a public/private key pair using RSA
- compact and self contained

## When should you use JSON Web Tokens?
- once logged in the JWT is needed for every request
- used to differentiate roles (admin, users, etc)

## Which is the JSON Web Token structure?
- JWT have 3 parts:
    - Header
    - Payload
    - Signature
- often looks like this `xxxxx.yyyyy.zzzzz`

#### Header:
    ```js
    {
      'alg': 'HS256',   // encrypt algorithm
      'typ': 'JWT'      // token Type
    }
    ```
#### Payload
- contains the claims
- Claims are statements about an entity (typically, the user) and additional metadata. 
- There are three types of claims: 
    - reserved 
    - public
    - private claims
```js
{
  'sub': '1234567890',
  'name': 'John Doe',
  'admin': true
}
```

#### Signature
- need to encode a header, payload, and secret, then use the algorithm from the header to encode it all
```js
HMACSHA256(
  base64UrlEncode(header) + '.' +
  base64UrlEncode(payload),
  secret)
```

#### Putting all together
- The output is three Base64 strings separated by dots that can be easily passed in HTML and HTTP environments, while being more compact compared to XML-based standards such as SAML.
- `xxxxx.yyyyy.zzzzz`

## How JSON Web Tokens work?
- a JWT is returned from an auth request
- when JWT one must be careful not to let unintended parties use them
    - do not store JWT in a local session
- JWT should be sent from the user when accessing a protected route
- the header should look like this `Authorization: Bearer <token>`

## Why should you use JSON Web Tokens?
- SWT (simple web tokens) -- often XML
- JSON is smaller then XML
- SWT can only be symmetric signed by a shared secret using the HMAC
- XML Digital Signature without introducing obscure security holes is very difficult compared to the simplicity of signing JSON
- JSON pairs are very language universal -- map to object pairs -- XML can't 

# Develop, Debug, Learn?
- we like to depend on to much 
- we learn the new thing (react, svelt, etc) not the users
- it's about the users
    - the slow browsers
    - the un-maintained code
    - the disabilities
    - the legacy
- we are expected to know lots of parts 
    - security
    - speed
    - accessibility
    - CLI
    - Node
    - frameworks
    - etc
- we don't know or use any of this we specialize in one
- we don't worry about security, performance, accessibility, etc - we hope our framework of choice is dealing with it
- we don't know our tools
- tooling needs to evolve
- open source is useful and a good tool

