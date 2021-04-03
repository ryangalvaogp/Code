# Listar Projetos

Method: Get
Rota: projetos

- **Response**

    **200 - OK**

    ```json
    [
      {
        "projeto_id": string,
        "titulo": string,
        "descricao": string,
        "carrousel": boolean,
        "usuario_Id": string
      }
    ]
    ```