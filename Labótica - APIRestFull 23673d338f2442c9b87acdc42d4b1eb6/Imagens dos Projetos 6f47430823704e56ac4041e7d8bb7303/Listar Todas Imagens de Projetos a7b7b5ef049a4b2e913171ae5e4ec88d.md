# Listar Todas Imagens de Projetos

Method: Get
Rota: projetos/images

- **Response**

    **200 - OK**

    ```json
    [
      {
        "id": string,
        "caminho": string,
        "imgDefault": boolean,
        "projeto": {
          "projeto_id": string,
          "titulo": string,
          "descricao": string,
          "carrousel": boolean,
          "usuario_Id": string
        }
      }
    ]
    ```