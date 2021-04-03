# Listar Projetos do Usuário

Method: Post
Rota: views/user/projeto/{id}

- **Response**

    **200 - OK**

    ```json
    {
      "projeto_id": string,
      "titulo": string,
      "descricao": string,
      "carrousel": boolean,
      "usuario_Id": string,
      "images": [
        {
          "id": string,
          "caminho": string,
          "imgDefault": boolean
        },
      ]
    }
    ```