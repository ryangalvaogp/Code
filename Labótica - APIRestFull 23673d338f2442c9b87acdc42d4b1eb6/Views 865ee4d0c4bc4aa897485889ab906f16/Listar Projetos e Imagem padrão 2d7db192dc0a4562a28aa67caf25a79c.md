# Listar Projetos e Imagem padrão

Method: Get
Rota: views/projeto/imagedefault

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
          "carrousel": boolen,
          "usuario_Id": string
        }
      }
    ]
    ```