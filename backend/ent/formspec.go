// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"
	"time"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
	"ezbiz.com/ent/formspec"
	"ezbiz.com/ent/user"
)

// FormSpec is the model entity for the FormSpec schema.
type FormSpec struct {
	config `json:"-"`
	// ID of the ent.
	ID int `json:"id,omitempty"`
	// Name holds the value of the "name" field.
	Name string `json:"name,omitempty"`
	// Cover holds the value of the "cover" field.
	Cover string `json:"cover,omitempty"`
	// Description holds the value of the "description" field.
	Description string `json:"description,omitempty"`
	// IsTemplate holds the value of the "is_template" field.
	IsTemplate bool `json:"is_template,omitempty"`
	// Enabled holds the value of the "enabled" field.
	Enabled bool `json:"enabled,omitempty"`
	// CreatedAt holds the value of the "created_at" field.
	CreatedAt time.Time `json:"created_at,omitempty"`
	// UpdatedAt holds the value of the "updated_at" field.
	UpdatedAt time.Time `json:"updated_at,omitempty"`
	// CreatedBy holds the value of the "created_by" field.
	CreatedBy int `json:"created_by,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the FormSpecQuery when eager-loading is set.
	Edges           FormSpecEdges `json:"edges"`
	user_form_specs *int
	selectValues    sql.SelectValues
}

// FormSpecEdges holds the relations/edges for other nodes in the graph.
type FormSpecEdges struct {
	// QuestionGroups holds the value of the question_groups edge.
	QuestionGroups []*QuestionGroup `json:"question_groups,omitempty"`
	// FormInstances holds the value of the form_instances edge.
	FormInstances []*FormInstance `json:"form_instances,omitempty"`
	// Owner holds the value of the owner edge.
	Owner *User `json:"owner,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [3]bool
	// totalCount holds the count of the edges above.
	totalCount [3]map[string]int

	namedQuestionGroups map[string][]*QuestionGroup
	namedFormInstances  map[string][]*FormInstance
}

// QuestionGroupsOrErr returns the QuestionGroups value or an error if the edge
// was not loaded in eager-loading.
func (e FormSpecEdges) QuestionGroupsOrErr() ([]*QuestionGroup, error) {
	if e.loadedTypes[0] {
		return e.QuestionGroups, nil
	}
	return nil, &NotLoadedError{edge: "question_groups"}
}

// FormInstancesOrErr returns the FormInstances value or an error if the edge
// was not loaded in eager-loading.
func (e FormSpecEdges) FormInstancesOrErr() ([]*FormInstance, error) {
	if e.loadedTypes[1] {
		return e.FormInstances, nil
	}
	return nil, &NotLoadedError{edge: "form_instances"}
}

// OwnerOrErr returns the Owner value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e FormSpecEdges) OwnerOrErr() (*User, error) {
	if e.loadedTypes[2] {
		if e.Owner == nil {
			// Edge was loaded but was not found.
			return nil, &NotFoundError{label: user.Label}
		}
		return e.Owner, nil
	}
	return nil, &NotLoadedError{edge: "owner"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*FormSpec) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case formspec.FieldIsTemplate, formspec.FieldEnabled:
			values[i] = new(sql.NullBool)
		case formspec.FieldID, formspec.FieldCreatedBy:
			values[i] = new(sql.NullInt64)
		case formspec.FieldName, formspec.FieldCover, formspec.FieldDescription:
			values[i] = new(sql.NullString)
		case formspec.FieldCreatedAt, formspec.FieldUpdatedAt:
			values[i] = new(sql.NullTime)
		case formspec.ForeignKeys[0]: // user_form_specs
			values[i] = new(sql.NullInt64)
		default:
			values[i] = new(sql.UnknownType)
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the FormSpec fields.
func (fs *FormSpec) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case formspec.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			fs.ID = int(value.Int64)
		case formspec.FieldName:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field name", values[i])
			} else if value.Valid {
				fs.Name = value.String
			}
		case formspec.FieldCover:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field cover", values[i])
			} else if value.Valid {
				fs.Cover = value.String
			}
		case formspec.FieldDescription:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field description", values[i])
			} else if value.Valid {
				fs.Description = value.String
			}
		case formspec.FieldIsTemplate:
			if value, ok := values[i].(*sql.NullBool); !ok {
				return fmt.Errorf("unexpected type %T for field is_template", values[i])
			} else if value.Valid {
				fs.IsTemplate = value.Bool
			}
		case formspec.FieldEnabled:
			if value, ok := values[i].(*sql.NullBool); !ok {
				return fmt.Errorf("unexpected type %T for field enabled", values[i])
			} else if value.Valid {
				fs.Enabled = value.Bool
			}
		case formspec.FieldCreatedAt:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field created_at", values[i])
			} else if value.Valid {
				fs.CreatedAt = value.Time
			}
		case formspec.FieldUpdatedAt:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field updated_at", values[i])
			} else if value.Valid {
				fs.UpdatedAt = value.Time
			}
		case formspec.FieldCreatedBy:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field created_by", values[i])
			} else if value.Valid {
				fs.CreatedBy = int(value.Int64)
			}
		case formspec.ForeignKeys[0]:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for edge-field user_form_specs", value)
			} else if value.Valid {
				fs.user_form_specs = new(int)
				*fs.user_form_specs = int(value.Int64)
			}
		default:
			fs.selectValues.Set(columns[i], values[i])
		}
	}
	return nil
}

// Value returns the ent.Value that was dynamically selected and assigned to the FormSpec.
// This includes values selected through modifiers, order, etc.
func (fs *FormSpec) Value(name string) (ent.Value, error) {
	return fs.selectValues.Get(name)
}

// QueryQuestionGroups queries the "question_groups" edge of the FormSpec entity.
func (fs *FormSpec) QueryQuestionGroups() *QuestionGroupQuery {
	return NewFormSpecClient(fs.config).QueryQuestionGroups(fs)
}

// QueryFormInstances queries the "form_instances" edge of the FormSpec entity.
func (fs *FormSpec) QueryFormInstances() *FormInstanceQuery {
	return NewFormSpecClient(fs.config).QueryFormInstances(fs)
}

// QueryOwner queries the "owner" edge of the FormSpec entity.
func (fs *FormSpec) QueryOwner() *UserQuery {
	return NewFormSpecClient(fs.config).QueryOwner(fs)
}

// Update returns a builder for updating this FormSpec.
// Note that you need to call FormSpec.Unwrap() before calling this method if this FormSpec
// was returned from a transaction, and the transaction was committed or rolled back.
func (fs *FormSpec) Update() *FormSpecUpdateOne {
	return NewFormSpecClient(fs.config).UpdateOne(fs)
}

// Unwrap unwraps the FormSpec entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (fs *FormSpec) Unwrap() *FormSpec {
	_tx, ok := fs.config.driver.(*txDriver)
	if !ok {
		panic("ent: FormSpec is not a transactional entity")
	}
	fs.config.driver = _tx.drv
	return fs
}

// String implements the fmt.Stringer.
func (fs *FormSpec) String() string {
	var builder strings.Builder
	builder.WriteString("FormSpec(")
	builder.WriteString(fmt.Sprintf("id=%v, ", fs.ID))
	builder.WriteString("name=")
	builder.WriteString(fs.Name)
	builder.WriteString(", ")
	builder.WriteString("cover=")
	builder.WriteString(fs.Cover)
	builder.WriteString(", ")
	builder.WriteString("description=")
	builder.WriteString(fs.Description)
	builder.WriteString(", ")
	builder.WriteString("is_template=")
	builder.WriteString(fmt.Sprintf("%v", fs.IsTemplate))
	builder.WriteString(", ")
	builder.WriteString("enabled=")
	builder.WriteString(fmt.Sprintf("%v", fs.Enabled))
	builder.WriteString(", ")
	builder.WriteString("created_at=")
	builder.WriteString(fs.CreatedAt.Format(time.ANSIC))
	builder.WriteString(", ")
	builder.WriteString("updated_at=")
	builder.WriteString(fs.UpdatedAt.Format(time.ANSIC))
	builder.WriteString(", ")
	builder.WriteString("created_by=")
	builder.WriteString(fmt.Sprintf("%v", fs.CreatedBy))
	builder.WriteByte(')')
	return builder.String()
}

// NamedQuestionGroups returns the QuestionGroups named value or an error if the edge was not
// loaded in eager-loading with this name.
func (fs *FormSpec) NamedQuestionGroups(name string) ([]*QuestionGroup, error) {
	if fs.Edges.namedQuestionGroups == nil {
		return nil, &NotLoadedError{edge: name}
	}
	nodes, ok := fs.Edges.namedQuestionGroups[name]
	if !ok {
		return nil, &NotLoadedError{edge: name}
	}
	return nodes, nil
}

func (fs *FormSpec) appendNamedQuestionGroups(name string, edges ...*QuestionGroup) {
	if fs.Edges.namedQuestionGroups == nil {
		fs.Edges.namedQuestionGroups = make(map[string][]*QuestionGroup)
	}
	if len(edges) == 0 {
		fs.Edges.namedQuestionGroups[name] = []*QuestionGroup{}
	} else {
		fs.Edges.namedQuestionGroups[name] = append(fs.Edges.namedQuestionGroups[name], edges...)
	}
}

// NamedFormInstances returns the FormInstances named value or an error if the edge was not
// loaded in eager-loading with this name.
func (fs *FormSpec) NamedFormInstances(name string) ([]*FormInstance, error) {
	if fs.Edges.namedFormInstances == nil {
		return nil, &NotLoadedError{edge: name}
	}
	nodes, ok := fs.Edges.namedFormInstances[name]
	if !ok {
		return nil, &NotLoadedError{edge: name}
	}
	return nodes, nil
}

func (fs *FormSpec) appendNamedFormInstances(name string, edges ...*FormInstance) {
	if fs.Edges.namedFormInstances == nil {
		fs.Edges.namedFormInstances = make(map[string][]*FormInstance)
	}
	if len(edges) == 0 {
		fs.Edges.namedFormInstances[name] = []*FormInstance{}
	} else {
		fs.Edges.namedFormInstances[name] = append(fs.Edges.namedFormInstances[name], edges...)
	}
}

// FormSpecs is a parsable slice of FormSpec.
type FormSpecs []*FormSpec
