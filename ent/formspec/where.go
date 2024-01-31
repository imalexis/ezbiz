// Code generated by ent, DO NOT EDIT.

package formspec

import (
	"time"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"ezbiz.com/ent/predicate"
)

// ID filters vertices based on their ID field.
func ID(id int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldID, id))
}

// IDEQ applies the EQ predicate on the ID field.
func IDEQ(id int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldID, id))
}

// IDNEQ applies the NEQ predicate on the ID field.
func IDNEQ(id int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNEQ(FieldID, id))
}

// IDIn applies the In predicate on the ID field.
func IDIn(ids ...int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldIn(FieldID, ids...))
}

// IDNotIn applies the NotIn predicate on the ID field.
func IDNotIn(ids ...int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNotIn(FieldID, ids...))
}

// IDGT applies the GT predicate on the ID field.
func IDGT(id int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldGT(FieldID, id))
}

// IDGTE applies the GTE predicate on the ID field.
func IDGTE(id int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldGTE(FieldID, id))
}

// IDLT applies the LT predicate on the ID field.
func IDLT(id int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldLT(FieldID, id))
}

// IDLTE applies the LTE predicate on the ID field.
func IDLTE(id int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldLTE(FieldID, id))
}

// Name applies equality check predicate on the "name" field. It's identical to NameEQ.
func Name(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldName, v))
}

// Cover applies equality check predicate on the "cover" field. It's identical to CoverEQ.
func Cover(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldCover, v))
}

// Description applies equality check predicate on the "description" field. It's identical to DescriptionEQ.
func Description(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldDescription, v))
}

// Enabled applies equality check predicate on the "enabled" field. It's identical to EnabledEQ.
func Enabled(v bool) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldEnabled, v))
}

// CreatedAt applies equality check predicate on the "created_at" field. It's identical to CreatedAtEQ.
func CreatedAt(v time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldCreatedAt, v))
}

// UpdatedAt applies equality check predicate on the "updated_at" field. It's identical to UpdatedAtEQ.
func UpdatedAt(v time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldUpdatedAt, v))
}

// CreatedBy applies equality check predicate on the "created_by" field. It's identical to CreatedByEQ.
func CreatedBy(v int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldCreatedBy, v))
}

// NameEQ applies the EQ predicate on the "name" field.
func NameEQ(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldName, v))
}

// NameNEQ applies the NEQ predicate on the "name" field.
func NameNEQ(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNEQ(FieldName, v))
}

// NameIn applies the In predicate on the "name" field.
func NameIn(vs ...string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldIn(FieldName, vs...))
}

// NameNotIn applies the NotIn predicate on the "name" field.
func NameNotIn(vs ...string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNotIn(FieldName, vs...))
}

// NameGT applies the GT predicate on the "name" field.
func NameGT(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldGT(FieldName, v))
}

// NameGTE applies the GTE predicate on the "name" field.
func NameGTE(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldGTE(FieldName, v))
}

// NameLT applies the LT predicate on the "name" field.
func NameLT(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldLT(FieldName, v))
}

// NameLTE applies the LTE predicate on the "name" field.
func NameLTE(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldLTE(FieldName, v))
}

// NameContains applies the Contains predicate on the "name" field.
func NameContains(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldContains(FieldName, v))
}

// NameHasPrefix applies the HasPrefix predicate on the "name" field.
func NameHasPrefix(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldHasPrefix(FieldName, v))
}

// NameHasSuffix applies the HasSuffix predicate on the "name" field.
func NameHasSuffix(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldHasSuffix(FieldName, v))
}

// NameEqualFold applies the EqualFold predicate on the "name" field.
func NameEqualFold(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEqualFold(FieldName, v))
}

// NameContainsFold applies the ContainsFold predicate on the "name" field.
func NameContainsFold(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldContainsFold(FieldName, v))
}

// CoverEQ applies the EQ predicate on the "cover" field.
func CoverEQ(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldCover, v))
}

// CoverNEQ applies the NEQ predicate on the "cover" field.
func CoverNEQ(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNEQ(FieldCover, v))
}

// CoverIn applies the In predicate on the "cover" field.
func CoverIn(vs ...string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldIn(FieldCover, vs...))
}

// CoverNotIn applies the NotIn predicate on the "cover" field.
func CoverNotIn(vs ...string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNotIn(FieldCover, vs...))
}

// CoverGT applies the GT predicate on the "cover" field.
func CoverGT(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldGT(FieldCover, v))
}

// CoverGTE applies the GTE predicate on the "cover" field.
func CoverGTE(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldGTE(FieldCover, v))
}

// CoverLT applies the LT predicate on the "cover" field.
func CoverLT(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldLT(FieldCover, v))
}

// CoverLTE applies the LTE predicate on the "cover" field.
func CoverLTE(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldLTE(FieldCover, v))
}

// CoverContains applies the Contains predicate on the "cover" field.
func CoverContains(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldContains(FieldCover, v))
}

// CoverHasPrefix applies the HasPrefix predicate on the "cover" field.
func CoverHasPrefix(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldHasPrefix(FieldCover, v))
}

// CoverHasSuffix applies the HasSuffix predicate on the "cover" field.
func CoverHasSuffix(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldHasSuffix(FieldCover, v))
}

// CoverIsNil applies the IsNil predicate on the "cover" field.
func CoverIsNil() predicate.FormSpec {
	return predicate.FormSpec(sql.FieldIsNull(FieldCover))
}

// CoverNotNil applies the NotNil predicate on the "cover" field.
func CoverNotNil() predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNotNull(FieldCover))
}

// CoverEqualFold applies the EqualFold predicate on the "cover" field.
func CoverEqualFold(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEqualFold(FieldCover, v))
}

// CoverContainsFold applies the ContainsFold predicate on the "cover" field.
func CoverContainsFold(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldContainsFold(FieldCover, v))
}

// DescriptionEQ applies the EQ predicate on the "description" field.
func DescriptionEQ(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldDescription, v))
}

// DescriptionNEQ applies the NEQ predicate on the "description" field.
func DescriptionNEQ(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNEQ(FieldDescription, v))
}

// DescriptionIn applies the In predicate on the "description" field.
func DescriptionIn(vs ...string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldIn(FieldDescription, vs...))
}

// DescriptionNotIn applies the NotIn predicate on the "description" field.
func DescriptionNotIn(vs ...string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNotIn(FieldDescription, vs...))
}

// DescriptionGT applies the GT predicate on the "description" field.
func DescriptionGT(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldGT(FieldDescription, v))
}

// DescriptionGTE applies the GTE predicate on the "description" field.
func DescriptionGTE(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldGTE(FieldDescription, v))
}

// DescriptionLT applies the LT predicate on the "description" field.
func DescriptionLT(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldLT(FieldDescription, v))
}

// DescriptionLTE applies the LTE predicate on the "description" field.
func DescriptionLTE(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldLTE(FieldDescription, v))
}

// DescriptionContains applies the Contains predicate on the "description" field.
func DescriptionContains(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldContains(FieldDescription, v))
}

// DescriptionHasPrefix applies the HasPrefix predicate on the "description" field.
func DescriptionHasPrefix(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldHasPrefix(FieldDescription, v))
}

// DescriptionHasSuffix applies the HasSuffix predicate on the "description" field.
func DescriptionHasSuffix(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldHasSuffix(FieldDescription, v))
}

// DescriptionEqualFold applies the EqualFold predicate on the "description" field.
func DescriptionEqualFold(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEqualFold(FieldDescription, v))
}

// DescriptionContainsFold applies the ContainsFold predicate on the "description" field.
func DescriptionContainsFold(v string) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldContainsFold(FieldDescription, v))
}

// EnabledEQ applies the EQ predicate on the "enabled" field.
func EnabledEQ(v bool) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldEnabled, v))
}

// EnabledNEQ applies the NEQ predicate on the "enabled" field.
func EnabledNEQ(v bool) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNEQ(FieldEnabled, v))
}

// CreatedAtEQ applies the EQ predicate on the "created_at" field.
func CreatedAtEQ(v time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldCreatedAt, v))
}

// CreatedAtNEQ applies the NEQ predicate on the "created_at" field.
func CreatedAtNEQ(v time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNEQ(FieldCreatedAt, v))
}

// CreatedAtIn applies the In predicate on the "created_at" field.
func CreatedAtIn(vs ...time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldIn(FieldCreatedAt, vs...))
}

// CreatedAtNotIn applies the NotIn predicate on the "created_at" field.
func CreatedAtNotIn(vs ...time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNotIn(FieldCreatedAt, vs...))
}

// CreatedAtGT applies the GT predicate on the "created_at" field.
func CreatedAtGT(v time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldGT(FieldCreatedAt, v))
}

// CreatedAtGTE applies the GTE predicate on the "created_at" field.
func CreatedAtGTE(v time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldGTE(FieldCreatedAt, v))
}

// CreatedAtLT applies the LT predicate on the "created_at" field.
func CreatedAtLT(v time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldLT(FieldCreatedAt, v))
}

// CreatedAtLTE applies the LTE predicate on the "created_at" field.
func CreatedAtLTE(v time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldLTE(FieldCreatedAt, v))
}

// UpdatedAtEQ applies the EQ predicate on the "updated_at" field.
func UpdatedAtEQ(v time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldUpdatedAt, v))
}

// UpdatedAtNEQ applies the NEQ predicate on the "updated_at" field.
func UpdatedAtNEQ(v time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNEQ(FieldUpdatedAt, v))
}

// UpdatedAtIn applies the In predicate on the "updated_at" field.
func UpdatedAtIn(vs ...time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldIn(FieldUpdatedAt, vs...))
}

// UpdatedAtNotIn applies the NotIn predicate on the "updated_at" field.
func UpdatedAtNotIn(vs ...time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNotIn(FieldUpdatedAt, vs...))
}

// UpdatedAtGT applies the GT predicate on the "updated_at" field.
func UpdatedAtGT(v time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldGT(FieldUpdatedAt, v))
}

// UpdatedAtGTE applies the GTE predicate on the "updated_at" field.
func UpdatedAtGTE(v time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldGTE(FieldUpdatedAt, v))
}

// UpdatedAtLT applies the LT predicate on the "updated_at" field.
func UpdatedAtLT(v time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldLT(FieldUpdatedAt, v))
}

// UpdatedAtLTE applies the LTE predicate on the "updated_at" field.
func UpdatedAtLTE(v time.Time) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldLTE(FieldUpdatedAt, v))
}

// CreatedByEQ applies the EQ predicate on the "created_by" field.
func CreatedByEQ(v int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldEQ(FieldCreatedBy, v))
}

// CreatedByNEQ applies the NEQ predicate on the "created_by" field.
func CreatedByNEQ(v int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNEQ(FieldCreatedBy, v))
}

// CreatedByIn applies the In predicate on the "created_by" field.
func CreatedByIn(vs ...int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldIn(FieldCreatedBy, vs...))
}

// CreatedByNotIn applies the NotIn predicate on the "created_by" field.
func CreatedByNotIn(vs ...int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldNotIn(FieldCreatedBy, vs...))
}

// CreatedByGT applies the GT predicate on the "created_by" field.
func CreatedByGT(v int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldGT(FieldCreatedBy, v))
}

// CreatedByGTE applies the GTE predicate on the "created_by" field.
func CreatedByGTE(v int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldGTE(FieldCreatedBy, v))
}

// CreatedByLT applies the LT predicate on the "created_by" field.
func CreatedByLT(v int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldLT(FieldCreatedBy, v))
}

// CreatedByLTE applies the LTE predicate on the "created_by" field.
func CreatedByLTE(v int) predicate.FormSpec {
	return predicate.FormSpec(sql.FieldLTE(FieldCreatedBy, v))
}

// HasQuestionGroups applies the HasEdge predicate on the "question_groups" edge.
func HasQuestionGroups() predicate.FormSpec {
	return predicate.FormSpec(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, QuestionGroupsTable, QuestionGroupsColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasQuestionGroupsWith applies the HasEdge predicate on the "question_groups" edge with a given conditions (other predicates).
func HasQuestionGroupsWith(preds ...predicate.QuestionGroup) predicate.FormSpec {
	return predicate.FormSpec(func(s *sql.Selector) {
		step := newQuestionGroupsStep()
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// HasFormInstances applies the HasEdge predicate on the "form_instances" edge.
func HasFormInstances() predicate.FormSpec {
	return predicate.FormSpec(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, FormInstancesTable, FormInstancesColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasFormInstancesWith applies the HasEdge predicate on the "form_instances" edge with a given conditions (other predicates).
func HasFormInstancesWith(preds ...predicate.FormInstance) predicate.FormSpec {
	return predicate.FormSpec(func(s *sql.Selector) {
		step := newFormInstancesStep()
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// HasOwner applies the HasEdge predicate on the "owner" edge.
func HasOwner() predicate.FormSpec {
	return predicate.FormSpec(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, OwnerTable, OwnerColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasOwnerWith applies the HasEdge predicate on the "owner" edge with a given conditions (other predicates).
func HasOwnerWith(preds ...predicate.User) predicate.FormSpec {
	return predicate.FormSpec(func(s *sql.Selector) {
		step := newOwnerStep()
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// And groups predicates with the AND operator between them.
func And(predicates ...predicate.FormSpec) predicate.FormSpec {
	return predicate.FormSpec(sql.AndPredicates(predicates...))
}

// Or groups predicates with the OR operator between them.
func Or(predicates ...predicate.FormSpec) predicate.FormSpec {
	return predicate.FormSpec(sql.OrPredicates(predicates...))
}

// Not applies the not operator on the given predicate.
func Not(p predicate.FormSpec) predicate.FormSpec {
	return predicate.FormSpec(sql.NotPredicates(p))
}
