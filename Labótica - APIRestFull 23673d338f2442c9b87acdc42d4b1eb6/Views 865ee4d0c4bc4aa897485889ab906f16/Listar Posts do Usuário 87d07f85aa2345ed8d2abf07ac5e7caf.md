# Listar Posts do Usuário

Method: Post
Rota: views/user/posts/{id}

- **Response**

    **200 - OK**

    ```json
    [
      {
        "post_Id": string,
        "titulo": string,
        "description": string,
        "place": string,
        "usuario": {
          "usuario_Id": string,
          "name": string,
          "funcao": string,
          "email": string"
        },
        "image": string,
        "data": dateTime
      }
    ]
    ```