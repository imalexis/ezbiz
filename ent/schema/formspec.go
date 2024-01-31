package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// FormSpec holds the schema definition for the FormSpec entity.
// class FormSpec extednds ent.Schema {}
type FormSpec struct {
	ent.Schema
}

// Fields of the FormSpec.
func (FormSpec) Fields() []ent.Field {
	return []ent.Field{
		// field.<Column Type>(Column Name)
		field.String("name").Default("Default Form"),
		field.String("cover").Optional(),
		field.String("description").Default("This is a new form"),
		field.Bool("enabled").Default(false),
		field.Time("created_at").Default(time.Now).Annotations(entgql.OrderField("CREATED_AT")),
		field.Time("updated_at").Default(time.Now).Annotations(entgql.OrderField("UPDATED_AT")),
		field.Int("created_by"),
	}
}

// Edges of the FormSpec.
func (FormSpec) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("question_groups", QuestionGroup.Type),
		edge.To("form_instances", FormInstance.Type).Annotations(
			entgql.RelayConnection(),
		),
		edge.From("owner", User.Type).Ref("form_specs").Unique(),
	}
}

func (FormSpec) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entgql.RelayConnection(),
		entgql.QueryField(),
		entgql.Mutations(entgql.MutationCreate(), entgql.MutationUpdate()),
	}
}
