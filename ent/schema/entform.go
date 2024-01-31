package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// EntForm holds the schema definition for the EntForm entity.
type EntForm struct {
	ent.Schema
}

// Fields of the EntForm.
func (EntForm) Fields() []ent.Field {
	return []ent.Field{
		field.String("name").Default("Default Form"),
		field.String("description").Optional(),
		field.Bool("enabled").Default(true),
		field.Time("created_at").Default(time.Now),
		field.Time("updated_at").Default(time.Now),
		field.Int("created_by"),
	}
}

// Edges of the EntForm.
func (EntForm) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("questions", EntFormQuestion.Type),
	}
}

func (EntForm) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entgql.RelayConnection(),
		entgql.QueryField(),
		entgql.Mutations(entgql.MutationCreate(), entgql.MutationUpdate()),
	}
}
