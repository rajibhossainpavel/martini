This is a MongoDB and GraphQL Tree-Structured Data Management App.
-----
SETUP
-----
1. yarn installl
2. Put your database string in app.module.ts file.
3. yarn start

	
-----------
Create Node
-----------
POST: localhost:3000/graphql
mutation{
    createItem(input:{
        name: "rhp"
        parent_name: ""
    }){id}
}  
mutation{
    createItem(input:{
        name: "rajib"
        parent_name: "rhp"
    }){id}
}   

---------------
Disable an Item
---------------
POST: localhost:3000/graphql
mutation{
  disableItem(disable_input:{
    name: "pavel2"
  })
}

mutation{
  disableItem(disable_input:{
    name: "rhp"
  }){id}
}
--------------------
Node Details by Name
--------------------
POST: localhost:3000/graphql
  query{
  itemByNameWithParent(name: "pavel2"){id, name, is_active,parent_name}
}