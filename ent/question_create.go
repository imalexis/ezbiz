// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"time"

	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"ezbiz.com/ent/question"
	"ezbiz.com/ent/questiongroup"
	"ezbiz.com/ent/questionresponse"
)

// QuestionCreate is the builder for creating a Question entity.
type QuestionCreate struct {
	config
	mutation *QuestionMutation
	hooks    []Hook
}

// SetLabel sets the "label" field.
func (qc *QuestionCreate) SetLabel(s string) *QuestionCreate {
	qc.mutation.SetLabel(s)
	return qc
}

// SetTitle sets the "title" field.
func (qc *QuestionCreate) SetTitle(s string) *QuestionCreate {
	qc.mutation.SetTitle(s)
	return qc
}

// SetNillableTitle sets the "title" field if the given value is not nil.
func (qc *QuestionCreate) SetNillableTitle(s *string) *QuestionCreate {
	if s != nil {
		qc.SetTitle(*s)
	}
	return qc
}

// SetType sets the "type" field.
func (qc *QuestionCreate) SetType(q question.Type) *QuestionCreate {
	qc.mutation.SetType(q)
	return qc
}

// SetRequired sets the "required" field.
func (qc *QuestionCreate) SetRequired(b bool) *QuestionCreate {
	qc.mutation.SetRequired(b)
	return qc
}

// SetExtraData sets the "extra_data" field.
func (qc *QuestionCreate) SetExtraData(s string) *QuestionCreate {
	qc.mutation.SetExtraData(s)
	return qc
}

// SetNillableExtraData sets the "extra_data" field if the given value is not nil.
func (qc *QuestionCreate) SetNillableExtraData(s *string) *QuestionCreate {
	if s != nil {
		qc.SetExtraData(*s)
	}
	return qc
}

// SetCreatedAt sets the "created_at" field.
func (qc *QuestionCreate) SetCreatedAt(t time.Time) *QuestionCreate {
	qc.mutation.SetCreatedAt(t)
	return qc
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (qc *QuestionCreate) SetNillableCreatedAt(t *time.Time) *QuestionCreate {
	if t != nil {
		qc.SetCreatedAt(*t)
	}
	return qc
}

// SetUpdatedAt sets the "updated_at" field.
func (qc *QuestionCreate) SetUpdatedAt(t time.Time) *QuestionCreate {
	qc.mutation.SetUpdatedAt(t)
	return qc
}

// SetNillableUpdatedAt sets the "updated_at" field if the given value is not nil.
func (qc *QuestionCreate) SetNillableUpdatedAt(t *time.Time) *QuestionCreate {
	if t != nil {
		qc.SetUpdatedAt(*t)
	}
	return qc
}

// SetCreatedBy sets the "created_by" field.
func (qc *QuestionCreate) SetCreatedBy(i int) *QuestionCreate {
	qc.mutation.SetCreatedBy(i)
	return qc
}

// SetFromQuestionGroupID sets the "from_question_group" edge to the QuestionGroup entity by ID.
func (qc *QuestionCreate) SetFromQuestionGroupID(id int) *QuestionCreate {
	qc.mutation.SetFromQuestionGroupID(id)
	return qc
}

// SetNillableFromQuestionGroupID sets the "from_question_group" edge to the QuestionGroup entity by ID if the given value is not nil.
func (qc *QuestionCreate) SetNillableFromQuestionGroupID(id *int) *QuestionCreate {
	if id != nil {
		qc = qc.SetFromQuestionGroupID(*id)
	}
	return qc
}

// SetFromQuestionGroup sets the "from_question_group" edge to the QuestionGroup entity.
func (qc *QuestionCreate) SetFromQuestionGroup(q *QuestionGroup) *QuestionCreate {
	return qc.SetFromQuestionGroupID(q.ID)
}

// AddQuestionResponseIDs adds the "question_response" edge to the QuestionResponse entity by IDs.
func (qc *QuestionCreate) AddQuestionResponseIDs(ids ...int) *QuestionCreate {
	qc.mutation.AddQuestionResponseIDs(ids...)
	return qc
}

// AddQuestionResponse adds the "question_response" edges to the QuestionResponse entity.
func (qc *QuestionCreate) AddQuestionResponse(q ...*QuestionResponse) *QuestionCreate {
	ids := make([]int, len(q))
	for i := range q {
		ids[i] = q[i].ID
	}
	return qc.AddQuestionResponseIDs(ids...)
}

// Mutation returns the QuestionMutation object of the builder.
func (qc *QuestionCreate) Mutation() *QuestionMutation {
	return qc.mutation
}

// Save creates the Question in the database.
func (qc *QuestionCreate) Save(ctx context.Context) (*Question, error) {
	qc.defaults()
	return withHooks(ctx, qc.sqlSave, qc.mutation, qc.hooks)
}

// SaveX calls Save and panics if Save returns an error.
func (qc *QuestionCreate) SaveX(ctx context.Context) *Question {
	v, err := qc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (qc *QuestionCreate) Exec(ctx context.Context) error {
	_, err := qc.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (qc *QuestionCreate) ExecX(ctx context.Context) {
	if err := qc.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (qc *QuestionCreate) defaults() {
	if _, ok := qc.mutation.Title(); !ok {
		v := question.DefaultTitle
		qc.mutation.SetTitle(v)
	}
	if _, ok := qc.mutation.ExtraData(); !ok {
		v := question.DefaultExtraData
		qc.mutation.SetExtraData(v)
	}
	if _, ok := qc.mutation.CreatedAt(); !ok {
		v := question.DefaultCreatedAt()
		qc.mutation.SetCreatedAt(v)
	}
	if _, ok := qc.mutation.UpdatedAt(); !ok {
		v := question.DefaultUpdatedAt()
		qc.mutation.SetUpdatedAt(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (qc *QuestionCreate) check() error {
	if _, ok := qc.mutation.Label(); !ok {
		return &ValidationError{Name: "label", err: errors.New(`ent: missing required field "Question.label"`)}
	}
	if _, ok := qc.mutation.Title(); !ok {
		return &ValidationError{Name: "title", err: errors.New(`ent: missing required field "Question.title"`)}
	}
	if _, ok := qc.mutation.GetType(); !ok {
		return &ValidationError{Name: "type", err: errors.New(`ent: missing required field "Question.type"`)}
	}
	if v, ok := qc.mutation.GetType(); ok {
		if err := question.TypeValidator(v); err != nil {
			return &ValidationError{Name: "type", err: fmt.Errorf(`ent: validator failed for field "Question.type": %w`, err)}
		}
	}
	if _, ok := qc.mutation.Required(); !ok {
		return &ValidationError{Name: "required", err: errors.New(`ent: missing required field "Question.required"`)}
	}
	if _, ok := qc.mutation.ExtraData(); !ok {
		return &ValidationError{Name: "extra_data", err: errors.New(`ent: missing required field "Question.extra_data"`)}
	}
	if _, ok := qc.mutation.CreatedAt(); !ok {
		return &ValidationError{Name: "created_at", err: errors.New(`ent: missing required field "Question.created_at"`)}
	}
	if _, ok := qc.mutation.UpdatedAt(); !ok {
		return &ValidationError{Name: "updated_at", err: errors.New(`ent: missing required field "Question.updated_at"`)}
	}
	if _, ok := qc.mutation.CreatedBy(); !ok {
		return &ValidationError{Name: "created_by", err: errors.New(`ent: missing required field "Question.created_by"`)}
	}
	return nil
}

func (qc *QuestionCreate) sqlSave(ctx context.Context) (*Question, error) {
	if err := qc.check(); err != nil {
		return nil, err
	}
	_node, _spec := qc.createSpec()
	if err := sqlgraph.CreateNode(ctx, qc.driver, _spec); err != nil {
		if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	id := _spec.ID.Value.(int64)
	_node.ID = int(id)
	qc.mutation.id = &_node.ID
	qc.mutation.done = true
	return _node, nil
}

func (qc *QuestionCreate) createSpec() (*Question, *sqlgraph.CreateSpec) {
	var (
		_node = &Question{config: qc.config}
		_spec = sqlgraph.NewCreateSpec(question.Table, sqlgraph.NewFieldSpec(question.FieldID, field.TypeInt))
	)
	if value, ok := qc.mutation.Label(); ok {
		_spec.SetField(question.FieldLabel, field.TypeString, value)
		_node.Label = value
	}
	if value, ok := qc.mutation.Title(); ok {
		_spec.SetField(question.FieldTitle, field.TypeString, value)
		_node.Title = value
	}
	if value, ok := qc.mutation.GetType(); ok {
		_spec.SetField(question.FieldType, field.TypeEnum, value)
		_node.Type = value
	}
	if value, ok := qc.mutation.Required(); ok {
		_spec.SetField(question.FieldRequired, field.TypeBool, value)
		_node.Required = value
	}
	if value, ok := qc.mutation.ExtraData(); ok {
		_spec.SetField(question.FieldExtraData, field.TypeString, value)
		_node.ExtraData = value
	}
	if value, ok := qc.mutation.CreatedAt(); ok {
		_spec.SetField(question.FieldCreatedAt, field.TypeTime, value)
		_node.CreatedAt = value
	}
	if value, ok := qc.mutation.UpdatedAt(); ok {
		_spec.SetField(question.FieldUpdatedAt, field.TypeTime, value)
		_node.UpdatedAt = value
	}
	if value, ok := qc.mutation.CreatedBy(); ok {
		_spec.SetField(question.FieldCreatedBy, field.TypeInt, value)
		_node.CreatedBy = value
	}
	if nodes := qc.mutation.FromQuestionGroupIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   question.FromQuestionGroupTable,
			Columns: []string{question.FromQuestionGroupColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(questiongroup.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_node.question_group_question = &nodes[0]
		_spec.Edges = append(_spec.Edges, edge)
	}
	if nodes := qc.mutation.QuestionResponseIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   question.QuestionResponseTable,
			Columns: []string{question.QuestionResponseColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(questionresponse.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges = append(_spec.Edges, edge)
	}
	return _node, _spec
}

// QuestionCreateBulk is the builder for creating many Question entities in bulk.
type QuestionCreateBulk struct {
	config
	err      error
	builders []*QuestionCreate
}

// Save creates the Question entities in the database.
func (qcb *QuestionCreateBulk) Save(ctx context.Context) ([]*Question, error) {
	if qcb.err != nil {
		return nil, qcb.err
	}
	specs := make([]*sqlgraph.CreateSpec, len(qcb.builders))
	nodes := make([]*Question, len(qcb.builders))
	mutators := make([]Mutator, len(qcb.builders))
	for i := range qcb.builders {
		func(i int, root context.Context) {
			builder := qcb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*QuestionMutation)
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
					_, err = mutators[i+1].Mutate(root, qcb.builders[i+1].mutation)
				} else {
					spec := &sqlgraph.BatchCreateSpec{Nodes: specs}
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, qcb.driver, spec); err != nil {
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
		if _, err := mutators[0].Mutate(ctx, qcb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX is like Save, but panics if an error occurs.
func (qcb *QuestionCreateBulk) SaveX(ctx context.Context) []*Question {
	v, err := qcb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (qcb *QuestionCreateBulk) Exec(ctx context.Context) error {
	_, err := qcb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (qcb *QuestionCreateBulk) ExecX(ctx context.Context) {
	if err := qcb.Exec(ctx); err != nil {
		panic(err)
	}
}
