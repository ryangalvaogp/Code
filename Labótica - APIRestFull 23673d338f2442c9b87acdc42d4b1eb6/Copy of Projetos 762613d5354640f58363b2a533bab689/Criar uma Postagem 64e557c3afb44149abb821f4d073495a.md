# Criar uma Postagem

Method: Post
Rota: post

- **Response**

    **201 - CREATED**

    ```json
    {
      "status": "Post Cadastrado Com Sucesso",
      "data": {
        "usuario_Id": string,
        "createdAt": DateTime,
        "post_Id": string,
        "titulo": string,
        "description": string,
        "place": string,
        "image": string
      }
    }
    ```

- **Body**

    A estrutura deste corpo da requisição é Multipart-form.
    A seguir será apenas representação dos campos em JSON

    ```json
    {
    	"titulo": string,
    	"description":string,
    	"place":string,
    	"image": imagem
    }
    ```

- **Header**

    ```yaml
    authorization: id_usuario:String
    ```