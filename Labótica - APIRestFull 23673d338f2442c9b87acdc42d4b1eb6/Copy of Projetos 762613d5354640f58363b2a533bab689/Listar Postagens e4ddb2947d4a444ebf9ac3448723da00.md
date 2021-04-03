# Listar Postagens

Method: Get
Rota: post

- **Response**

    **200 - OK**

    ```json
    [
      {
        "post_Id": string,
        "titulo": string,
        "description": string,
        "place": string,
        "Usuario": {
          "name": string,
          "funcao": string,
          "email": string
        },
        "image": string,
        "data": dateTime
      }
    ]
    ```