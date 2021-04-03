# Listar Projeto Específico

Method: Post
Rota: projetos/{id}

- **Response**

    **200 - OK**

    ```json
    [
      {
        "projeto_id": string,
        "titulo": string,
        "descricao": string,
        "carrousel": number,
        "usuario_Id": string
      }
    ]
    ```