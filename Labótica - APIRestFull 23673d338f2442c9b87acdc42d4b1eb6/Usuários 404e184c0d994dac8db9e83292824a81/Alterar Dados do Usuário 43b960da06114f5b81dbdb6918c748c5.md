# Alterar Dados do Usuário

Method: Put
Rota: usuarios/{id}

- **Body**

    É possível enviar apenas os campos name e email;
    É possível enviar os campos separadamente; 

    - Alterando nome e e-mail

    ```json
    {
    	"name":string
    	"email":string
    }
    ```

    - Alterando apenas o nome

    ```json
    {
    	"name":string
    }
    ```

    - Alterando apenas o e-mail

    ```json
    {
    	"email":string
    }
    ```

- **Response**

    **200 - OK**

    ```json
    {
      "Status": "Informações Atualizadas",
      "Data": string | object
    }
    ```