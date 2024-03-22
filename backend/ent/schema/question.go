package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// Question holds the schema definition for the Question entity.
type Question struct {
	ent.Schema
}

// Fields of the Question.
func (Question) Fields() []ent.Field {
	return []ent.Field{
		field.String("label").Comment("label is unique in every FormSpec, it may be duplicated in different FormSpec"),
		field.String("title").Default("default title").Comment("title of the question"),
		field.Enum("type").
			Values(
				"short_text",
				"paragraph",
				"multi_choice",
				"checkboxes",
				"drop_down",
				"file",
				"linear_scale",
				"date",
				"time",
			),
		field.Bool("required"),
		field.String("extra_data").Default(""),
		field.String("rule").Default(""),
		field.String("dependencies").Default("[]"),
		field.Time("created_at").Default(time.Now).Annotations(entgql.OrderField("CREATED_AT")),
		field.Time("updated_at").Default(time.Now).Annotations(entgql.OrderField("UPDATED_AT")),
		field.Int("created_by"),
	}
}

// Edges of the Question.
func (Question) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("from_question_group", QuestionGroup.Type).Ref("question").Unique(),
		edge.To("question_response", QuestionResponse.Type),
	}
}

func (Question) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entgql.RelayConnection(),
		entgql.QueryField(),
		entgql.Mutations(entgql.MutationCreate(), entgql.MutationUpdate()),
	}
}
