// Code generated by ent, DO NOT EDIT.

package question

import (
	"fmt"
	"io"
	"strconv"
	"time"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
)

const (
	// Label holds the string label denoting the question type in the database.
	Label = "question"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldLabel holds the string denoting the label field in the database.
	FieldLabel = "label"
	// FieldTitle holds the string denoting the title field in the database.
	FieldTitle = "title"
	// FieldType holds the string denoting the type field in the database.
	FieldType = "type"
	// FieldRequired holds the string denoting the required field in the database.
	FieldRequired = "required"
	// FieldExtraData holds the string denoting the extra_data field in the database.
	FieldExtraData = "extra_data"
	// FieldRule holds the string denoting the rule field in the database.
	FieldRule = "rule"
	// FieldDependencies holds the string denoting the dependencies field in the database.
	FieldDependencies = "dependencies"
	// FieldCreatedAt holds the string denoting the created_at field in the database.
	FieldCreatedAt = "created_at"
	// FieldUpdatedAt holds the string denoting the updated_at field in the database.
	FieldUpdatedAt = "updated_at"
	// FieldCreatedBy holds the string denoting the created_by field in the database.
	FieldCreatedBy = "created_by"
	// EdgeFromQuestionGroup holds the string denoting the from_question_group edge name in mutations.
	EdgeFromQuestionGroup = "from_question_group"
	// EdgeQuestionResponse holds the string denoting the question_response edge name in mutations.
	EdgeQuestionResponse = "question_response"
	// Table holds the table name of the question in the database.
	Table = "questions"
	// FromQuestionGroupTable is the table that holds the from_question_group relation/edge.
	FromQuestionGroupTable = "questions"
	// FromQuestionGroupInverseTable is the table name for the QuestionGroup entity.
	// It exists in this package in order to avoid circular dependency with the "questiongroup" package.
	FromQuestionGroupInverseTable = "question_groups"
	// FromQuestionGroupColumn is the table column denoting the from_question_group relation/edge.
	FromQuestionGroupColumn = "question_group_question"
	// QuestionResponseTable is the table that holds the question_response relation/edge.
	QuestionResponseTable = "question_responses"
	// QuestionResponseInverseTable is the table name for the QuestionResponse entity.
	// It exists in this package in order to avoid circular dependency with the "questionresponse" package.
	QuestionResponseInverseTable = "question_responses"
	// QuestionResponseColumn is the table column denoting the question_response relation/edge.
	QuestionResponseColumn = "question_question_response"
)

// Columns holds all SQL columns for question fields.
var Columns = []string{
	FieldID,
	FieldLabel,
	FieldTitle,
	FieldType,
	FieldRequired,
	FieldExtraData,
	FieldRule,
	FieldDependencies,
	FieldCreatedAt,
	FieldUpdatedAt,
	FieldCreatedBy,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the "questions"
// table and are not defined as standalone fields in the schema.
var ForeignKeys = []string{
	"question_group_question",
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
	// DefaultExtraData holds the default value on creation for the "extra_data" field.
	DefaultExtraData string
	// DefaultRule holds the default value on creation for the "rule" field.
	DefaultRule string
	// DefaultDependencies holds the default value on creation for the "dependencies" field.
	DefaultDependencies string
	// DefaultCreatedAt holds the default value on creation for the "created_at" field.
	DefaultCreatedAt func() time.Time
	// DefaultUpdatedAt holds the default value on creation for the "updated_at" field.
	DefaultUpdatedAt func() time.Time
)

// Type defines the type for the "type" enum field.
type Type string

// Type values.
const (
	TypeShortText   Type = "short_text"
	TypeParagraph   Type = "paragraph"
	TypeMultiChoice Type = "multi_choice"
	TypeCheckboxes  Type = "checkboxes"
	TypeDropDown    Type = "drop_down"
	TypeFile        Type = "file"
	TypeLinearScale Type = "linear_scale"
	TypeDate        Type = "date"
	TypeTime        Type = "time"
)

func (_type Type) String() string {
	return string(_type)
}

// TypeValidator is a validator for the "type" field enum values. It is called by the builders before save.
func TypeValidator(_type Type) error {
	switch _type {
	case TypeShortText, TypeParagraph, TypeMultiChoice, TypeCheckboxes, TypeDropDown, TypeFile, TypeLinearScale, TypeDate, TypeTime:
		return nil
	default:
		return fmt.Errorf("question: invalid enum value for type field: %q", _type)
	}
}

// OrderOption defines the ordering options for the Question queries.
type OrderOption func(*sql.Selector)

// ByID orders the results by the id field.
func ByID(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldID, opts...).ToFunc()
}

// ByLabel orders the results by the label field.
func ByLabel(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldLabel, opts...).ToFunc()
}

// ByTitle orders the results by the title field.
func ByTitle(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldTitle, opts...).ToFunc()
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

// ByRule orders the results by the rule field.
func ByRule(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldRule, opts...).ToFunc()
}

// ByDependencies orders the results by the dependencies field.
func ByDependencies(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldDependencies, opts...).ToFunc()
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

// ByFromQuestionGroupField orders the results by from_question_group field.
func ByFromQuestionGroupField(field string, opts ...sql.OrderTermOption) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborTerms(s, newFromQuestionGroupStep(), sql.OrderByField(field, opts...))
	}
}

// ByQuestionResponseCount orders the results by question_response count.
func ByQuestionResponseCount(opts ...sql.OrderTermOption) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborsCount(s, newQuestionResponseStep(), opts...)
	}
}

// ByQuestionResponse orders the results by question_response terms.
func ByQuestionResponse(term sql.OrderTerm, terms ...sql.OrderTerm) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborTerms(s, newQuestionResponseStep(), append([]sql.OrderTerm{term}, terms...)...)
	}
}
func newFromQuestionGroupStep() *sqlgraph.Step {
	return sqlgraph.NewStep(
		sqlgraph.From(Table, FieldID),
		sqlgraph.To(FromQuestionGroupInverseTable, FieldID),
		sqlgraph.Edge(sqlgraph.M2O, true, FromQuestionGroupTable, FromQuestionGroupColumn),
	)
}
func newQuestionResponseStep() *sqlgraph.Step {
	return sqlgraph.NewStep(
		sqlgraph.From(Table, FieldID),
		sqlgraph.To(QuestionResponseInverseTable, FieldID),
		sqlgraph.Edge(sqlgraph.O2M, false, QuestionResponseTable, QuestionResponseColumn),
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
