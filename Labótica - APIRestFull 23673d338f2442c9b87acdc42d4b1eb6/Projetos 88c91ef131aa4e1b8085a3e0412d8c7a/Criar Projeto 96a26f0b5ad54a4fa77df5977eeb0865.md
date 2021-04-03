# Criar Projeto

Method: Post
Rota: projetos

- **Body**

    ```json
    {
    	"name":string,
    	"matricula": number,
    	"email":string,
    	"password":string,
    	"funcao":string
    }
    ```

- **Response**

    **201 - CREATED**

    ```json
    {
      "status": "Usuário Cadastrado Com Sucesso",
      "usuario": {
        "usuario_Id": string,
        "matricula": number,
        "name": string,
        "funcao": string,
        "email": string,
        "password": string
      }
    }
    ```

- **Header**

    ```yaml
    authorization: id_usuario:String
    ```