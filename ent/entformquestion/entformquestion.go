// Code generated by ent, DO NOT EDIT.

package entformquestion

import (
	"fmt"
	"io"
	"strconv"
	"time"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
)

const (
	// Label holds the string label denoting the entformquestion type in the database.
	Label = "ent_form_question"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldTitle holds the string denoting the title field in the database.
	FieldTitle = "title"
	// FieldLabel holds the string denoting the label field in the database.
	FieldLabel = "label"
	// FieldType holds the string denoting the type field in the database.
	FieldType = "type"
	// FieldRequired holds the string denoting the required field in the database.
	FieldRequired = "required"
	// FieldExtraData holds the string denoting the extra_data field in the database.
	FieldExtraData = "extra_data"
	// FieldCreatedAt holds the string denoting the created_at field in the database.
	FieldCreatedAt = "created_at"
	// FieldUpdatedAt holds the string denoting the updated_at field in the database.
	FieldUpdatedAt = "updated_at"
	// FieldCreatedBy holds the string denoting the created_by field in the database.
	FieldCreatedBy = "created_by"
	// EdgeForm holds the string denoting the form edge name in mutations.
	EdgeForm = "form"
	// Table holds the table name of the entformquestion in the database.
	Table = "ent_form_questions"
	// FormTable is the table that holds the form relation/edge.
	FormTable = "ent_form_questions"
	// FormInverseTable is the table name for the EntForm entity.
	// It exists in this package in order to avoid circular dependency with the "entform" package.
	FormInverseTable = "ent_forms"
	// FormColumn is the table column denoting the form relation/edge.
	FormColumn = "ent_form_questions"
)

// Columns holds all SQL columns for entformquestion fields.
var Columns = []string{
	FieldID,
	FieldTitle,
	FieldLabel,
	FieldType,
	FieldRequired,
	FieldExtraData,
	FieldCreatedAt,
	FieldUpdatedAt,
	FieldCreatedBy,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the "ent_form_questions"
// table and are not defined as standalone fields in the schema.
var ForeignKeys = []string{
	"ent_form_questions",
}

// ValidColumn reports if the column name is valid (part of the table columns).
func ValidColumn(column string) bool {
	for i := range Columns {
		if column == Columns[i] {
			return true
		}
	}
	for i := range ForeignKeys {
		if column == ForeignKeys[i] {
			return true
		}
	}
	return false
}

var (
	// DefaultTitle holds the default value on creation for the "title" field.
	DefaultTitle string
	// DefaultRequired holds the default value on creation for the "required" field.
	DefaultRequired bool
	// DefaultCreatedAt holds the default value on creation for the "created_at" field.
	DefaultCreatedAt func() time.Time
	// DefaultUpdatedAt holds the default value on creation for the "updated_at" field.
	DefaultUpdatedAt func() time.Time
)

// Type defines the type for the "type" enum field.
type Type string

// Type values.
const (
	TypeShortText     Type = "short_text"
	TypeParagraph     Type = "paragraph"
	TypeMultiChoice   Type = "multi_choice"
	TypeMultiResponse Type = "multi_response"
	TypeDropdown      Type = "dropdown"
	TypeFile          Type = "file"
	TypeLinearScale   Type = "linear_scale"
	TypeDate          Type = "date"
	TypeTime          Type = "time"
)

func (_type Type) String() string {
	return string(_type)
}

// TypeValidator is a validator for the "type" field enum values. It is called by the builders before save.
func TypeValidator(_type Type) error {
	switch _type {
	case TypeShortText, TypeParagraph, TypeMultiChoice, TypeMultiResponse, TypeDropdown, TypeFile, TypeLinearScale, TypeDate, TypeTime:
		return nil
	default:
		return fmt.Errorf("entformquestion: invalid enum value for type field: %q", _type)
	}
}

// OrderOption defines the ordering options for the EntFormQuestion queries.
type OrderOption func(*sql.Selector)

// ByID orders the results by the id field.
func ByID(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldID, opts...).ToFunc()
}

// ByTitle orders the results by the title field.
func ByTitle(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldTitle, opts...).ToFunc()
}

// ByLabel orders the results by the label field.
func ByLabel(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldLabel, opts...).ToFunc()
}

// ByType orders the results by the type field.
func ByType(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldType, opts...).ToFunc()
}

// ByRequired orders the results by the required field.
func ByRequired(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldRequired, opts...).ToFunc()
}

// ByExtraData orders the results by the extra_data field.
func ByExtraData(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldExtraData, opts...).ToFunc()
}

// ByCreatedAt orders the results by the created_at field.
func ByCreatedAt(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldCreatedAt, opts...).ToFunc()
}

// ByUpdatedAt orders the results by the updated_at field.
func ByUpdatedAt(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldUpdatedAt, opts...).ToFunc()
}

// ByCreatedBy orders the results by the created_by field.
func ByCreatedBy(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldCreatedBy, opts...).ToFunc()
}

// ByFormField orders the results by form field.
func ByFormField(field string, opts ...sql.OrderTermOption) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborTerms(s, newFormStep(), sql.OrderByField(field, opts...))
	}
}
func newFormStep() *sqlgraph.Step {
	return sqlgraph.NewStep(
		sqlgraph.From(Table, FieldID),
		sqlgraph.To(FormInverseTable, FieldID),
		sqlgraph.Edge(sqlgraph.M2O, true, FormTable, FormColumn),
	)
}

// MarshalGQL implements graphql.Marshaler interface.
func (e Type) MarshalGQL(w io.Writer) {
	io.WriteString(w, strconv.Quote(e.String()))
}

// UnmarshalGQL implements graphql.Unmarshaler interface.
func (e *Type) UnmarshalGQL(val interface{}) error {
	str, ok := val.(string)
	if !ok {
		return fmt.Errorf("enum %T must be a string", val)
	}
	*e = Type(str)
	if err := TypeValidator(*e); err != nil {
		return fmt.Errorf("%s is not a valid Type", str)
	}
	return nil
}