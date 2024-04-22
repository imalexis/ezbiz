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
	"ezbiz.com/ent/forminstance"
	"ezbiz.com/ent/formspec"
	"ezbiz.com/ent/predicate"
	"ezbiz.com/ent/questiongroup"
	"ezbiz.com/ent/user"
)

// FormSpecUpdate is the builder for updating FormSpec entities.
type FormSpecUpdate struct {
	config
	hooks    []Hook
	mutation *FormSpecMutation
}

// Where appends a list predicates to the FormSpecUpdate builder.
func (fsu *FormSpecUpdate) Where(ps ...predicate.FormSpec) *FormSpecUpdate {
	fsu.mutation.Where(ps...)
	return fsu
}

// SetName sets the "name" field.
func (fsu *FormSpecUpdate) SetName(s string) *FormSpecUpdate {
	fsu.mutation.SetName(s)
	return fsu
}

// SetNillableName sets the "name" field if the given value is not nil.
func (fsu *FormSpecUpdate) SetNillableName(s *string) *FormSpecUpdate {
	if s != nil {
		fsu.SetName(*s)
	}
	return fsu
}

// SetCover sets the "cover" field.
func (fsu *FormSpecUpdate) SetCover(s string) *FormSpecUpdate {
	fsu.mutation.SetCover(s)
	return fsu
}

// SetNillableCover sets the "cover" field if the given value is not nil.
func (fsu *FormSpecUpdate) SetNillableCover(s *string) *FormSpecUpdate {
	if s != nil {
		fsu.SetCover(*s)
	}
	return fsu
}

// ClearCover clears the value of the "cover" field.
func (fsu *FormSpecUpdate) ClearCover() *FormSpecUpdate {
	fsu.mutation.ClearCover()
	return fsu
}

// SetDescription sets the "description" field.
func (fsu *FormSpecUpdate) SetDescription(s string) *FormSpecUpdate {
	fsu.mutation.SetDescription(s)
	return fsu
}

// SetNillableDescription sets the "description" field if the given value is not nil.
func (fsu *FormSpecUpdate) SetNillableDescription(s *string) *FormSpecUpdate {
	if s != nil {
		fsu.SetDescription(*s)
	}
	return fsu
}

// SetIsTemplate sets the "is_template" field.
func (fsu *FormSpecUpdate) SetIsTemplate(b bool) *FormSpecUpdate {
	fsu.mutation.SetIsTemplate(b)
	return fsu
}

// SetNillableIsTemplate sets the "is_template" field if the given value is not nil.
func (fsu *FormSpecUpdate) SetNillableIsTemplate(b *bool) *FormSpecUpdate {
	if b != nil {
		fsu.SetIsTemplate(*b)
	}
	return fsu
}

// SetEnabled sets the "enabled" field.
func (fsu *FormSpecUpdate) SetEnabled(b bool) *FormSpecUpdate {
	fsu.mutation.SetEnabled(b)
	return fsu
}

// SetNillableEnabled sets the "enabled" field if the given value is not nil.
func (fsu *FormSpecUpdate) SetNillableEnabled(b *bool) *FormSpecUpdate {
	if b != nil {
		fsu.SetEnabled(*b)
	}
	return fsu
}

// SetCreatedAt sets the "created_at" field.
func (fsu *FormSpecUpdate) SetCreatedAt(t time.Time) *FormSpecUpdate {
	fsu.mutation.SetCreatedAt(t)
	return fsu
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (fsu *FormSpecUpdate) SetNillableCreatedAt(t *time.Time) *FormSpecUpdate {
	if t != nil {
		fsu.SetCreatedAt(*t)
	}
	return fsu
}

// SetUpdatedAt sets the "updated_at" field.
func (fsu *FormSpecUpdate) SetUpdatedAt(t time.Time) *FormSpecUpdate {
	fsu.mutation.SetUpdatedAt(t)
	return fsu
}

// SetNillableUpdatedAt sets the "updated_at" field if the given value is not nil.
func (fsu *FormSpecUpdate) SetNillableUpdatedAt(t *time.Time) *FormSpecUpdate {
	if t != nil {
		fsu.SetUpdatedAt(*t)
	}
	return fsu
}

// SetCreatedBy sets the "created_by" field.
func (fsu *FormSpecUpdate) SetCreatedBy(i int) *FormSpecUpdate {
	fsu.mutation.ResetCreatedBy()
	fsu.mutation.SetCreatedBy(i)
	return fsu
}

// SetNillableCreatedBy sets the "created_by" field if the given value is not nil.
func (fsu *FormSpecUpdate) SetNillableCreatedBy(i *int) *FormSpecUpdate {
	if i != nil {
		fsu.SetCreatedBy(*i)
	}
	return fsu
}

// AddCreatedBy adds i to the "created_by" field.
func (fsu *FormSpecUpdate) AddCreatedBy(i int) *FormSpecUpdate {
	fsu.mutation.AddCreatedBy(i)
	return fsu
}

// AddQuestionGroupIDs adds the "question_groups" edge to the QuestionGroup entity by IDs.
func (fsu *FormSpecUpdate) AddQuestionGroupIDs(ids ...int) *FormSpecUpdate {
	fsu.mutation.AddQuestionGroupIDs(ids...)
	return fsu
}

// AddQuestionGroups adds the "question_groups" edges to the QuestionGroup entity.
func (fsu *FormSpecUpdate) AddQuestionGroups(q ...*QuestionGroup) *FormSpecUpdate {
	ids := make([]int, len(q))
	for i := range q {
		ids[i] = q[i].ID
	}
	return fsu.AddQuestionGroupIDs(ids...)
}

// AddFormInstanceIDs adds the "form_instances" edge to the FormInstance entity by IDs.
func (fsu *FormSpecUpdate) AddFormInstanceIDs(ids ...int) *FormSpecUpdate {
	fsu.mutation.AddFormInstanceIDs(ids...)
	return fsu
}

// AddFormInstances adds the "form_instances" edges to the FormInstance entity.
func (fsu *FormSpecUpdate) AddFormInstances(f ...*FormInstance) *FormSpecUpdate {
	ids := make([]int, len(f))
	for i := range f {
		ids[i] = f[i].ID
	}
	return fsu.AddFormInstanceIDs(ids...)
}

// SetOwnerID sets the "owner" edge to the User entity by ID.
func (fsu *FormSpecUpdate) SetOwnerID(id int) *FormSpecUpdate {
	fsu.mutation.SetOwnerID(id)
	return fsu
}

// SetNillableOwnerID sets the "owner" edge to the User entity by ID if the given value is not nil.
func (fsu *FormSpecUpdate) SetNillableOwnerID(id *int) *FormSpecUpdate {
	if id != nil {
		fsu = fsu.SetOwnerID(*id)
	}
	return fsu
}

// SetOwner sets the "owner" edge to the User entity.
func (fsu *FormSpecUpdate) SetOwner(u *User) *FormSpecUpdate {
	return fsu.SetOwnerID(u.ID)
}

// Mutation returns the FormSpecMutation object of the builder.
func (fsu *FormSpecUpdate) Mutation() *FormSpecMutation {
	return fsu.mutation
}

// ClearQuestionGroups clears all "question_groups" edges to the QuestionGroup entity.
func (fsu *FormSpecUpdate) ClearQuestionGroups() *FormSpecUpdate {
	fsu.mutation.ClearQuestionGroups()
	return fsu
}

// RemoveQuestionGroupIDs removes the "question_groups" edge to QuestionGroup entities by IDs.
func (fsu *FormSpecUpdate) RemoveQuestionGroupIDs(ids ...int) *FormSpecUpdate {
	fsu.mutation.RemoveQuestionGroupIDs(ids...)
	return fsu
}

// RemoveQuestionGroups removes "question_groups" edges to QuestionGroup entities.
func (fsu *FormSpecUpdate) RemoveQuestionGroups(q ...*QuestionGroup) *FormSpecUpdate {
	ids := make([]int, len(q))
	for i := range q {
		ids[i] = q[i].ID
	}
	return fsu.RemoveQuestionGroupIDs(ids...)
}

// ClearFormInstances clears all "form_instances" edges to the FormInstance entity.
func (fsu *FormSpecUpdate) ClearFormInstances() *FormSpecUpdate {
	fsu.mutation.ClearFormInstances()
	return fsu
}

// RemoveFormInstanceIDs removes the "form_instances" edge to FormInstance entities by IDs.
func (fsu *FormSpecUpdate) RemoveFormInstanceIDs(ids ...int) *FormSpecUpdate {
	fsu.mutation.RemoveFormInstanceIDs(ids...)
	return fsu
}

// RemoveFormInstances removes "form_instances" edges to FormInstance entities.
func (fsu *FormSpecUpdate) RemoveFormInstances(f ...*FormInstance) *FormSpecUpdate {
	ids := make([]int, len(f))
	for i := range f {
		ids[i] = f[i].ID
	}
	return fsu.RemoveFormInstanceIDs(ids...)
}

// ClearOwner clears the "owner" edge to the User entity.
func (fsu *FormSpecUpdate) ClearOwner() *FormSpecUpdate {
	fsu.mutation.ClearOwner()
	return fsu
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (fsu *FormSpecUpdate) Save(ctx context.Context) (int, error) {
	return withHooks(ctx, fsu.sqlSave, fsu.mutation, fsu.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (fsu *FormSpecUpdate) SaveX(ctx context.Context) int {
	affected, err := fsu.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (fsu *FormSpecUpdate) Exec(ctx context.Context) error {
	_, err := fsu.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (fsu *FormSpecUpdate) ExecX(ctx context.Context) {
	if err := fsu.Exec(ctx); err != nil {
		panic(err)
	}
}

func (fsu *FormSpecUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := sqlgraph.NewUpdateSpec(formspec.Table, formspec.Columns, sqlgraph.NewFieldSpec(formspec.FieldID, field.TypeInt))
	if ps := fsu.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := fsu.mutation.Name(); ok {
		_spec.SetField(formspec.FieldName, field.TypeString, value)
	}
	if value, ok := fsu.mutation.Cover(); ok {
		_spec.SetField(formspec.FieldCover, field.TypeString, value)
	}
	if fsu.mutation.CoverCleared() {
		_spec.ClearField(formspec.FieldCover, field.TypeString)
	}
	if value, ok := fsu.mutation.Description(); ok {
		_spec.SetField(formspec.FieldDescription, field.TypeString, value)
	}
	if value, ok := fsu.mutation.IsTemplate(); ok {
		_spec.SetField(formspec.FieldIsTemplate, field.TypeBool, value)
	}
	if value, ok := fsu.mutation.Enabled(); ok {
		_spec.SetField(formspec.FieldEnabled, field.TypeBool, value)
	}
	if value, ok := fsu.mutation.CreatedAt(); ok {
		_spec.SetField(formspec.FieldCreatedAt, field.TypeTime, value)
	}
	if value, ok := fsu.mutation.UpdatedAt(); ok {
		_spec.SetField(formspec.FieldUpdatedAt, field.TypeTime, value)
	}
	if value, ok := fsu.mutation.CreatedBy(); ok {
		_spec.SetField(formspec.FieldCreatedBy, field.TypeInt, value)
	}
	if value, ok := fsu.mutation.AddedCreatedBy(); ok {
		_spec.AddField(formspec.FieldCreatedBy, field.TypeInt, value)
	}
	if fsu.mutation.QuestionGroupsCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   formspec.QuestionGroupsTable,
			Columns: []string{formspec.QuestionGroupsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(questiongroup.FieldID, field.TypeInt),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := fsu.mutation.RemovedQuestionGroupsIDs(); len(nodes) > 0 && !fsu.mutation.QuestionGroupsCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   formspec.QuestionGroupsTable,
			Columns: []string{formspec.QuestionGroupsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(questiongroup.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := fsu.mutation.QuestionGroupsIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   formspec.QuestionGroupsTable,
			Columns: []string{formspec.QuestionGroupsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(questiongroup.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if fsu.mutation.FormInstancesCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   formspec.FormInstancesTable,
			Columns: []string{formspec.FormInstancesColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(forminstance.FieldID, field.TypeInt),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := fsu.mutation.RemovedFormInstancesIDs(); len(nodes) > 0 && !fsu.mutation.FormInstancesCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   formspec.FormInstancesTable,
			Columns: []string{formspec.FormInstancesColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(forminstance.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := fsu.mutation.FormInstancesIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   formspec.FormInstancesTable,
			Columns: []string{formspec.FormInstancesColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(forminstance.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if fsu.mutation.OwnerCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   formspec.OwnerTable,
			Columns: []string{formspec.OwnerColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(user.FieldID, field.TypeInt),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := fsu.mutation.OwnerIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   formspec.OwnerTable,
			Columns: []string{formspec.OwnerColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(user.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if n, err = sqlgraph.UpdateNodes(ctx, fsu.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{formspec.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return 0, err
	}
	fsu.mutation.done = true
	return n, nil
}

// FormSpecUpdateOne is the builder for updating a single FormSpec entity.
type FormSpecUpdateOne struct {
	config
	fields   []string
	hooks    []Hook
	mutation *FormSpecMutation
}

// SetName sets the "name" field.
func (fsuo *FormSpecUpdateOne) SetName(s string) *FormSpecUpdateOne {
	fsuo.mutation.SetName(s)
	return fsuo
}

// SetNillableName sets the "name" field if the given value is not nil.
func (fsuo *FormSpecUpdateOne) SetNillableName(s *string) *FormSpecUpdateOne {
	if s != nil {
		fsuo.SetName(*s)
	}
	return fsuo
}

// SetCover sets the "cover" field.
func (fsuo *FormSpecUpdateOne) SetCover(s string) *FormSpecUpdateOne {
	fsuo.mutation.SetCover(s)
	return fsuo
}

// SetNillableCover sets the "cover" field if the given value is not nil.
func (fsuo *FormSpecUpdateOne) SetNillableCover(s *string) *FormSpecUpdateOne {
	if s != nil {
		fsuo.SetCover(*s)
	}
	return fsuo
}

// ClearCover clears the value of the "cover" field.
func (fsuo *FormSpecUpdateOne) ClearCover() *FormSpecUpdateOne {
	fsuo.mutation.ClearCover()
	return fsuo
}

// SetDescription sets the "description" field.
func (fsuo *FormSpecUpdateOne) SetDescription(s string) *FormSpecUpdateOne {
	fsuo.mutation.SetDescription(s)
	return fsuo
}

// SetNillableDescription sets the "description" field if the given value is not nil.
func (fsuo *FormSpecUpdateOne) SetNillableDescription(s *string) *FormSpecUpdateOne {
	if s != nil {
		fsuo.SetDescription(*s)
	}
	return fsuo
}

// SetIsTemplate sets the "is_template" field.
func (fsuo *FormSpecUpdateOne) SetIsTemplate(b bool) *FormSpecUpdateOne {
	fsuo.mutation.SetIsTemplate(b)
	return fsuo
}

// SetNillableIsTemplate sets the "is_template" field if the given value is not nil.
func (fsuo *FormSpecUpdateOne) SetNillableIsTemplate(b *bool) *FormSpecUpdateOne {
	if b != nil {
		fsuo.SetIsTemplate(*b)
	}
	return fsuo
}

// SetEnabled sets the "enabled" field.
func (fsuo *FormSpecUpdateOne) SetEnabled(b bool) *FormSpecUpdateOne {
	fsuo.mutation.SetEnabled(b)
	return fsuo
}

// SetNillableEnabled sets the "enabled" field if the given value is not nil.
func (fsuo *FormSpecUpdateOne) SetNillableEnabled(b *bool) *FormSpecUpdateOne {
	if b != nil {
		fsuo.SetEnabled(*b)
	}
	return fsuo
}

// SetCreatedAt sets the "created_at" field.
func (fsuo *FormSpecUpdateOne) SetCreatedAt(t time.Time) *FormSpecUpdateOne {
	fsuo.mutation.SetCreatedAt(t)
	return fsuo
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (fsuo *FormSpecUpdateOne) SetNillableCreatedAt(t *time.Time) *FormSpecUpdateOne {
	if t != nil {
		fsuo.SetCreatedAt(*t)
	}
	return fsuo
}

// SetUpdatedAt sets the "updated_at" field.
func (fsuo *FormSpecUpdateOne) SetUpdatedAt(t time.Time) *FormSpecUpdateOne {
	fsuo.mutation.SetUpdatedAt(t)
	return fsuo
}

// SetNillableUpdatedAt sets the "updated_at" field if the given value is not nil.
func (fsuo *FormSpecUpdateOne) SetNillableUpdatedAt(t *time.Time) *FormSpecUpdateOne {
	if t != nil {
		fsuo.SetUpdatedAt(*t)
	}
	return fsuo
}

// SetCreatedBy sets the "created_by" field.
func (fsuo *FormSpecUpdateOne) SetCreatedBy(i int) *FormSpecUpdateOne {
	fsuo.mutation.ResetCreatedBy()
	fsuo.mutation.SetCreatedBy(i)
	return fsuo
}

// SetNillableCreatedBy sets the "created_by" field if the given value is not nil.
func (fsuo *FormSpecUpdateOne) SetNillableCreatedBy(i *int) *FormSpecUpdateOne {
	if i != nil {
		fsuo.SetCreatedBy(*i)
	}
	return fsuo
}

// AddCreatedBy adds i to the "created_by" field.
func (fsuo *FormSpecUpdateOne) AddCreatedBy(i int) *FormSpecUpdateOne {
	fsuo.mutation.AddCreatedBy(i)
	return fsuo
}

// AddQuestionGroupIDs adds the "question_groups" edge to the QuestionGroup entity by IDs.
func (fsuo *FormSpecUpdateOne) AddQuestionGroupIDs(ids ...int) *FormSpecUpdateOne {
	fsuo.mutation.AddQuestionGroupIDs(ids...)
	return fsuo
}

// AddQuestionGroups adds the "question_groups" edges to the QuestionGroup entity.
func (fsuo *FormSpecUpdateOne) AddQuestionGroups(q ...*QuestionGroup) *FormSpecUpdateOne {
	ids := make([]int, len(q))
	for i := range q {
		ids[i] = q[i].ID
	}
	return fsuo.AddQuestionGroupIDs(ids...)
}

// AddFormInstanceIDs adds the "form_instances" edge to the FormInstance entity by IDs.
func (fsuo *FormSpecUpdateOne) AddFormInstanceIDs(ids ...int) *FormSpecUpdateOne {
	fsuo.mutation.AddFormInstanceIDs(ids...)
	return fsuo
}

// AddFormInstances adds the "form_instances" edges to the FormInstance entity.
func (fsuo *FormSpecUpdateOne) AddFormInstances(f ...*FormInstance) *FormSpecUpdateOne {
	ids := make([]int, len(f))
	for i := range f {
		ids[i] = f[i].ID
	}
	return fsuo.AddFormInstanceIDs(ids...)
}

// SetOwnerID sets the "owner" edge to the User entity by ID.
func (fsuo *FormSpecUpdateOne) SetOwnerID(id int) *FormSpecUpdateOne {
	fsuo.mutation.SetOwnerID(id)
	return fsuo
}

// SetNillableOwnerID sets the "owner" edge to the User entity by ID if the given value is not nil.
func (fsuo *FormSpecUpdateOne) SetNillableOwnerID(id *int) *FormSpecUpdateOne {
	if id != nil {
		fsuo = fsuo.SetOwnerID(*id)
	}
	return fsuo
}

// SetOwner sets the "owner" edge to the User entity.
func (fsuo *FormSpecUpdateOne) SetOwner(u *User) *FormSpecUpdateOne {
	return fsuo.SetOwnerID(u.ID)
}

// Mutation returns the FormSpecMutation object of the builder.
func (fsuo *FormSpecUpdateOne) Mutation() *FormSpecMutation {
	return fsuo.mutation
}

// ClearQuestionGroups clears all "question_groups" edges to the QuestionGroup entity.
func (fsuo *FormSpecUpdateOne) ClearQuestionGroups() *FormSpecUpdateOne {
	fsuo.mutation.ClearQuestionGroups()
	return fsuo
}

// RemoveQuestionGroupIDs removes the "question_groups" edge to QuestionGroup entities by IDs.
func (fsuo *FormSpecUpdateOne) RemoveQuestionGroupIDs(ids ...int) *FormSpecUpdateOne {
	fsuo.mutation.RemoveQuestionGroupIDs(ids...)
	return fsuo
}

// RemoveQuestionGroups removes "question_groups" edges to QuestionGroup entities.
func (fsuo *FormSpecUpdateOne) RemoveQuestionGroups(q ...*QuestionGroup) *FormSpecUpdateOne {
	ids := make([]int, len(q))
	for i := range q {
		ids[i] = q[i].ID
	}
	return fsuo.RemoveQuestionGroupIDs(ids...)
}

// ClearFormInstances clears all "form_instances" edges to the FormInstance entity.
func (fsuo *FormSpecUpdateOne) ClearFormInstances() *FormSpecUpdateOne {
	fsuo.mutation.ClearFormInstances()
	return fsuo
}

// RemoveFormInstanceIDs removes the "form_instances" edge to FormInstance entities by IDs.
func (fsuo *FormSpecUpdateOne) RemoveFormInstanceIDs(ids ...int) *FormSpecUpdateOne {
	fsuo.mutation.RemoveFormInstanceIDs(ids...)
	return fsuo
}

// RemoveFormInstances removes "form_instances" edges to FormInstance entities.
func (fsuo *FormSpecUpdateOne) RemoveFormInstances(f ...*FormInstance) *FormSpecUpdateOne {
	ids := make([]int, len(f))
	for i := range f {
		ids[i] = f[i].ID
	}
	return fsuo.RemoveFormInstanceIDs(ids...)
}

// ClearOwner clears the "owner" edge to the User entity.
func (fsuo *FormSpecUpdateOne) ClearOwner() *FormSpecUpdateOne {
	fsuo.mutation.ClearOwner()
	return fsuo
}

// Where appends a list predicates to the FormSpecUpdate builder.
func (fsuo *FormSpecUpdateOne) Where(ps ...predicate.FormSpec) *FormSpecUpdateOne {
	fsuo.mutation.Where(ps...)
	return fsuo
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (fsuo *FormSpecUpdateOne) Select(field string, fields ...string) *FormSpecUpdateOne {
	fsuo.fields = append([]string{field}, fields...)
	return fsuo
}

// Save executes the query and returns the updated FormSpec entity.
func (fsuo *FormSpecUpdateOne) Save(ctx context.Context) (*FormSpec, error) {
	return withHooks(ctx, fsuo.sqlSave, fsuo.mutation, fsuo.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (fsuo *FormSpecUpdateOne) SaveX(ctx context.Context) *FormSpec {
	node, err := fsuo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (fsuo *FormSpecUpdateOne) Exec(ctx context.Context) error {
	_, err := fsuo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (fsuo *FormSpecUpdateOne) ExecX(ctx context.Context) {
	if err := fsuo.Exec(ctx); err != nil {
		panic(err)
	}
}

func (fsuo *FormSpecUpdateOne) sqlSave(ctx context.Context) (_node *FormSpec, err error) {
	_spec := sqlgraph.NewUpdateSpec(formspec.Table, formspec.Columns, sqlgraph.NewFieldSpec(formspec.FieldID, field.TypeInt))
	id, ok := fsuo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "FormSpec.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := fsuo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, formspec.FieldID)
		for _, f := range fields {
			if !formspec.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != formspec.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := fsuo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := fsuo.mutation.Name(); ok {
		_spec.SetField(formspec.FieldName, field.TypeString, value)
	}
	if value, ok := fsuo.mutation.Cover(); ok {
		_spec.SetField(formspec.FieldCover, field.TypeString, value)
	}
	if fsuo.mutation.CoverCleared() {
		_spec.ClearField(formspec.FieldCover, field.TypeString)
	}
	if value, ok := fsuo.mutation.Description(); ok {
		_spec.SetField(formspec.FieldDescription, field.TypeString, value)
	}
	if value, ok := fsuo.mutation.IsTemplate(); ok {
		_spec.SetField(formspec.FieldIsTemplate, field.TypeBool, value)
	}
	if value, ok := fsuo.mutation.Enabled(); ok {
		_spec.SetField(formspec.FieldEnabled, field.TypeBool, value)
	}
	if value, ok := fsuo.mutation.CreatedAt(); ok {
		_spec.SetField(formspec.FieldCreatedAt, field.TypeTime, value)
	}
	if value, ok := fsuo.mutation.UpdatedAt(); ok {
		_spec.SetField(formspec.FieldUpdatedAt, field.TypeTime, value)
	}
	if value, ok := fsuo.mutation.CreatedBy(); ok {
		_spec.SetField(formspec.FieldCreatedBy, field.TypeInt, value)
	}
	if value, ok := fsuo.mutation.AddedCreatedBy(); ok {
		_spec.AddField(formspec.FieldCreatedBy, field.TypeInt, value)
	}
	if fsuo.mutation.QuestionGroupsCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   formspec.QuestionGroupsTable,
			Columns: []string{formspec.QuestionGroupsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(questiongroup.FieldID, field.TypeInt),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := fsuo.mutation.RemovedQuestionGroupsIDs(); len(nodes) > 0 && !fsuo.mutation.QuestionGroupsCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   formspec.QuestionGroupsTable,
			Columns: []string{formspec.QuestionGroupsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(questiongroup.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := fsuo.mutation.QuestionGroupsIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   formspec.QuestionGroupsTable,
			Columns: []string{formspec.QuestionGroupsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(questiongroup.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if fsuo.mutation.FormInstancesCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   formspec.FormInstancesTable,
			Columns: []string{formspec.FormInstancesColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(forminstance.FieldID, field.TypeInt),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := fsuo.mutation.RemovedFormInstancesIDs(); len(nodes) > 0 && !fsuo.mutation.FormInstancesCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   formspec.FormInstancesTable,
			Columns: []string{formspec.FormInstancesColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(forminstance.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := fsuo.mutation.FormInstancesIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   formspec.FormInstancesTable,
			Columns: []string{formspec.FormInstancesColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(forminstance.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if fsuo.mutation.OwnerCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   formspec.OwnerTable,
			Columns: []string{formspec.OwnerColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(user.FieldID, field.TypeInt),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := fsuo.mutation.OwnerIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   formspec.OwnerTable,
			Columns: []string{formspec.OwnerColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(user.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_node = &FormSpec{config: fsuo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, fsuo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{formspec.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	fsuo.mutation.done = true
	return _node, nil
}
