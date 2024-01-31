package main

import (
	"context"
	"log"
	"net/http"

	"entgo.io/ent/dialect"
	"ezbiz.com"
	"ezbiz.com/ent"
	"ezbiz.com/ent/migrate"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	"github.com/rs/cors"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	router := chi.NewRouter()
	// Add CORS middleware around every request
	// See https://github.com/rs/cors for full option listing
	router.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowCredentials: true,
		Debug:            true,
	}).Handler)
	// Create ent.Client and run the schema migration.
	client, err := ent.Open(dialect.SQLite, "file:ezbiz.db?_fk=1")
	if err != nil {
		log.Fatal("opening ent client", err)
	}
	if err := client.Schema.Create(
		context.Background(),
		migrate.WithGlobalUniqueID(true),
	); err != nil {
		log.Fatal("opening ent client", err)
	}

	// Configure the server and start listening on :8081.
	srv := handler.NewDefaultServer(ezbiz.NewSchema(client))
	router.Handle("/", playground.Handler("ezbiz", "/graphql"))
	router.Handle("/graphql", srv)
	log.Println("listening on :8081")
	if err := http.ListenAndServe(":8081", router); err != nil {
		log.Fatal("http server terminated", err)
	}
}
