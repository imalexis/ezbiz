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
	"ezbiz.com/ent/entform"
	"ezbiz.com/ent/entformquestion"
	"ezbiz.com/ent/predicate"
)

// EntFormQuestionUpdate is the builder for updating EntFormQuestion entities.
type EntFormQuestionUpdate struct {
	config
	hooks    []Hook
	mutation *EntFormQuestionMutation
}

// Where appends a list predicates to the EntFormQuestionUpdate builder.
func (efqu *EntFormQuestionUpdate) Where(ps ...predicate.EntFormQuestion) *EntFormQuestionUpdate {
	efqu.mutation.Where(ps...)
	return efqu
}

// SetTitle sets the "title" field.
func (efqu *EntFormQuestionUpdate) SetTitle(s string) *EntFormQuestionUpdate {
	efqu.mutation.SetTitle(s)
	return efqu
}

// SetNillableTitle sets the "title" field if the given value is not nil.
func (efqu *EntFormQuestionUpdate) SetNillableTitle(s *string) *EntFormQuestionUpdate {
	if s != nil {
		efqu.SetTitle(*s)
	}
	return efqu
}

// SetLabel sets the "label" field.
func (efqu *EntFormQuestionUpdate) SetLabel(s string) *EntFormQuestionUpdate {
	efqu.mutation.SetLabel(s)
	return efqu
}

// SetNillableLabel sets the "label" field if the given value is not nil.
func (efqu *EntFormQuestionUpdate) SetNillableLabel(s *string) *EntFormQuestionUpdate {
	if s != nil {
		efqu.SetLabel(*s)
	}
	return efqu
}

// SetType sets the "type" field.
func (efqu *EntFormQuestionUpdate) SetType(e entformquestion.Type) *EntFormQuestionUpdate {
	efqu.mutation.SetType(e)
	return efqu
}

// SetNillableType sets the "type" field if the given value is not nil.
func (efqu *EntFormQuestionUpdate) SetNillableType(e *entformquestion.Type) *EntFormQuestionUpdate {
	if e != nil {
		efqu.SetType(*e)
	}
	return efqu
}

// SetRequired sets the "required" field.
func (efqu *EntFormQuestionUpdate) SetRequired(b bool) *EntFormQuestionUpdate {
	efqu.mutation.SetRequired(b)
	return efqu
}

// SetNillableRequired sets the "required" field if the given value is not nil.
func (efqu *EntFormQuestionUpdate) SetNillableRequired(b *bool) *EntFormQuestionUpdate {
	if b != nil {
		efqu.SetRequired(*b)
	}
	return efqu
}

// SetExtraData sets the "extra_data" field.
func (efqu *EntFormQuestionUpdate) SetExtraData(s string) *EntFormQuestionUpdate {
	efqu.mutation.SetExtraData(s)
	return efqu
}

// SetNillableExtraData sets the "extra_data" field if the given value is not nil.
func (efqu *EntFormQuestionUpdate) SetNillableExtraData(s *string) *EntFormQuestionUpdate {
	if s != nil {
		efqu.SetExtraData(*s)
	}
	return efqu
}

// ClearExtraData clears the value of the "extra_data" field.
func (efqu *EntFormQuestionUpdate) ClearExtraData() *EntFormQuestionUpdate {
	efqu.mutation.ClearExtraData()
	return efqu
}

// SetCreatedAt sets the "created_at" field.
func (efqu *EntFormQuestionUpdate) SetCreatedAt(t time.Time) *EntFormQuestionUpdate {
	efqu.mutation.SetCreatedAt(t)
	return efqu
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (efqu *EntFormQuestionUpdate) SetNillableCreatedAt(t *time.Time) *EntFormQuestionUpdate {
	if t != nil {
		efqu.SetCreatedAt(*t)
	}
	return efqu
}

// SetUpdatedAt sets the "updated_at" field.
func (efqu *EntFormQuestionUpdate) SetUpdatedAt(t time.Time) *EntFormQuestionUpdate {
	efqu.mutation.SetUpdatedAt(t)
	return efqu
}

// SetNillableUpdatedAt sets the "updated_at" field if the given value is not nil.
func (efqu *EntFormQuestionUpdate) SetNillableUpdatedAt(t *time.Time) *EntFormQuestionUpdate {
	if t != nil {
		efqu.SetUpdatedAt(*t)
	}
	return efqu
}

// SetCreatedBy sets the "created_by" field.
func (efqu *EntFormQuestionUpdate) SetCreatedBy(i int) *EntFormQuestionUpdate {
	efqu.mutation.ResetCreatedBy()
	efqu.mutation.SetCreatedBy(i)
	return efqu
}

// SetNillableCreatedBy sets the "created_by" field if the given value is not nil.
func (efqu *EntFormQuestionUpdate) SetNillableCreatedBy(i *int) *EntFormQuestionUpdate {
	if i != nil {
		efqu.SetCreatedBy(*i)
	}
	return efqu
}

// AddCreatedBy adds i to the "created_by" field.
func (efqu *EntFormQuestionUpdate) AddCreatedBy(i int) *EntFormQuestionUpdate {
	efqu.mutation.AddCreatedBy(i)
	return efqu
}

// SetFormID sets the "form" edge to the EntForm entity by ID.
func (efqu *EntFormQuestionUpdate) SetFormID(id int) *EntFormQuestionUpdate {
	efqu.mutation.SetFormID(id)
	return efqu
}

// SetNillableFormID sets the "form" edge to the EntForm entity by ID if the given value is not nil.
func (efqu *EntFormQuestionUpdate) SetNillableFormID(id *int) *EntFormQuestionUpdate {
	if id != nil {
		efqu = efqu.SetFormID(*id)
	}
	return efqu
}

// SetForm sets the "form" edge to the EntForm entity.
func (efqu *EntFormQuestionUpdate) SetForm(e *EntForm) *EntFormQuestionUpdate {
	return efqu.SetFormID(e.ID)
}

// Mutation returns the EntFormQuestionMutation object of the builder.
func (efqu *EntFormQuestionUpdate) Mutation() *EntFormQuestionMutation {
	return efqu.mutation
}

// ClearForm clears the "form" edge to the EntForm entity.
func (efqu *EntFormQuestionUpdate) ClearForm() *EntFormQuestionUpdate {
	efqu.mutation.ClearForm()
	return efqu
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (efqu *EntFormQuestionUpdate) Save(ctx context.Context) (int, error) {
	return withHooks(ctx, efqu.sqlSave, efqu.mutation, efqu.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (efqu *EntFormQuestionUpdate) SaveX(ctx context.Context) int {
	affected, err := efqu.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (efqu *EntFormQuestionUpdate) Exec(ctx context.Context) error {
	_, err := efqu.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (efqu *EntFormQuestionUpdate) ExecX(ctx context.Context) {
	if err := efqu.Exec(ctx); err != nil {
		panic(err)
	}
}

// check runs all checks and user-defined validators on the builder.
func (efqu *EntFormQuestionUpdate) check() error {
	if v, ok := efqu.mutation.GetType(); ok {
		if err := entformquestion.TypeValidator(v); err != nil {
			return &ValidationError{Name: "type", err: fmt.Errorf(`ent: validator failed for field "EntFormQuestion.type": %w`, err)}
		}
	}
	return nil
}

func (efqu *EntFormQuestionUpdate) sqlSave(ctx context.Context) (n int, err error) {
	if err := efqu.check(); err != nil {
		return n, err
	}
	_spec := sqlgraph.NewUpdateSpec(entformquestion.Table, entformquestion.Columns, sqlgraph.NewFieldSpec(entformquestion.FieldID, field.TypeInt))
	if ps := efqu.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := efqu.mutation.Title(); ok {
		_spec.SetField(entformquestion.FieldTitle, field.TypeString, value)
	}
	if value, ok := efqu.mutation.Label(); ok {
		_spec.SetField(entformquestion.FieldLabel, field.TypeString, value)
	}
	if value, ok := efqu.mutation.GetType(); ok {
		_spec.SetField(entformquestion.FieldType, field.TypeEnum, value)
	}
	if value, ok := efqu.mutation.Required(); ok {
		_spec.SetField(entformquestion.FieldRequired, field.TypeBool, value)
	}
	if value, ok := efqu.mutation.ExtraData(); ok {
		_spec.SetField(entformquestion.FieldExtraData, field.TypeString, value)
	}
	if efqu.mutation.ExtraDataCleared() {
		_spec.ClearField(entformquestion.FieldExtraData, field.TypeString)
	}
	if value, ok := efqu.mutation.CreatedAt(); ok {
		_spec.SetField(entformquestion.FieldCreatedAt, field.TypeTime, value)
	}
	if value, ok := efqu.mutation.UpdatedAt(); ok {
		_spec.SetField(entformquestion.FieldUpdatedAt, field.TypeTime, value)
	}
	if value, ok := efqu.mutation.CreatedBy(); ok {
		_spec.SetField(entformquestion.FieldCreatedBy, field.TypeInt, value)
	}
	if value, ok := efqu.mutation.AddedCreatedBy(); ok {
		_spec.AddField(entformquestion.FieldCreatedBy, field.TypeInt, value)
	}
	if efqu.mutation.FormCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   entformquestion.FormTable,
			Columns: []string{entformquestion.FormColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(entform.FieldID, field.TypeInt),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := efqu.mutation.FormIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   entformquestion.FormTable,
			Columns: []string{entformquestion.FormColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(entform.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if n, err = sqlgraph.UpdateNodes(ctx, efqu.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{entformquestion.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return 0, err
	}
	efqu.mutation.done = true
	return n, nil
}

// EntFormQuestionUpdateOne is the builder for updating a single EntFormQuestion entity.
type EntFormQuestionUpdateOne struct {
	config
	fields   []string
	hooks    []Hook
	mutation *EntFormQuestionMutation
}

// SetTitle sets the "title" field.
func (efquo *EntFormQuestionUpdateOne) SetTitle(s string) *EntFormQuestionUpdateOne {
	efquo.mutation.SetTitle(s)
	return efquo
}

// SetNillableTitle sets the "title" field if the given value is not nil.
func (efquo *EntFormQuestionUpdateOne) SetNillableTitle(s *string) *EntFormQuestionUpdateOne {
	if s != nil {
		efquo.SetTitle(*s)
	}
	return efquo
}

// SetLabel sets the "label" field.
func (efquo *EntFormQuestionUpdateOne) SetLabel(s string) *EntFormQuestionUpdateOne {
	efquo.mutation.SetLabel(s)
	return efquo
}

// SetNillableLabel sets the "label" field if the given value is not nil.
func (efquo *EntFormQuestionUpdateOne) SetNillableLabel(s *string) *EntFormQuestionUpdateOne {
	if s != nil {
		efquo.SetLabel(*s)
	}
	return efquo
}

// SetType sets the "type" field.
func (efquo *EntFormQuestionUpdateOne) SetType(e entformquestion.Type) *EntFormQuestionUpdateOne {
	efquo.mutation.SetType(e)
	return efquo
}

// SetNillableType sets the "type" field if the given value is not nil.
func (efquo *EntFormQuestionUpdateOne) SetNillableType(e *entformquestion.Type) *EntFormQuestionUpdateOne {
	if e != nil {
		efquo.SetType(*e)
	}
	return efquo
}

// SetRequired sets the "required" field.
func (efquo *EntFormQuestionUpdateOne) SetRequired(b bool) *EntFormQuestionUpdateOne {
	efquo.mutation.SetRequired(b)
	return efquo
}

// SetNillableRequired sets the "required" field if the given value is not nil.
func (efquo *EntFormQuestionUpdateOne) SetNillableRequired(b *bool) *EntFormQuestionUpdateOne {
	if b != nil {
		efquo.SetRequired(*b)
	}
	return efquo
}

// SetExtraData sets the "extra_data" field.
func (efquo *EntFormQuestionUpdateOne) SetExtraData(s string) *EntFormQuestionUpdateOne {
	efquo.mutation.SetExtraData(s)
	return efquo
}

// SetNillableExtraData sets the "extra_data" field if the given value is not nil.
func (efquo *EntFormQuestionUpdateOne) SetNillableExtraData(s *string) *EntFormQuestionUpdateOne {
	if s != nil {
		efquo.SetExtraData(*s)
	}
	return efquo
}

// ClearExtraData clears the value of the "extra_data" field.
func (efquo *EntFormQuestionUpdateOne) ClearExtraData() *EntFormQuestionUpdateOne {
	efquo.mutation.ClearExtraData()
	return efquo
}

// SetCreatedAt sets the "created_at" field.
func (efquo *EntFormQuestionUpdateOne) SetCreatedAt(t time.Time) *EntFormQuestionUpdateOne {
	efquo.mutation.SetCreatedAt(t)
	return efquo
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (efquo *EntFormQuestionUpdateOne) SetNillableCreatedAt(t *time.Time) *EntFormQuestionUpdateOne {
	if t != nil {
		efquo.SetCreatedAt(*t)
	}
	return efquo
}

// SetUpdatedAt sets the "updated_at" field.
func (efquo *EntFormQuestionUpdateOne) SetUpdatedAt(t time.Time) *EntFormQuestionUpdateOne {
	efquo.mutation.SetUpdatedAt(t)
	return efquo
}

// SetNillableUpdatedAt sets the "updated_at" field if the given value is not nil.
func (efquo *EntFormQuestionUpdateOne) SetNillableUpdatedAt(t *time.Time) *EntFormQuestionUpdateOne {
	if t != nil {
		efquo.SetUpdatedAt(*t)
	}
	return efquo
}

// SetCreatedBy sets the "created_by" field.
func (efquo *EntFormQuestionUpdateOne) SetCreatedBy(i int) *EntFormQuestionUpdateOne {
	efquo.mutation.ResetCreatedBy()
	efquo.mutation.SetCreatedBy(i)
	return efquo
}

// SetNillableCreatedBy sets the "created_by" field if the given value is not nil.
func (efquo *EntFormQuestionUpdateOne) SetNillableCreatedBy(i *int) *EntFormQuestionUpdateOne {
	if i != nil {
		efquo.SetCreatedBy(*i)
	}
	return efquo
}

// AddCreatedBy adds i to the "created_by" field.
func (efquo *EntFormQuestionUpdateOne) AddCreatedBy(i int) *EntFormQuestionUpdateOne {
	efquo.mutation.AddCreatedBy(i)
	return efquo
}

// SetFormID sets the "form" edge to the EntForm entity by ID.
func (efquo *EntFormQuestionUpdateOne) SetFormID(id int) *EntFormQuestionUpdateOne {
	efquo.mutation.SetFormID(id)
	return efquo
}

// SetNillableFormID sets the "form" edge to the EntForm entity by ID if the given value is not nil.
func (efquo *EntFormQuestionUpdateOne) SetNillableFormID(id *int) *EntFormQuestionUpdateOne {
	if id != nil {
		efquo = efquo.SetFormID(*id)
	}
	return efquo
}

// SetForm sets the "form" edge to the EntForm entity.
func (efquo *EntFormQuestionUpdateOne) SetForm(e *EntForm) *EntFormQuestionUpdateOne {
	return efquo.SetFormID(e.ID)
}

// Mutation returns the EntFormQuestionMutation object of the builder.
func (efquo *EntFormQuestionUpdateOne) Mutation() *EntFormQuestionMutation {
	return efquo.mutation
}

// ClearForm clears the "form" edge to the EntForm entity.
func (efquo *EntFormQuestionUpdateOne) ClearForm() *EntFormQuestionUpdateOne {
	efquo.mutation.ClearForm()
	return efquo
}

// Where appends a list predicates to the EntFormQuestionUpdate builder.
func (efquo *EntFormQuestionUpdateOne) Where(ps ...predicate.EntFormQuestion) *EntFormQuestionUpdateOne {
	efquo.mutation.Where(ps...)
	return efquo
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (efquo *EntFormQuestionUpdateOne) Select(field string, fields ...string) *EntFormQuestionUpdateOne {
	efquo.fields = append([]string{field}, fields...)
	return efquo
}

// Save executes the query and returns the updated EntFormQuestion entity.
func (efquo *EntFormQuestionUpdateOne) Save(ctx context.Context) (*EntFormQuestion, error) {
	return withHooks(ctx, efquo.sqlSave, efquo.mutation, efquo.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (efquo *EntFormQuestionUpdateOne) SaveX(ctx context.Context) *EntFormQuestion {
	node, err := efquo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (efquo *EntFormQuestionUpdateOne) Exec(ctx context.Context) error {
	_, err := efquo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (efquo *EntFormQuestionUpdateOne) ExecX(ctx context.Context) {
	if err := efquo.Exec(ctx); err != nil {
		panic(err)
	}
}

// check runs all checks and user-defined validators on the builder.
func (efquo *EntFormQuestionUpdateOne) check() error {
	if v, ok := efquo.mutation.GetType(); ok {
		if err := entformquestion.TypeValidator(v); err != nil {
			return &ValidationError{Name: "type", err: fmt.Errorf(`ent: validator failed for field "EntFormQuestion.type": %w`, err)}
		}
	}
	return nil
}

func (efquo *EntFormQuestionUpdateOne) sqlSave(ctx context.Context) (_node *EntFormQuestion, err error) {
	if err := efquo.check(); err != nil {
		return _node, err
	}
	_spec := sqlgraph.NewUpdateSpec(entformquestion.Table, entformquestion.Columns, sqlgraph.NewFieldSpec(entformquestion.FieldID, field.TypeInt))
	id, ok := efquo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "EntFormQuestion.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := efquo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, entformquestion.FieldID)
		for _, f := range fields {
			if !entformquestion.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != entformquestion.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := efquo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := efquo.mutation.Title(); ok {
		_spec.SetField(entformquestion.FieldTitle, field.TypeString, value)
	}
	if value, ok := efquo.mutation.Label(); ok {
		_spec.SetField(entformquestion.FieldLabel, field.TypeString, value)
	}
	if value, ok := efquo.mutation.GetType(); ok {
		_spec.SetField(entformquestion.FieldType, field.TypeEnum, value)
	}
	if value, ok := efquo.mutation.Required(); ok {
		_spec.SetField(entformquestion.FieldRequired, field.TypeBool, value)
	}
	if value, ok := efquo.mutation.ExtraData(); ok {
		_spec.SetField(entformquestion.FieldExtraData, field.TypeString, value)
	}
	if efquo.mutation.ExtraDataCleared() {
		_spec.ClearField(entformquestion.FieldExtraData, field.TypeString)
	}
	if value, ok := efquo.mutation.CreatedAt(); ok {
		_spec.SetField(entformquestion.FieldCreatedAt, field.TypeTime, value)
	}
	if value, ok := efquo.mutation.UpdatedAt(); ok {
		_spec.SetField(entformquestion.FieldUpdatedAt, field.TypeTime, value)
	}
	if value, ok := efquo.mutation.CreatedBy(); ok {
		_spec.SetField(entformquestion.FieldCreatedBy, field.TypeInt, value)
	}
	if value, ok := efquo.mutation.AddedCreatedBy(); ok {
		_spec.AddField(entformquestion.FieldCreatedBy, field.TypeInt, value)
	}
	if efquo.mutation.FormCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   entformquestion.FormTable,
			Columns: []string{entformquestion.FormColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(entform.FieldID, field.TypeInt),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := efquo.mutation.FormIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   entformquestion.FormTable,
			Columns: []string{entformquestion.FormColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(entform.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_node = &EntFormQuestion{config: efquo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, efquo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{entformquestion.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	efquo.mutation.done = true
	return _node, nil
}
