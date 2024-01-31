// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"database/sql/driver"
	"fmt"
	"math"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"ezbiz.com/ent/formspec"
	"ezbiz.com/ent/predicate"
	"ezbiz.com/ent/question"
	"ezbiz.com/ent/questiongroup"
)

// QuestionGroupQuery is the builder for querying QuestionGroup entities.
type QuestionGroupQuery struct {
	config
	ctx               *QueryContext
	order             []questiongroup.OrderOption
	inters            []Interceptor
	predicates        []predicate.QuestionGroup
	withQuestion      *QuestionQuery
	withFormSpec      *FormSpecQuery
	withFKs           bool
	modifiers         []func(*sql.Selector)
	loadTotal         []func(context.Context, []*QuestionGroup) error
	withNamedQuestion map[string]*QuestionQuery
	// intermediate query (i.e. traversal path).
	sql  *sql.Selector
	path func(context.Context) (*sql.Selector, error)
}

// Where adds a new predicate for the QuestionGroupQuery builder.
func (qgq *QuestionGroupQuery) Where(ps ...predicate.QuestionGroup) *QuestionGroupQuery {
	qgq.predicates = append(qgq.predicates, ps...)
	return qgq
}

// Limit the number of records to be returned by this query.
func (qgq *QuestionGroupQuery) Limit(limit int) *QuestionGroupQuery {
	qgq.ctx.Limit = &limit
	return qgq
}

// Offset to start from.
func (qgq *QuestionGroupQuery) Offset(offset int) *QuestionGroupQuery {
	qgq.ctx.Offset = &offset
	return qgq
}

// Unique configures the query builder to filter duplicate records on query.
// By default, unique is set to true, and can be disabled using this method.
func (qgq *QuestionGroupQuery) Unique(unique bool) *QuestionGroupQuery {
	qgq.ctx.Unique = &unique
	return qgq
}

// Order specifies how the records should be ordered.
func (qgq *QuestionGroupQuery) Order(o ...questiongroup.OrderOption) *QuestionGroupQuery {
	qgq.order = append(qgq.order, o...)
	return qgq
}

// QueryQuestion chains the current query on the "question" edge.
func (qgq *QuestionGroupQuery) QueryQuestion() *QuestionQuery {
	query := (&QuestionClient{config: qgq.config}).Query()
	query.path = func(ctx context.Context) (fromU *sql.Selector, err error) {
		if err := qgq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		selector := qgq.sqlQuery(ctx)
		if err := selector.Err(); err != nil {
			return nil, err
		}
		step := sqlgraph.NewStep(
			sqlgraph.From(questiongroup.Table, questiongroup.FieldID, selector),
			sqlgraph.To(question.Table, question.FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, questiongroup.QuestionTable, questiongroup.QuestionColumn),
		)
		fromU = sqlgraph.SetNeighbors(qgq.driver.Dialect(), step)
		return fromU, nil
	}
	return query
}

// QueryFormSpec chains the current query on the "form_spec" edge.
func (qgq *QuestionGroupQuery) QueryFormSpec() *FormSpecQuery {
	query := (&FormSpecClient{config: qgq.config}).Query()
	query.path = func(ctx context.Context) (fromU *sql.Selector, err error) {
		if err := qgq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		selector := qgq.sqlQuery(ctx)
		if err := selector.Err(); err != nil {
			return nil, err
		}
		step := sqlgraph.NewStep(
			sqlgraph.From(questiongroup.Table, questiongroup.FieldID, selector),
			sqlgraph.To(formspec.Table, formspec.FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, questiongroup.FormSpecTable, questiongroup.FormSpecColumn),
		)
		fromU = sqlgraph.SetNeighbors(qgq.driver.Dialect(), step)
		return fromU, nil
	}
	return query
}

// First returns the first QuestionGroup entity from the query.
// Returns a *NotFoundError when no QuestionGroup was found.
func (qgq *QuestionGroupQuery) First(ctx context.Context) (*QuestionGroup, error) {
	nodes, err := qgq.Limit(1).All(setContextOp(ctx, qgq.ctx, "First"))
	if err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nil, &NotFoundError{questiongroup.Label}
	}
	return nodes[0], nil
}

// FirstX is like First, but panics if an error occurs.
func (qgq *QuestionGroupQuery) FirstX(ctx context.Context) *QuestionGroup {
	node, err := qgq.First(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return node
}

// FirstID returns the first QuestionGroup ID from the query.
// Returns a *NotFoundError when no QuestionGroup ID was found.
func (qgq *QuestionGroupQuery) FirstID(ctx context.Context) (id int, err error) {
	var ids []int
	if ids, err = qgq.Limit(1).IDs(setContextOp(ctx, qgq.ctx, "FirstID")); err != nil {
		return
	}
	if len(ids) == 0 {
		err = &NotFoundError{questiongroup.Label}
		return
	}
	return ids[0], nil
}

// FirstIDX is like FirstID, but panics if an error occurs.
func (qgq *QuestionGroupQuery) FirstIDX(ctx context.Context) int {
	id, err := qgq.FirstID(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return id
}

// Only returns a single QuestionGroup entity found by the query, ensuring it only returns one.
// Returns a *NotSingularError when more than one QuestionGroup entity is found.
// Returns a *NotFoundError when no QuestionGroup entities are found.
func (qgq *QuestionGroupQuery) Only(ctx context.Context) (*QuestionGroup, error) {
	nodes, err := qgq.Limit(2).All(setContextOp(ctx, qgq.ctx, "Only"))
	if err != nil {
		return nil, err
	}
	switch len(nodes) {
	case 1:
		return nodes[0], nil
	case 0:
		return nil, &NotFoundError{questiongroup.Label}
	default:
		return nil, &NotSingularError{questiongroup.Label}
	}
}

// OnlyX is like Only, but panics if an error occurs.
func (qgq *QuestionGroupQuery) OnlyX(ctx context.Context) *QuestionGroup {
	node, err := qgq.Only(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// OnlyID is like Only, but returns the only QuestionGroup ID in the query.
// Returns a *NotSingularError when more than one QuestionGroup ID is found.
// Returns a *NotFoundError when no entities are found.
func (qgq *QuestionGroupQuery) OnlyID(ctx context.Context) (id int, err error) {
	var ids []int
	if ids, err = qgq.Limit(2).IDs(setContextOp(ctx, qgq.ctx, "OnlyID")); err != nil {
		return
	}
	switch len(ids) {
	case 1:
		id = ids[0]
	case 0:
		err = &NotFoundError{questiongroup.Label}
	default:
		err = &NotSingularError{questiongroup.Label}
	}
	return
}

// OnlyIDX is like OnlyID, but panics if an error occurs.
func (qgq *QuestionGroupQuery) OnlyIDX(ctx context.Context) int {
	id, err := qgq.OnlyID(ctx)
	if err != nil {
		panic(err)
	}
	return id
}

// All executes the query and returns a list of QuestionGroups.
func (qgq *QuestionGroupQuery) All(ctx context.Context) ([]*QuestionGroup, error) {
	ctx = setContextOp(ctx, qgq.ctx, "All")
	if err := qgq.prepareQuery(ctx); err != nil {
		return nil, err
	}
	qr := querierAll[[]*QuestionGroup, *QuestionGroupQuery]()
	return withInterceptors[[]*QuestionGroup](ctx, qgq, qr, qgq.inters)
}

// AllX is like All, but panics if an error occurs.
func (qgq *QuestionGroupQuery) AllX(ctx context.Context) []*QuestionGroup {
	nodes, err := qgq.All(ctx)
	if err != nil {
		panic(err)
	}
	return nodes
}

// IDs executes the query and returns a list of QuestionGroup IDs.
func (qgq *QuestionGroupQuery) IDs(ctx context.Context) (ids []int, err error) {
	if qgq.ctx.Unique == nil && qgq.path != nil {
		qgq.Unique(true)
	}
	ctx = setContextOp(ctx, qgq.ctx, "IDs")
	if err = qgq.Select(questiongroup.FieldID).Scan(ctx, &ids); err != nil {
		return nil, err
	}
	return ids, nil
}

// IDsX is like IDs, but panics if an error occurs.
func (qgq *QuestionGroupQuery) IDsX(ctx context.Context) []int {
	ids, err := qgq.IDs(ctx)
	if err != nil {
		panic(err)
	}
	return ids
}

// Count returns the count of the given query.
func (qgq *QuestionGroupQuery) Count(ctx context.Context) (int, error) {
	ctx = setContextOp(ctx, qgq.ctx, "Count")
	if err := qgq.prepareQuery(ctx); err != nil {
		return 0, err
	}
	return withInterceptors[int](ctx, qgq, querierCount[*QuestionGroupQuery](), qgq.inters)
}

// CountX is like Count, but panics if an error occurs.
func (qgq *QuestionGroupQuery) CountX(ctx context.Context) int {
	count, err := qgq.Count(ctx)
	if err != nil {
		panic(err)
	}
	return count
}

// Exist returns true if the query has elements in the graph.
func (qgq *QuestionGroupQuery) Exist(ctx context.Context) (bool, error) {
	ctx = setContextOp(ctx, qgq.ctx, "Exist")
	switch _, err := qgq.FirstID(ctx); {
	case IsNotFound(err):
		return false, nil
	case err != nil:
		return false, fmt.Errorf("ent: check existence: %w", err)
	default:
		return true, nil
	}
}

// ExistX is like Exist, but panics if an error occurs.
func (qgq *QuestionGroupQuery) ExistX(ctx context.Context) bool {
	exist, err := qgq.Exist(ctx)
	if err != nil {
		panic(err)
	}
	return exist
}

// Clone returns a duplicate of the QuestionGroupQuery builder, including all associated steps. It can be
// used to prepare common query builders and use them differently after the clone is made.
func (qgq *QuestionGroupQuery) Clone() *QuestionGroupQuery {
	if qgq == nil {
		return nil
	}
	return &QuestionGroupQuery{
		config:       qgq.config,
		ctx:          qgq.ctx.Clone(),
		order:        append([]questiongroup.OrderOption{}, qgq.order...),
		inters:       append([]Interceptor{}, qgq.inters...),
		predicates:   append([]predicate.QuestionGroup{}, qgq.predicates...),
		withQuestion: qgq.withQuestion.Clone(),
		withFormSpec: qgq.withFormSpec.Clone(),
		// clone intermediate query.
		sql:  qgq.sql.Clone(),
		path: qgq.path,
	}
}

// WithQuestion tells the query-builder to eager-load the nodes that are connected to
// the "question" edge. The optional arguments are used to configure the query builder of the edge.
func (qgq *QuestionGroupQuery) WithQuestion(opts ...func(*QuestionQuery)) *QuestionGroupQuery {
	query := (&QuestionClient{config: qgq.config}).Query()
	for _, opt := range opts {
		opt(query)
	}
	qgq.withQuestion = query
	return qgq
}

// WithFormSpec tells the query-builder to eager-load the nodes that are connected to
// the "form_spec" edge. The optional arguments are used to configure the query builder of the edge.
func (qgq *QuestionGroupQuery) WithFormSpec(opts ...func(*FormSpecQuery)) *QuestionGroupQuery {
	query := (&FormSpecClient{config: qgq.config}).Query()
	for _, opt := range opts {
		opt(query)
	}
	qgq.withFormSpec = query
	return qgq
}

// GroupBy is used to group vertices by one or more fields/columns.
// It is often used with aggregate functions, like: count, max, mean, min, sum.
//
// Example:
//
//	var v []struct {
//		Name string `json:"name,omitempty"`
//		Count int `json:"count,omitempty"`
//	}
//
//	client.QuestionGroup.Query().
//		GroupBy(questiongroup.FieldName).
//		Aggregate(ent.Count()).
//		Scan(ctx, &v)
func (qgq *QuestionGroupQuery) GroupBy(field string, fields ...string) *QuestionGroupGroupBy {
	qgq.ctx.Fields = append([]string{field}, fields...)
	grbuild := &QuestionGroupGroupBy{build: qgq}
	grbuild.flds = &qgq.ctx.Fields
	grbuild.label = questiongroup.Label
	grbuild.scan = grbuild.Scan
	return grbuild
}

// Select allows the selection one or more fields/columns for the given query,
// instead of selecting all fields in the entity.
//
// Example:
//
//	var v []struct {
//		Name string `json:"name,omitempty"`
//	}
//
//	client.QuestionGroup.Query().
//		Select(questiongroup.FieldName).
//		Scan(ctx, &v)
func (qgq *QuestionGroupQuery) Select(fields ...string) *QuestionGroupSelect {
	qgq.ctx.Fields = append(qgq.ctx.Fields, fields...)
	sbuild := &QuestionGroupSelect{QuestionGroupQuery: qgq}
	sbuild.label = questiongroup.Label
	sbuild.flds, sbuild.scan = &qgq.ctx.Fields, sbuild.Scan
	return sbuild
}

// Aggregate returns a QuestionGroupSelect configured with the given aggregations.
func (qgq *QuestionGroupQuery) Aggregate(fns ...AggregateFunc) *QuestionGroupSelect {
	return qgq.Select().Aggregate(fns...)
}

func (qgq *QuestionGroupQuery) prepareQuery(ctx context.Context) error {
	for _, inter := range qgq.inters {
		if inter == nil {
			return fmt.Errorf("ent: uninitialized interceptor (forgotten import ent/runtime?)")
		}
		if trv, ok := inter.(Traverser); ok {
			if err := trv.Traverse(ctx, qgq); err != nil {
				return err
			}
		}
	}
	for _, f := range qgq.ctx.Fields {
		if !questiongroup.ValidColumn(f) {
			return &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
		}
	}
	if qgq.path != nil {
		prev, err := qgq.path(ctx)
		if err != nil {
			return err
		}
		qgq.sql = prev
	}
	return nil
}

func (qgq *QuestionGroupQuery) sqlAll(ctx context.Context, hooks ...queryHook) ([]*QuestionGroup, error) {
	var (
		nodes       = []*QuestionGroup{}
		withFKs     = qgq.withFKs
		_spec       = qgq.querySpec()
		loadedTypes = [2]bool{
			qgq.withQuestion != nil,
			qgq.withFormSpec != nil,
		}
	)
	if qgq.withFormSpec != nil {
		withFKs = true
	}
	if withFKs {
		_spec.Node.Columns = append(_spec.Node.Columns, questiongroup.ForeignKeys...)
	}
	_spec.ScanValues = func(columns []string) ([]any, error) {
		return (*QuestionGroup).scanValues(nil, columns)
	}
	_spec.Assign = func(columns []string, values []any) error {
		node := &QuestionGroup{config: qgq.config}
		nodes = append(nodes, node)
		node.Edges.loadedTypes = loadedTypes
		return node.assignValues(columns, values)
	}
	if len(qgq.modifiers) > 0 {
		_spec.Modifiers = qgq.modifiers
	}
	for i := range hooks {
		hooks[i](ctx, _spec)
	}
	if err := sqlgraph.QueryNodes(ctx, qgq.driver, _spec); err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nodes, nil
	}
	if query := qgq.withQuestion; query != nil {
		if err := qgq.loadQuestion(ctx, query, nodes,
			func(n *QuestionGroup) { n.Edges.Question = []*Question{} },
			func(n *QuestionGroup, e *Question) { n.Edges.Question = append(n.Edges.Question, e) }); err != nil {
			return nil, err
		}
	}
	if query := qgq.withFormSpec; query != nil {
		if err := qgq.loadFormSpec(ctx, query, nodes, nil,
			func(n *QuestionGroup, e *FormSpec) { n.Edges.FormSpec = e }); err != nil {
			return nil, err
		}
	}
	for name, query := range qgq.withNamedQuestion {
		if err := qgq.loadQuestion(ctx, query, nodes,
			func(n *QuestionGroup) { n.appendNamedQuestion(name) },
			func(n *QuestionGroup, e *Question) { n.appendNamedQuestion(name, e) }); err != nil {
			return nil, err
		}
	}
	for i := range qgq.loadTotal {
		if err := qgq.loadTotal[i](ctx, nodes); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

func (qgq *QuestionGroupQuery) loadQuestion(ctx context.Context, query *QuestionQuery, nodes []*QuestionGroup, init func(*QuestionGroup), assign func(*QuestionGroup, *Question)) error {
	fks := make([]driver.Value, 0, len(nodes))
	nodeids := make(map[int]*QuestionGroup)
	for i := range nodes {
		fks = append(fks, nodes[i].ID)
		nodeids[nodes[i].ID] = nodes[i]
		if init != nil {
			init(nodes[i])
		}
	}
	query.withFKs = true
	query.Where(predicate.Question(func(s *sql.Selector) {
		s.Where(sql.InValues(s.C(questiongroup.QuestionColumn), fks...))
	}))
	neighbors, err := query.All(ctx)
	if err != nil {
		return err
	}
	for _, n := range neighbors {
		fk := n.question_group_question
		if fk == nil {
			return fmt.Errorf(`foreign-key "question_group_question" is nil for node %v`, n.ID)
		}
		node, ok := nodeids[*fk]
		if !ok {
			return fmt.Errorf(`unexpected referenced foreign-key "question_group_question" returned %v for node %v`, *fk, n.ID)
		}
		assign(node, n)
	}
	return nil
}
func (qgq *QuestionGroupQuery) loadFormSpec(ctx context.Context, query *FormSpecQuery, nodes []*QuestionGroup, init func(*QuestionGroup), assign func(*QuestionGroup, *FormSpec)) error {
	ids := make([]int, 0, len(nodes))
	nodeids := make(map[int][]*QuestionGroup)
	for i := range nodes {
		if nodes[i].form_spec_question_groups == nil {
			continue
		}
		fk := *nodes[i].form_spec_question_groups
		if _, ok := nodeids[fk]; !ok {
			ids = append(ids, fk)
		}
		nodeids[fk] = append(nodeids[fk], nodes[i])
	}
	if len(ids) == 0 {
		return nil
	}
	query.Where(formspec.IDIn(ids...))
	neighbors, err := query.All(ctx)
	if err != nil {
		return err
	}
	for _, n := range neighbors {
		nodes, ok := nodeids[n.ID]
		if !ok {
			return fmt.Errorf(`unexpected foreign-key "form_spec_question_groups" returned %v`, n.ID)
		}
		for i := range nodes {
			assign(nodes[i], n)
		}
	}
	return nil
}

func (qgq *QuestionGroupQuery) sqlCount(ctx context.Context) (int, error) {
	_spec := qgq.querySpec()
	if len(qgq.modifiers) > 0 {
		_spec.Modifiers = qgq.modifiers
	}
	_spec.Node.Columns = qgq.ctx.Fields
	if len(qgq.ctx.Fields) > 0 {
		_spec.Unique = qgq.ctx.Unique != nil && *qgq.ctx.Unique
	}
	return sqlgraph.CountNodes(ctx, qgq.driver, _spec)
}

func (qgq *QuestionGroupQuery) querySpec() *sqlgraph.QuerySpec {
	_spec := sqlgraph.NewQuerySpec(questiongroup.Table, questiongroup.Columns, sqlgraph.NewFieldSpec(questiongroup.FieldID, field.TypeInt))
	_spec.From = qgq.sql
	if unique := qgq.ctx.Unique; unique != nil {
		_spec.Unique = *unique
	} else if qgq.path != nil {
		_spec.Unique = true
	}
	if fields := qgq.ctx.Fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, questiongroup.FieldID)
		for i := range fields {
			if fields[i] != questiongroup.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, fields[i])
			}
		}
	}
	if ps := qgq.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if limit := qgq.ctx.Limit; limit != nil {
		_spec.Limit = *limit
	}
	if offset := qgq.ctx.Offset; offset != nil {
		_spec.Offset = *offset
	}
	if ps := qgq.order; len(ps) > 0 {
		_spec.Order = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	return _spec
}

func (qgq *QuestionGroupQuery) sqlQuery(ctx context.Context) *sql.Selector {
	builder := sql.Dialect(qgq.driver.Dialect())
	t1 := builder.Table(questiongroup.Table)
	columns := qgq.ctx.Fields
	if len(columns) == 0 {
		columns = questiongroup.Columns
	}
	selector := builder.Select(t1.Columns(columns...)...).From(t1)
	if qgq.sql != nil {
		selector = qgq.sql
		selector.Select(selector.Columns(columns...)...)
	}
	if qgq.ctx.Unique != nil && *qgq.ctx.Unique {
		selector.Distinct()
	}
	for _, p := range qgq.predicates {
		p(selector)
	}
	for _, p := range qgq.order {
		p(selector)
	}
	if offset := qgq.ctx.Offset; offset != nil {
		// limit is mandatory for offset clause. We start
		// with default value, and override it below if needed.
		selector.Offset(*offset).Limit(math.MaxInt32)
	}
	if limit := qgq.ctx.Limit; limit != nil {
		selector.Limit(*limit)
	}
	return selector
}

// WithNamedQuestion tells the query-builder to eager-load the nodes that are connected to the "question"
// edge with the given name. The optional arguments are used to configure the query builder of the edge.
func (qgq *QuestionGroupQuery) WithNamedQuestion(name string, opts ...func(*QuestionQuery)) *QuestionGroupQuery {
	query := (&QuestionClient{config: qgq.config}).Query()
	for _, opt := range opts {
		opt(query)
	}
	if qgq.withNamedQuestion == nil {
		qgq.withNamedQuestion = make(map[string]*QuestionQuery)
	}
	qgq.withNamedQuestion[name] = query
	return qgq
}

// QuestionGroupGroupBy is the group-by builder for QuestionGroup entities.
type QuestionGroupGroupBy struct {
	selector
	build *QuestionGroupQuery
}

// Aggregate adds the given aggregation functions to the group-by query.
func (qggb *QuestionGroupGroupBy) Aggregate(fns ...AggregateFunc) *QuestionGroupGroupBy {
	qggb.fns = append(qggb.fns, fns...)
	return qggb
}

// Scan applies the selector query and scans the result into the given value.
func (qggb *QuestionGroupGroupBy) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, qggb.build.ctx, "GroupBy")
	if err := qggb.build.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*QuestionGroupQuery, *QuestionGroupGroupBy](ctx, qggb.build, qggb, qggb.build.inters, v)
}

func (qggb *QuestionGroupGroupBy) sqlScan(ctx context.Context, root *QuestionGroupQuery, v any) error {
	selector := root.sqlQuery(ctx).Select()
	aggregation := make([]string, 0, len(qggb.fns))
	for _, fn := range qggb.fns {
		aggregation = append(aggregation, fn(selector))
	}
	if len(selector.SelectedColumns()) == 0 {
		columns := make([]string, 0, len(*qggb.flds)+len(qggb.fns))
		for _, f := range *qggb.flds {
			columns = append(columns, selector.C(f))
		}
		columns = append(columns, aggregation...)
		selector.Select(columns...)
	}
	selector.GroupBy(selector.Columns(*qggb.flds...)...)
	if err := selector.Err(); err != nil {
		return err
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := qggb.build.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}

// QuestionGroupSelect is the builder for selecting fields of QuestionGroup entities.
type QuestionGroupSelect struct {
	*QuestionGroupQuery
	selector
}

// Aggregate adds the given aggregation functions to the selector query.
func (qgs *QuestionGroupSelect) Aggregate(fns ...AggregateFunc) *QuestionGroupSelect {
	qgs.fns = append(qgs.fns, fns...)
	return qgs
}

// Scan applies the selector query and scans the result into the given value.
func (qgs *QuestionGroupSelect) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, qgs.ctx, "Select")
	if err := qgs.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*QuestionGroupQuery, *QuestionGroupSelect](ctx, qgs.QuestionGroupQuery, qgs, qgs.inters, v)
}

func (qgs *QuestionGroupSelect) sqlScan(ctx context.Context, root *QuestionGroupQuery, v any) error {
	selector := root.sqlQuery(ctx)
	aggregation := make([]string, 0, len(qgs.fns))
	for _, fn := range qgs.fns {
		aggregation = append(aggregation, fn(selector))
	}
	switch n := len(*qgs.selector.flds); {
	case n == 0 && len(aggregation) > 0:
		selector.Select(aggregation...)
	case n != 0 && len(aggregation) > 0:
		selector.AppendSelect(aggregation...)
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := qgs.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}
