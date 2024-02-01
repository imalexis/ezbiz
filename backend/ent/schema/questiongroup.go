package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// QuestionGroup holds the schema definition for the QuestionGroup entity.
type QuestionGroup struct {
	ent.Schema
}

// Fields of the QuestionGroup.
func (QuestionGroup) Fields() []ent.Field {
	return []ent.Field{
		field.String("name"),
		field.Int("created_by"),
		field.Time("created_at").Default(time.Now).Annotations(entgql.OrderField("CREATED_AT")),
		field.Time("updated_at").Default(time.Now).Annotations(entgql.OrderField("UPDATED_AT")),
	}
}

// Edges of the QuestionGroup.
func (QuestionGroup) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("question", Question.Type),
		edge.From("form_spec", FormSpec.Type).Ref("question_groups").Unique(),
	}
}

func (QuestionGroup) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entgql.RelayConnection(),
		entgql.QueryField(),
		entgql.Mutations(entgql.MutationCreate(), entgql.MutationUpdate()),
	}
}
