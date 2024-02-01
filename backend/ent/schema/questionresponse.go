package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// QuestionResponse holds the schema definition for the QuestionResponse entity.
type QuestionResponse struct {
	ent.Schema
}

// Fields of the QuestionResponse.
func (QuestionResponse) Fields() []ent.Field {
	return []ent.Field{
		field.String("label").Comment("Label infers the identifier of a question"),
		field.String("value"),
		field.Time("created_at").Default(time.Now).Annotations(entgql.OrderField("CREATED_AT")),
		field.Time("updated_at").Default(time.Now).Annotations(entgql.OrderField("UPDATED_AT")),
	}
}

// Edges of the QuestionResponse.
func (QuestionResponse) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("question", Question.Type).Ref("question_response").Unique(),
		edge.From("form_instance", FormInstance.Type).Ref("question_response").Unique(),
	}
}

func (QuestionResponse) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entgql.RelayConnection(),
		entgql.QueryField(),
		entgql.Mutations(entgql.MutationCreate(), entgql.MutationUpdate()),
	}
}
