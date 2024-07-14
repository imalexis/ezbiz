package schema

import (
	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// FormInstance holds the schema definition for the FormInstance entity.
type FormInstance struct {
	ent.Schema
}

// Fields of the FormInstance.
func (FormInstance) Fields() []ent.Field {
	return []ent.Field{
		field.Enum("status").Values("submiited", "pending").Default("pending"),
	}
}

// Edges of the FormInstance.
func (FormInstance) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("form_spec", FormSpec.Type).Ref("form_instances").Unique(),
		edge.To("question_response", QuestionResponse.Type),
		edge.From("users", User.Type).Ref("form_instances").Unique(),
	}
}

func (FormInstance) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entgql.RelayConnection(),
		entgql.QueryField(),
		entgql.Mutations(entgql.MutationCreate(), entgql.MutationUpdate()),
	}
}
