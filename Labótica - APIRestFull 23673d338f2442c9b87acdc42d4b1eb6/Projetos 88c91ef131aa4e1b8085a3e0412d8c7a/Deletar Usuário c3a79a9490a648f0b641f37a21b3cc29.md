# Deletar Usuário

Method: Delete
Rota: projetos/{id}

- **Response**

    **200 - OK**

    No body returned for response

    401 - UNAUTHORIZED

    ```json
    {
      "status": "Operação não foi permitida para este usuário"
    }
    ```

- **Header**

    ```yaml
    authorization: id_usuario:String
    ```