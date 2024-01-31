# Table

## Admin Flow

- Create a form
- Rename a form
- Delete a form
- Copy a form

### FormSpec

> Form Specification describes metadata of a form.

- name: string
- cover: string
- description: string
- enabled: bool
- created_at: timestamp
- updated_at: timestamp
- created_by: int
- updated_by: int

### QuestionGroup

> QuestionGroup represents a set of questions.

- name: string
- created_at
- updated_at
- created_by
- updated_by

### Question

> Question represents a single question in our system.

- label: string
- type: enum {file, text, number, radio, checkbox, paragraph, dropdwon, date, time, linear_scale}
- required: bool
- created_at
- updated_at
- created_by
- updated_by

### Graph

1. FormSpec -> QuestionGroup: one to many
2. QuestionGroup -> Question: one to many

### Ent (ORM)
