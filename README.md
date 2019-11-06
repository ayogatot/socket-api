# Simple API + Socket IO

clone or download this project and then install dependencies with npm :

```sh
npm install
```

or with yarn :

```sh
yarn
```

## API Endpoint

you can access the endpoint here : `http://localhost:${PORT}`

### /v1/display

| Endpoint | HTTP | Description                   | Body |
| -------- | ---- | ----------------------------- | ---- |
| `/v1`    | GET  | Display a message in realtime |      |

### /v1/messages

| Endpoint        | HTTP | Description        | Body      |
| --------------- | ---- | ------------------ | --------- |
| `/v1/messages/` | POST | Create New Message | `message` |
| `/v1/messages/` | GET  | Get All Message    |           |
