# Get all users
``` 
    curl --location --request GET /users 
```

# Create a new user
``` 
    curl --location --request POST /users --data-row="{"fullname", "email"}"
```

# Update a user profile by id 
``` 
    curl --location --request PUT /users/:id --data-row="{"fullname", "email"}"
```

# Delete a user by id
``` 
    curl --location --request DELETE /users/:id
```
