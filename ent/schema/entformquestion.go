package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// EntFormQuestion holds the schema definition for the EntFormQuestion entity.
type EntFormQuestion struct {
	ent.Schema
}

// Fields of the EntFormQuestion.
func (EntFormQuestion) Fields() []ent.Field {
	return []ent.Field{
		field.String("title").Default("Untitled"),
		field.String("label"),
		field.Enum("type").Values(
			"short_text",
			"paragraph",
			"multi_choice",
			"multi_response",
			"dropdown",
			"file",
			"linear_scale",
			"date",
			"time",
		),
		field.Bool("required").Default(false),
		field.String("extra_data").Optional(),
		field.Time("created_at").Default(time.Now),
		field.Time("updated_at").Default(time.Now),
		field.Int("created_by"),
	}
}

// Edges of the EntFormQuestion.
func (EntFormQuestion) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("form", EntForm.Type).Ref("questions").Unique(),
	}
}

func (EntFormQuestion) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entgql.RelayConnection(),
		entgql.QueryField(),
		entgql.Mutations(entgql.MutationCreate(), entgql.MutationUpdate()),
	}
}
