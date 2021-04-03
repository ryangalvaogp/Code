# Listar Todos os Professores

Method: Get
Rota: views/user/allprofessores

- **Response**

    **200 - OK**

    ```json
    [
      {
        "usuario_Id": string,
        "name": string,
        "funcao": "Professor",
        "email": string,
        "password": string
      }
    ]
    ```