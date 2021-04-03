# Listar Usuários

Method: Get
Rota: usuarios

- **Response**

    **200 - OK**

    ```json
    [
      {
        "usuario_Id":string,
        "name": string,
        "email": string,
        "funcao": string,
        "matricula": number
      }
    ]
    ```