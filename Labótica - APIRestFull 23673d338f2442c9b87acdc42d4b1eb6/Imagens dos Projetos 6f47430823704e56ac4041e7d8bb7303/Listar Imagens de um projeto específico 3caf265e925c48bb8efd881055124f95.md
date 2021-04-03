# Listar Imagens de um projeto específico

Method: Post
Rota: projetos/images/{id}

- **Response**

    **200 - OK**

    ```json
    [
      {
        "id": string,
        "caminho": string,
        "imgDefault": boolean
      }
    ]
    ```