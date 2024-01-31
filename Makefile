generate:
	@echo "generting go files, graphql files ..."
	go generate .
	cat ent.graphql ent.mutation.graphql > relay.graphql

# go run -mod=mod entgo.io/ent/cmd/ent new <Name>
# go run -mod=mod entgo.io/ent/cmd/ent new User -> Create User Schema

 