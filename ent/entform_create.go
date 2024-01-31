// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"time"

	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"ezbiz.com/ent/entform"
	"ezbiz.com/ent/entformquestion"
)

// EntFormCreate is the builder for creating a EntForm entity.
type EntFormCreate struct {
	config
	mutation *EntFormMutation
	hooks    []Hook
}

// SetName sets the "name" field.
func (efc *EntFormCreate) SetName(s string) *EntFormCreate {
	efc.mutation.SetName(s)
	return efc
}

// SetNillableName sets the "name" field if the given value is not nil.
func (efc *EntFormCreate) SetNillableName(s *string) *EntFormCreate {
	if s != nil {
		efc.SetName(*s)
	}
	return efc
}

// SetDescription sets the "description" field.
func (efc *EntFormCreate) SetDescription(s string) *EntFormCreate {
	efc.mutation.SetDescription(s)
	return efc
}

// SetNillableDescription sets the "description" field if the given value is not nil.
func (efc *EntFormCreate) SetNillableDescription(s *string) *EntFormCreate {
	if s != nil {
		efc.SetDescription(*s)
	}
	return efc
}

// SetEnabled sets the "enabled" field.
func (efc *EntFormCreate) SetEnabled(b bool) *EntFormCreate {
	efc.mutation.SetEnabled(b)
	return efc
}

// SetNillableEnabled sets the "enabled" field if the given value is not nil.
func (efc *EntFormCreate) SetNillableEnabled(b *bool) *EntFormCreate {
	if b != nil {
		efc.SetEnabled(*b)
	}
	return efc
}

// SetCreatedAt sets the "created_at" field.
func (efc *EntFormCreate) SetCreatedAt(t time.Time) *EntFormCreate {
	efc.mutation.SetCreatedAt(t)
	return efc
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (efc *EntFormCreate) SetNillableCreatedAt(t *time.Time) *EntFormCreate {
	if t != nil {
		efc.SetCreatedAt(*t)
	}
	return efc
}

// SetUpdatedAt sets the "updated_at" field.
func (efc *EntFormCreate) SetUpdatedAt(t time.Time) *EntFormCreate {
	efc.mutation.SetUpdatedAt(t)
	return efc
}

// SetNillableUpdatedAt sets the "updated_at" field if the given value is not nil.
func (efc *EntFormCreate) SetNillableUpdatedAt(t *time.Time) *EntFormCreate {
	if t != nil {
		efc.SetUpdatedAt(*t)
	}
	return efc
}

// SetCreatedBy sets the "created_by" field.
func (efc *EntFormCreate) SetCreatedBy(i int) *EntFormCreate {
	efc.mutation.SetCreatedBy(i)
	return efc
}

// AddQuestionIDs adds the "questions" edge to the EntFormQuestion entity by IDs.
func (efc *EntFormCreate) AddQuestionIDs(ids ...int) *EntFormCreate {
	efc.mutation.AddQuestionIDs(ids...)
	return efc
}

// AddQuestions adds the "questions" edges to the EntFormQuestion entity.
func (efc *EntFormCreate) AddQuestions(e ...*EntFormQuestion) *EntFormCreate {
	ids := make([]int, len(e))
	for i := range e {
		ids[i] = e[i].ID
	}
	return efc.AddQuestionIDs(ids...)
}

// Mutation returns the EntFormMutation object of the builder.
func (efc *EntFormCreate) Mutation() *EntFormMutation {
	return efc.mutation
}

// Save creates the EntForm in the database.
func (efc *EntFormCreate) Save(ctx context.Context) (*EntForm, error) {
	efc.defaults()
	return withHooks(ctx, efc.sqlSave, efc.mutation, efc.hooks)
}

// SaveX calls Save and panics if Save returns an error.
func (efc *EntFormCreate) SaveX(ctx context.Context) *EntForm {
	v, err := efc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (efc *EntFormCreate) Exec(ctx context.Context) error {
	_, err := efc.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (efc *EntFormCreate) ExecX(ctx context.Context) {
	if err := efc.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (efc *EntFormCreate) defaults() {
	if _, ok := efc.mutation.Name(); !ok {
		v := entform.DefaultName
		efc.mutation.SetName(v)
	}
	if _, ok := efc.mutation.Enabled(); !ok {
		v := entform.DefaultEnabled
		efc.mutation.SetEnabled(v)
	}
	if _, ok := efc.mutation.CreatedAt(); !ok {
		v := entform.DefaultCreatedAt()
		efc.mutation.SetCreatedAt(v)
	}
	if _, ok := efc.mutation.UpdatedAt(); !ok {
		v := entform.DefaultUpdatedAt()
		efc.mutation.SetUpdatedAt(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (efc *EntFormCreate) check() error {
	if _, ok := efc.mutation.Name(); !ok {
		return &ValidationError{Name: "name", err: errors.New(`ent: missing required field "EntForm.name"`)}
	}
	if _, ok := efc.mutation.Enabled(); !ok {
		return &ValidationError{Name: "enabled", err: errors.New(`ent: missing required field "EntForm.enabled"`)}
	}
	if _, ok := efc.mutation.CreatedAt(); !ok {
		return &ValidationError{Name: "created_at", err: errors.New(`ent: missing required field "EntForm.created_at"`)}
	}
	if _, ok := efc.mutation.UpdatedAt(); !ok {
		return &ValidationError{Name: "updated_at", err: errors.New(`ent: missing required field "EntForm.updated_at"`)}
	}
	if _, ok := efc.mutation.CreatedBy(); !ok {
		return &ValidationError{Name: "created_by", err: errors.New(`ent: missing required field "EntForm.created_by"`)}
	}
	return nil
}

func (efc *EntFormCreate) sqlSave(ctx context.Context) (*EntForm, error) {
	if err := efc.check(); err != nil {
		return nil, err
	}
	_node, _spec := efc.createSpec()
	if err := sqlgraph.CreateNode(ctx, efc.driver, _spec); err != nil {
		if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	id := _spec.ID.Value.(int64)
	_node.ID = int(id)
	efc.mutation.id = &_node.ID
	efc.mutation.done = true
	return _node, nil
}

func (efc *EntFormCreate) createSpec() (*EntForm, *sqlgraph.CreateSpec) {
	var (
		_node = &EntForm{config: efc.config}
		_spec = sqlgraph.NewCreateSpec(entform.Table, sqlgraph.NewFieldSpec(entform.FieldID, field.TypeInt))
	)
	if value, ok := efc.mutation.Name(); ok {
		_spec.SetField(entform.FieldName, field.TypeString, value)
		_node.Name = value
	}
	if value, ok := efc.mutation.Description(); ok {
		_spec.SetField(entform.FieldDescription, field.TypeString, value)
		_node.Description = value
	}
	if value, ok := efc.mutation.Enabled(); ok {
		_spec.SetField(entform.FieldEnabled, field.TypeBool, value)
		_node.Enabled = value
	}
	if value, ok := efc.mutation.CreatedAt(); ok {
		_spec.SetField(entform.FieldCreatedAt, field.TypeTime, value)
		_node.CreatedAt = value
	}
	if value, ok := efc.mutation.UpdatedAt(); ok {
		_spec.SetField(entform.FieldUpdatedAt, field.TypeTime, value)
		_node.UpdatedAt = value
	}
	if value, ok := efc.mutation.CreatedBy(); ok {
		_spec.SetField(entform.FieldCreatedBy, field.TypeInt, value)
		_node.CreatedBy = value
	}
	if nodes := efc.mutation.QuestionsIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   entform.QuestionsTable,
			Columns: []string{entform.QuestionsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(entformquestion.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges = append(_spec.Edges, edge)
	}
	return _node, _spec
}

// EntFormCreateBulk is the builder for creating many EntForm entities in bulk.
type EntFormCreateBulk struct {
	config
	err      error
	builders []*EntFormCreate
}

// Save creates the EntForm entities in the database.
func (efcb *EntFormCreateBulk) Save(ctx context.Context) ([]*EntForm, error) {
	if efcb.err != nil {
		return nil, efcb.err
	}
	specs := make([]*sqlgraph.CreateSpec, len(efcb.builders))
	nodes := make([]*EntForm, len(efcb.builders))
	mutators := make([]Mutator, len(efcb.builders))
	for i := range efcb.builders {
		func(i int, root context.Context) {
			builder := efcb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*EntFormMutation)
				if !ok {
					return nil, fmt.Errorf("unexpected mutation type %T", m)
				}
				if err := builder.check(); err != nil {
					return nil, err
				}
				builder.mutation = mutation
				var err error
				nodes[i], specs[i] = builder.createSpec()
				if i < len(mutators)-1 {
					_, err = mutators[i+1].Mutate(root, efcb.builders[i+1].mutation)
				} else {
					spec := &sqlgraph.BatchCreateSpec{Nodes: specs}
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, efcb.driver, spec); err != nil {
						if sqlgraph.IsConstraintError(err) {
							err = &ConstraintError{msg: err.Error(), wrap: err}
						}
					}
				}
				if err != nil {
					return nil, err
				}
				mutation.id = &nodes[i].ID
				if specs[i].ID.Value != nil {
					id := specs[i].ID.Value.(int64)
					nodes[i].ID = int(id)
				}
				mutation.done = true
				return nodes[i], nil
			})
			for i := len(builder.hooks) - 1; i >= 0; i-- {
				mut = builder.hooks[i](mut)
			}
			mutators[i] = mut
		}(i, ctx)
	}
	if len(mutators) > 0 {
		if _, err := mutators[0].Mutate(ctx, efcb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX is like Save, but panics if an error occurs.
func (efcb *EntFormCreateBulk) SaveX(ctx context.Context) []*EntForm {
	v, err := efcb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (efcb *EntFormCreateBulk) Exec(ctx context.Context) error {
	_, err := efcb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (efcb *EntFormCreateBulk) ExecX(ctx context.Context) {
	if err := efcb.Exec(ctx); err != nil {
		panic(err)
	}
}
