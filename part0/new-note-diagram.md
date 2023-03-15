sequenceDiagram
    participant browser
    participant server
    
    browser->>server: User clicks the button and sends input
    activate server
    server-->>browser: HTTP status code 302 (URL redirection to address notes)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes (reloading the webpage)
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: the JSON file for data
    deactivate server