// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"time"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"ezbiz.com/ent/formspec"
	"ezbiz.com/ent/predicate"
	"ezbiz.com/ent/question"
	"ezbiz.com/ent/questiongroup"
)

// QuestionGroupUpdate is the builder for updating QuestionGroup entities.
type QuestionGroupUpdate struct {
	config
	hooks    []Hook
	mutation *QuestionGroupMutation
}

// Where appends a list predicates to the QuestionGroupUpdate builder.
func (qgu *QuestionGroupUpdate) Where(ps ...predicate.QuestionGroup) *QuestionGroupUpdate {
	qgu.mutation.Where(ps...)
	return qgu
}

// SetName sets the "name" field.
func (qgu *QuestionGroupUpdate) SetName(s string) *QuestionGroupUpdate {
	qgu.mutation.SetName(s)
	return qgu
}

// SetNillableName sets the "name" field if the given value is not nil.
func (qgu *QuestionGroupUpdate) SetNillableName(s *string) *QuestionGroupUpdate {
	if s != nil {
		qgu.SetName(*s)
	}
	return qgu
}

// SetCreatedBy sets the "created_by" field.
func (qgu *QuestionGroupUpdate) SetCreatedBy(i int) *QuestionGroupUpdate {
	qgu.mutation.ResetCreatedBy()
	qgu.mutation.SetCreatedBy(i)
	return qgu
}

// SetNillableCreatedBy sets the "created_by" field if the given value is not nil.
func (qgu *QuestionGroupUpdate) SetNillableCreatedBy(i *int) *QuestionGroupUpdate {
	if i != nil {
		qgu.SetCreatedBy(*i)
	}
	return qgu
}

// AddCreatedBy adds i to the "created_by" field.
func (qgu *QuestionGroupUpdate) AddCreatedBy(i int) *QuestionGroupUpdate {
	qgu.mutation.AddCreatedBy(i)
	return qgu
}

// SetCreatedAt sets the "created_at" field.
func (qgu *QuestionGroupUpdate) SetCreatedAt(t time.Time) *QuestionGroupUpdate {
	qgu.mutation.SetCreatedAt(t)
	return qgu
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (qgu *QuestionGroupUpdate) SetNillableCreatedAt(t *time.Time) *QuestionGroupUpdate {
	if t != nil {
		qgu.SetCreatedAt(*t)
	}
	return qgu
}

// SetUpdatedAt sets the "updated_at" field.
func (qgu *QuestionGroupUpdate) SetUpdatedAt(t time.Time) *QuestionGroupUpdate {
	qgu.mutation.SetUpdatedAt(t)
	return qgu
}

// SetNillableUpdatedAt sets the "updated_at" field if the given value is not nil.
func (qgu *QuestionGroupUpdate) SetNillableUpdatedAt(t *time.Time) *QuestionGroupUpdate {
	if t != nil {
		qgu.SetUpdatedAt(*t)
	}
	return qgu
}

// AddQuestionIDs adds the "question" edge to the Question entity by IDs.
func (qgu *QuestionGroupUpdate) AddQuestionIDs(ids ...int) *QuestionGroupUpdate {
	qgu.mutation.AddQuestionIDs(ids...)
	return qgu
}

// AddQuestion adds the "question" edges to the Question entity.
func (qgu *QuestionGroupUpdate) AddQuestion(q ...*Question) *QuestionGroupUpdate {
	ids := make([]int, len(q))
	for i := range q {
		ids[i] = q[i].ID
	}
	return qgu.AddQuestionIDs(ids...)
}

// SetFormSpecID sets the "form_spec" edge to the FormSpec entity by ID.
func (qgu *QuestionGroupUpdate) SetFormSpecID(id int) *QuestionGroupUpdate {
	qgu.mutation.SetFormSpecID(id)
	return qgu
}

// SetNillableFormSpecID sets the "form_spec" edge to the FormSpec entity by ID if the given value is not nil.
func (qgu *QuestionGroupUpdate) SetNillableFormSpecID(id *int) *QuestionGroupUpdate {
	if id != nil {
		qgu = qgu.SetFormSpecID(*id)
	}
	return qgu
}

// SetFormSpec sets the "form_spec" edge to the FormSpec entity.
func (qgu *QuestionGroupUpdate) SetFormSpec(f *FormSpec) *QuestionGroupUpdate {
	return qgu.SetFormSpecID(f.ID)
}

// Mutation returns the QuestionGroupMutation object of the builder.
func (qgu *QuestionGroupUpdate) Mutation() *QuestionGroupMutation {
	return qgu.mutation
}

// ClearQuestion clears all "question" edges to the Question entity.
func (qgu *QuestionGroupUpdate) ClearQuestion() *QuestionGroupUpdate {
	qgu.mutation.ClearQuestion()
	return qgu
}

// RemoveQuestionIDs removes the "question" edge to Question entities by IDs.
func (qgu *QuestionGroupUpdate) RemoveQuestionIDs(ids ...int) *QuestionGroupUpdate {
	qgu.mutation.RemoveQuestionIDs(ids...)
	return qgu
}

// RemoveQuestion removes "question" edges to Question entities.
func (qgu *QuestionGroupUpdate) RemoveQuestion(q ...*Question) *QuestionGroupUpdate {
	ids := make([]int, len(q))
	for i := range q {
		ids[i] = q[i].ID
	}
	return qgu.RemoveQuestionIDs(ids...)
}

// ClearFormSpec clears the "form_spec" edge to the FormSpec entity.
func (qgu *QuestionGroupUpdate) ClearFormSpec() *QuestionGroupUpdate {
	qgu.mutation.ClearFormSpec()
	return qgu
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (qgu *QuestionGroupUpdate) Save(ctx context.Context) (int, error) {
	return withHooks(ctx, qgu.sqlSave, qgu.mutation, qgu.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (qgu *QuestionGroupUpdate) SaveX(ctx context.Context) int {
	affected, err := qgu.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (qgu *QuestionGroupUpdate) Exec(ctx context.Context) error {
	_, err := qgu.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (qgu *QuestionGroupUpdate) ExecX(ctx context.Context) {
	if err := qgu.Exec(ctx); err != nil {
		panic(err)
	}
}

func (qgu *QuestionGroupUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := sqlgraph.NewUpdateSpec(questiongroup.Table, questiongroup.Columns, sqlgraph.NewFieldSpec(questiongroup.FieldID, field.TypeInt))
	if ps := qgu.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := qgu.mutation.Name(); ok {
		_spec.SetField(questiongroup.FieldName, field.TypeString, value)
	}
	if value, ok := qgu.mutation.CreatedBy(); ok {
		_spec.SetField(questiongroup.FieldCreatedBy, field.TypeInt, value)
	}
	if value, ok := qgu.mutation.AddedCreatedBy(); ok {
		_spec.AddField(questiongroup.FieldCreatedBy, field.TypeInt, value)
	}
	if value, ok := qgu.mutation.CreatedAt(); ok {
		_spec.SetField(questiongroup.FieldCreatedAt, field.TypeTime, value)
	}
	if value, ok := qgu.mutation.UpdatedAt(); ok {
		_spec.SetField(questiongroup.FieldUpdatedAt, field.TypeTime, value)
	}
	if qgu.mutation.QuestionCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   questiongroup.QuestionTable,
			Columns: []string{questiongroup.QuestionColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(question.FieldID, field.TypeInt),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := qgu.mutation.RemovedQuestionIDs(); len(nodes) > 0 && !qgu.mutation.QuestionCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   questiongroup.QuestionTable,
			Columns: []string{questiongroup.QuestionColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(question.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := qgu.mutation.QuestionIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   questiongroup.QuestionTable,
			Columns: []string{questiongroup.QuestionColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(question.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if qgu.mutation.FormSpecCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   questiongroup.FormSpecTable,
			Columns: []string{questiongroup.FormSpecColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(formspec.FieldID, field.TypeInt),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := qgu.mutation.FormSpecIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   questiongroup.FormSpecTable,
			Columns: []string{questiongroup.FormSpecColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(formspec.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if n, err = sqlgraph.UpdateNodes(ctx, qgu.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{questiongroup.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return 0, err
	}
	qgu.mutation.done = true
	return n, nil
}

// QuestionGroupUpdateOne is the builder for updating a single QuestionGroup entity.
type QuestionGroupUpdateOne struct {
	config
	fields   []string
	hooks    []Hook
	mutation *QuestionGroupMutation
}

// SetName sets the "name" field.
func (qguo *QuestionGroupUpdateOne) SetName(s string) *QuestionGroupUpdateOne {
	qguo.mutation.SetName(s)
	return qguo
}

// SetNillableName sets the "name" field if the given value is not nil.
func (qguo *QuestionGroupUpdateOne) SetNillableName(s *string) *QuestionGroupUpdateOne {
	if s != nil {
		qguo.SetName(*s)
	}
	return qguo
}

// SetCreatedBy sets the "created_by" field.
func (qguo *QuestionGroupUpdateOne) SetCreatedBy(i int) *QuestionGroupUpdateOne {
	qguo.mutation.ResetCreatedBy()
	qguo.mutation.SetCreatedBy(i)
	return qguo
}

// SetNillableCreatedBy sets the "created_by" field if the given value is not nil.
func (qguo *QuestionGroupUpdateOne) SetNillableCreatedBy(i *int) *QuestionGroupUpdateOne {
	if i != nil {
		qguo.SetCreatedBy(*i)
	}
	return qguo
}

// AddCreatedBy adds i to the "created_by" field.
func (qguo *QuestionGroupUpdateOne) AddCreatedBy(i int) *QuestionGroupUpdateOne {
	qguo.mutation.AddCreatedBy(i)
	return qguo
}

// SetCreatedAt sets the "created_at" field.
func (qguo *QuestionGroupUpdateOne) SetCreatedAt(t time.Time) *QuestionGroupUpdateOne {
	qguo.mutation.SetCreatedAt(t)
	return qguo
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (qguo *QuestionGroupUpdateOne) SetNillableCreatedAt(t *time.Time) *QuestionGroupUpdateOne {
	if t != nil {
		qguo.SetCreatedAt(*t)
	}
	return qguo
}

// SetUpdatedAt sets the "updated_at" field.
func (qguo *QuestionGroupUpdateOne) SetUpdatedAt(t time.Time) *QuestionGroupUpdateOne {
	qguo.mutation.SetUpdatedAt(t)
	return qguo
}

// SetNillableUpdatedAt sets the "updated_at" field if the given value is not nil.
func (qguo *QuestionGroupUpdateOne) SetNillableUpdatedAt(t *time.Time) *QuestionGroupUpdateOne {
	if t != nil {
		qguo.SetUpdatedAt(*t)
	}
	return qguo
}

// AddQuestionIDs adds the "question" edge to the Question entity by IDs.
func (qguo *QuestionGroupUpdateOne) AddQuestionIDs(ids ...int) *QuestionGroupUpdateOne {
	qguo.mutation.AddQuestionIDs(ids...)
	return qguo
}

// AddQuestion adds the "question" edges to the Question entity.
func (qguo *QuestionGroupUpdateOne) AddQuestion(q ...*Question) *QuestionGroupUpdateOne {
	ids := make([]int, len(q))
	for i := range q {
		ids[i] = q[i].ID
	}
	return qguo.AddQuestionIDs(ids...)
}

// SetFormSpecID sets the "form_spec" edge to the FormSpec entity by ID.
func (qguo *QuestionGroupUpdateOne) SetFormSpecID(id int) *QuestionGroupUpdateOne {
	qguo.mutation.SetFormSpecID(id)
	return qguo
}

// SetNillableFormSpecID sets the "form_spec" edge to the FormSpec entity by ID if the given value is not nil.
func (qguo *QuestionGroupUpdateOne) SetNillableFormSpecID(id *int) *QuestionGroupUpdateOne {
	if id != nil {
		qguo = qguo.SetFormSpecID(*id)
	}
	return qguo
}

// SetFormSpec sets the "form_spec" edge to the FormSpec entity.
func (qguo *QuestionGroupUpdateOne) SetFormSpec(f *FormSpec) *QuestionGroupUpdateOne {
	return qguo.SetFormSpecID(f.ID)
}

// Mutation returns the QuestionGroupMutation object of the builder.
func (qguo *QuestionGroupUpdateOne) Mutation() *QuestionGroupMutation {
	return qguo.mutation
}

// ClearQuestion clears all "question" edges to the Question entity.
func (qguo *QuestionGroupUpdateOne) ClearQuestion() *QuestionGroupUpdateOne {
	qguo.mutation.ClearQuestion()
	return qguo
}

// RemoveQuestionIDs removes the "question" edge to Question entities by IDs.
func (qguo *QuestionGroupUpdateOne) RemoveQuestionIDs(ids ...int) *QuestionGroupUpdateOne {
	qguo.mutation.RemoveQuestionIDs(ids...)
	return qguo
}

// RemoveQuestion removes "question" edges to Question entities.
func (qguo *QuestionGroupUpdateOne) RemoveQuestion(q ...*Question) *QuestionGroupUpdateOne {
	ids := make([]int, len(q))
	for i := range q {
		ids[i] = q[i].ID
	}
	return qguo.RemoveQuestionIDs(ids...)
}

// ClearFormSpec clears the "form_spec" edge to the FormSpec entity.
func (qguo *QuestionGroupUpdateOne) ClearFormSpec() *QuestionGroupUpdateOne {
	qguo.mutation.ClearFormSpec()
	return qguo
}

// Where appends a list predicates to the QuestionGroupUpdate builder.
func (qguo *QuestionGroupUpdateOne) Where(ps ...predicate.QuestionGroup) *QuestionGroupUpdateOne {
	qguo.mutation.Where(ps...)
	return qguo
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (qguo *QuestionGroupUpdateOne) Select(field string, fields ...string) *QuestionGroupUpdateOne {
	qguo.fields = append([]string{field}, fields...)
	return qguo
}

// Save executes the query and returns the updated QuestionGroup entity.
func (qguo *QuestionGroupUpdateOne) Save(ctx context.Context) (*QuestionGroup, error) {
	return withHooks(ctx, qguo.sqlSave, qguo.mutation, qguo.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (qguo *QuestionGroupUpdateOne) SaveX(ctx context.Context) *QuestionGroup {
	node, err := qguo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (qguo *QuestionGroupUpdateOne) Exec(ctx context.Context) error {
	_, err := qguo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (qguo *QuestionGroupUpdateOne) ExecX(ctx context.Context) {
	if err := qguo.Exec(ctx); err != nil {
		panic(err)
	}
}

func (qguo *QuestionGroupUpdateOne) sqlSave(ctx context.Context) (_node *QuestionGroup, err error) {
	_spec := sqlgraph.NewUpdateSpec(questiongroup.Table, questiongroup.Columns, sqlgraph.NewFieldSpec(questiongroup.FieldID, field.TypeInt))
	id, ok := qguo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "QuestionGroup.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := qguo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, questiongroup.FieldID)
		for _, f := range fields {
			if !questiongroup.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != questiongroup.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := qguo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := qguo.mutation.Name(); ok {
		_spec.SetField(questiongroup.FieldName, field.TypeString, value)
	}
	if value, ok := qguo.mutation.CreatedBy(); ok {
		_spec.SetField(questiongroup.FieldCreatedBy, field.TypeInt, value)
	}
	if value, ok := qguo.mutation.AddedCreatedBy(); ok {
		_spec.AddField(questiongroup.FieldCreatedBy, field.TypeInt, value)
	}
	if value, ok := qguo.mutation.CreatedAt(); ok {
		_spec.SetField(questiongroup.FieldCreatedAt, field.TypeTime, value)
	}
	if value, ok := qguo.mutation.UpdatedAt(); ok {
		_spec.SetField(questiongroup.FieldUpdatedAt, field.TypeTime, value)
	}
	if qguo.mutation.QuestionCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   questiongroup.QuestionTable,
			Columns: []string{questiongroup.QuestionColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(question.FieldID, field.TypeInt),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := qguo.mutation.RemovedQuestionIDs(); len(nodes) > 0 && !qguo.mutation.QuestionCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   questiongroup.QuestionTable,
			Columns: []string{questiongroup.QuestionColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(question.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := qguo.mutation.QuestionIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   questiongroup.QuestionTable,
			Columns: []string{questiongroup.QuestionColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(question.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if qguo.mutation.FormSpecCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   questiongroup.FormSpecTable,
			Columns: []string{questiongroup.FormSpecColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(formspec.FieldID, field.TypeInt),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := qguo.mutation.FormSpecIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   questiongroup.FormSpecTable,
			Columns: []string{questiongroup.FormSpecColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(formspec.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_node = &QuestionGroup{config: qguo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, qguo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{questiongroup.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	qguo.mutation.done = true
	return _node, nil
}
