sequenceDiagram
    participant browser
    participant server
    
    browser->>server: Browser adds the new note using its JS code, sends post request to new_note_spa containing new note in JSON
    activate server
    server-->>browser: Server responds with code 201 created
    deactivate server