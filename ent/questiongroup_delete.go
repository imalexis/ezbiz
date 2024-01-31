// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"ezbiz.com/ent/predicate"
	"ezbiz.com/ent/questiongroup"
)

// QuestionGroupDelete is the builder for deleting a QuestionGroup entity.
type QuestionGroupDelete struct {
	config
	hooks    []Hook
	mutation *QuestionGroupMutation
}

// Where appends a list predicates to the QuestionGroupDelete builder.
func (qgd *QuestionGroupDelete) Where(ps ...predicate.QuestionGroup) *QuestionGroupDelete {
	qgd.mutation.Where(ps...)
	return qgd
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (qgd *QuestionGroupDelete) Exec(ctx context.Context) (int, error) {
	return withHooks(ctx, qgd.sqlExec, qgd.mutation, qgd.hooks)
}

// ExecX is like Exec, but panics if an error occurs.
func (qgd *QuestionGroupDelete) ExecX(ctx context.Context) int {
	n, err := qgd.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (qgd *QuestionGroupDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := sqlgraph.NewDeleteSpec(questiongroup.Table, sqlgraph.NewFieldSpec(questiongroup.FieldID, field.TypeInt))
	if ps := qgd.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	affected, err := sqlgraph.DeleteNodes(ctx, qgd.driver, _spec)
	if err != nil && sqlgraph.IsConstraintError(err) {
		err = &ConstraintError{msg: err.Error(), wrap: err}
	}
	qgd.mutation.done = true
	return affected, err
}

// QuestionGroupDeleteOne is the builder for deleting a single QuestionGroup entity.
type QuestionGroupDeleteOne struct {
	qgd *QuestionGroupDelete
}

// Where appends a list predicates to the QuestionGroupDelete builder.
func (qgdo *QuestionGroupDeleteOne) Where(ps ...predicate.QuestionGroup) *QuestionGroupDeleteOne {
	qgdo.qgd.mutation.Where(ps...)
	return qgdo
}

// Exec executes the deletion query.
func (qgdo *QuestionGroupDeleteOne) Exec(ctx context.Context) error {
	n, err := qgdo.qgd.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{questiongroup.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (qgdo *QuestionGroupDeleteOne) ExecX(ctx context.Context) {
	if err := qgdo.Exec(ctx); err != nil {
		panic(err)
	}
}