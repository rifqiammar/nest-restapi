# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "Ramadhan",
  "password": "admin103",
  "name": "Rifqi Ammar Ramadhan"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "Ramadhan",
    "name": "Rifqi Ammar Ramadhan"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username already registered"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "Ramadhan",
  "password": "admin103"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "Ramadhan",
    "name": "Rifqi Ammar Ramadhan",
    "token": "session_id_generated"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username or password is wrong"
}
```

## Get User

Endpoint : GET /api/users/current

Headers :

- Authorization: token

Response Body (Success) :

```json
{
  "data": {
    "username": "Ramadhan",
    "name": "Rifqi Ammar Ramadhan"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers :

- Authorization: token

Request Body :

```json
{
  "password": "admin103", // optional, if want to change password
  "name": "Rifqi Ammar Ramadhan" // optional, if want to change name
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "ramadhan",
    "name": "Rifqi Ammar Ramadhan"
  }
}
```

## Logout User

Endpoint : DELETE /api/users/current

Headers :

- Authorization: token

Response Body (Success) :

```json
{
  "data": true
}
```
