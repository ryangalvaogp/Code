# Definir projeto para carrousel

Method: Put
Rota: projetos/carrousel/{id}

- **Body**

    ```json
    {
    	"carrousel":boolean
    }
    ```

- **Response**

    **200 - OK**

    ```json
    {
      "Status": string,
      "Data": string
    }
    ```