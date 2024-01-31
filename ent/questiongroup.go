// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"
	"time"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
	"ezbiz.com/ent/formspec"
	"ezbiz.com/ent/questiongroup"
)

// QuestionGroup is the model entity for the QuestionGroup schema.
type QuestionGroup struct {
	config `json:"-"`
	// ID of the ent.
	ID int `json:"id,omitempty"`
	// Name holds the value of the "name" field.
	Name string `json:"name,omitempty"`
	// CreatedBy holds the value of the "created_by" field.
	CreatedBy int `json:"created_by,omitempty"`
	// CreatedAt holds the value of the "created_at" field.
	CreatedAt time.Time `json:"created_at,omitempty"`
	// UpdatedAt holds the value of the "updated_at" field.
	UpdatedAt time.Time `json:"updated_at,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the QuestionGroupQuery when eager-loading is set.
	Edges                     QuestionGroupEdges `json:"edges"`
	form_spec_question_groups *int
	selectValues              sql.SelectValues
}

// QuestionGroupEdges holds the relations/edges for other nodes in the graph.
type QuestionGroupEdges struct {
	// Question holds the value of the question edge.
	Question []*Question `json:"question,omitempty"`
	// FormSpec holds the value of the form_spec edge.
	FormSpec *FormSpec `json:"form_spec,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [2]bool
	// totalCount holds the count of the edges above.
	totalCount [2]map[string]int

	namedQuestion map[string][]*Question
}

// QuestionOrErr returns the Question value or an error if the edge
// was not loaded in eager-loading.
func (e QuestionGroupEdges) QuestionOrErr() ([]*Question, error) {
	if e.loadedTypes[0] {
		return e.Question, nil
	}
	return nil, &NotLoadedError{edge: "question"}
}

// FormSpecOrErr returns the FormSpec value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e QuestionGroupEdges) FormSpecOrErr() (*FormSpec, error) {
	if e.loadedTypes[1] {
		if e.FormSpec == nil {
			// Edge was loaded but was not found.
			return nil, &NotFoundError{label: formspec.Label}
		}
		return e.FormSpec, nil
	}
	return nil, &NotLoadedError{edge: "form_spec"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*QuestionGroup) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case questiongroup.FieldID, questiongroup.FieldCreatedBy:
			values[i] = new(sql.NullInt64)
		case questiongroup.FieldName:
			values[i] = new(sql.NullString)
		case questiongroup.FieldCreatedAt, questiongroup.FieldUpdatedAt:
			values[i] = new(sql.NullTime)
		case questiongroup.ForeignKeys[0]: // form_spec_question_groups
			values[i] = new(sql.NullInt64)
		default:
			values[i] = new(sql.UnknownType)
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the QuestionGroup fields.
func (qg *QuestionGroup) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case questiongroup.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			qg.ID = int(value.Int64)
		case questiongroup.FieldName:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field name", values[i])
			} else if value.Valid {
				qg.Name = value.String
			}
		case questiongroup.FieldCreatedBy:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field created_by", values[i])
			} else if value.Valid {
				qg.CreatedBy = int(value.Int64)
			}
		case questiongroup.FieldCreatedAt:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field created_at", values[i])
			} else if value.Valid {
				qg.CreatedAt = value.Time
			}
		case questiongroup.FieldUpdatedAt:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field updated_at", values[i])
			} else if value.Valid {
				qg.UpdatedAt = value.Time
			}
		case questiongroup.ForeignKeys[0]:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for edge-field form_spec_question_groups", value)
			} else if value.Valid {
				qg.form_spec_question_groups = new(int)
				*qg.form_spec_question_groups = int(value.Int64)
			}
		default:
			qg.selectValues.Set(columns[i], values[i])
		}
	}
	return nil
}

// Value returns the ent.Value that was dynamically selected and assigned to the QuestionGroup.
// This includes values selected through modifiers, order, etc.
func (qg *QuestionGroup) Value(name string) (ent.Value, error) {
	return qg.selectValues.Get(name)
}

// QueryQuestion queries the "question" edge of the QuestionGroup entity.
func (qg *QuestionGroup) QueryQuestion() *QuestionQuery {
	return NewQuestionGroupClient(qg.config).QueryQuestion(qg)
}

// QueryFormSpec queries the "form_spec" edge of the QuestionGroup entity.
func (qg *QuestionGroup) QueryFormSpec() *FormSpecQuery {
	return NewQuestionGroupClient(qg.config).QueryFormSpec(qg)
}

// Update returns a builder for updating this QuestionGroup.
// Note that you need to call QuestionGroup.Unwrap() before calling this method if this QuestionGroup
// was returned from a transaction, and the transaction was committed or rolled back.
func (qg *QuestionGroup) Update() *QuestionGroupUpdateOne {
	return NewQuestionGroupClient(qg.config).UpdateOne(qg)
}

// Unwrap unwraps the QuestionGroup entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (qg *QuestionGroup) Unwrap() *QuestionGroup {
	_tx, ok := qg.config.driver.(*txDriver)
	if !ok {
		panic("ent: QuestionGroup is not a transactional entity")
	}
	qg.config.driver = _tx.drv
	return qg
}

// String implements the fmt.Stringer.
func (qg *QuestionGroup) String() string {
	var builder strings.Builder
	builder.WriteString("QuestionGroup(")
	builder.WriteString(fmt.Sprintf("id=%v, ", qg.ID))
	builder.WriteString("name=")
	builder.WriteString(qg.Name)
	builder.WriteString(", ")
	builder.WriteString("created_by=")
	builder.WriteString(fmt.Sprintf("%v", qg.CreatedBy))
	builder.WriteString(", ")
	builder.WriteString("created_at=")
	builder.WriteString(qg.CreatedAt.Format(time.ANSIC))
	builder.WriteString(", ")
	builder.WriteString("updated_at=")
	builder.WriteString(qg.UpdatedAt.Format(time.ANSIC))
	builder.WriteByte(')')
	return builder.String()
}

// NamedQuestion returns the Question named value or an error if the edge was not
// loaded in eager-loading with this name.
func (qg *QuestionGroup) NamedQuestion(name string) ([]*Question, error) {
	if qg.Edges.namedQuestion == nil {
		return nil, &NotLoadedError{edge: name}
	}
	nodes, ok := qg.Edges.namedQuestion[name]
	if !ok {
		return nil, &NotLoadedError{edge: name}
	}
	return nodes, nil
}

func (qg *QuestionGroup) appendNamedQuestion(name string, edges ...*Question) {
	if qg.Edges.namedQuestion == nil {
		qg.Edges.namedQuestion = make(map[string][]*Question)
	}
	if len(edges) == 0 {
		qg.Edges.namedQuestion[name] = []*Question{}
	} else {
		qg.Edges.namedQuestion[name] = append(qg.Edges.namedQuestion[name], edges...)
	}
}

// QuestionGroups is a parsable slice of QuestionGroup.
type QuestionGroups []*QuestionGroup
