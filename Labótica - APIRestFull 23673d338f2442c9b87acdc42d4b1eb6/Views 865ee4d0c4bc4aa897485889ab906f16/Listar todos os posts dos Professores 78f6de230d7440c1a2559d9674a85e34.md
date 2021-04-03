# Listar todos os posts dos Professores

Method: Get
Rota: views/post/allposts/professores

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
          "name": string,
          "funcao": "Professor",
          "email": string
        },
        "image": string,
        "data": DateTime
      }
    ]
    ```