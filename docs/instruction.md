# 
backend:
  go run ./cmd/graphqld
    graphql server + application server

    listen on localhost:8081

    -> GraphiQL: similar to Postman
        interactive GraphQL client

    All query API and mutation API under `Root Type`:
        - Query: all query API
        - Mutation: all mutation API

  go run ./cmd/websocketd


  npm run start
    Command + d: open a new tab