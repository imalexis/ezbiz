generate:
	@echo "generting go files, graphql files ..."
	cd backend && go generate .
	cat backend/ent.graphql backend/ent.mutation.graphql > web/relay.graphql

# go run -mod=mod entgo.io/ent/cmd/ent new <Name>
# go run -mod=mod entgo.io/ent/cmd/ent new User -> Create User Schema

 