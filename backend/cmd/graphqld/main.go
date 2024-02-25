package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"entgo.io/ent/dialect"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	_ "github.com/mattn/go-sqlite3"
	"github.com/rs/cors"

	"ezbiz.com"
	"ezbiz.com/ent"
	"ezbiz.com/ent/migrate"
)

func main() {
	fmt.Println("create new router")
	router := chi.NewRouter()
	// Add CORS middleware around every request
	// See https://github.com/rs/cors for full option listing
	router.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowCredentials: true,
		Debug:            true,
	}).Handler)
	log.Println("create new sqlite")
	// Create ent.Client and run the schema migration.
	client, err := ent.Open(dialect.SQLite, "file:ezbiz.db?_fk=1")
	if err != nil {
		log.Fatal("opening ent client", err)
	}
	log.Println("create new schemna")
	if err := client.Schema.Create(
		context.Background(),
		migrate.WithGlobalUniqueID(true),
	); err != nil {
		log.Fatal("opening ent client", err)
	}
	log.Println("create new graphql handler")
	// Configure the server and start listening on :8081.
	srv := handler.NewDefaultServer(ezbiz.NewSchema(client))
	router.Handle("/", playground.Handler("ezbiz", "/graphql"))
	router.Handle("/graphql", srv)
	log.Println("listening on :8081")
	if err := http.ListenAndServe(":8081", router); err != nil {
		log.Fatal("http server terminated", err)
	}
}
