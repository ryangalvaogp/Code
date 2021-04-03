# Listar imagens para carrousel

Method: Get
Rota: views/projeto/carrousel

- **Response**

    **200 - OK**

    ```json
    [
      {
        "projeto_id": string,
        "usuario_Id": string,
        "id": string,
        "titulo": string,
        "caminho": string,
        "carrousel": boolean
      }
    ]
    ```