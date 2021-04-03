# Listar Imagens do Projeto

Method: Post
Rota: views/projeto/images/{id}

- **Response**

    **200 - OK**

    ```json
    [
      {
        "id": string,
        "caminho": string,
        "imgDefault": boolean
      },
    ]
    ```