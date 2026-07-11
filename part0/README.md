```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
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

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    User->>Browser: type somthing in input block and click save
    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of Server: server save new note to server in json file

    Server-->>Browser: 302 Redirect to https://studies.cs.helsinki.fi/exampleapp/notes
    Note right of Server: server redirect on page with notes, reloade the page with new note

```
