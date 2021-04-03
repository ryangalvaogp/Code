# Listar todos os posts dos Alunos

Method: Get
Rota: views/post/allposts/Alunos

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
          "funcao": "Aluno",
          "email": string
        },
        "image": string,
        "data": dateTime
      }
    ]
    ```