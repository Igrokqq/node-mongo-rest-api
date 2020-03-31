``` 
    curl --location --request GET /users 
```

``` 
    curl --location --request POST /users --data-row="{"fullname", "email"}"
```

``` 
    curl --location --request PUT /users/:id --data-row="{"fullname", "email"}"
```

``` 
    curl --location --request DELETE /users/:id
```
