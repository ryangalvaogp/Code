# Deletar Post

Method: Delete
Rota: post/{id}

- **Response**

    **200 - OK**

    No body returned for response

    403 - FORBIDDEN

    ```json
    {
    	status: "Operação não foi permitida para este usuário",
    }
    ```

- **Header**

    ```yaml
    authorization: id_usuario:String
    ```