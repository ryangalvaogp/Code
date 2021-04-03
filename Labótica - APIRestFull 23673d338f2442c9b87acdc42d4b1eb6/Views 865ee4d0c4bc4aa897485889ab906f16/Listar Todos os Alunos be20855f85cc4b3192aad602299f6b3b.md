# Listar Todos os Alunos

Method: Get
Rota: views/user/allalunos

- **Response**

    **200 - OK**

    ```json
    [
      {
        "usuario_Id": string,
        "name": string,
        "funcao": "Aluno",
        "email": string,
        "password": string
      }
    ]
    ```