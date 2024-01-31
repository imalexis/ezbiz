# Ezbiz

Ezbiz is an application provides below modules:

1. Forms
2. Workflow

## Forms

Forms module provides below features:

1. Create a Form
2. Create a QuestionGroup
3. Create a Question inside a QuestionGroup
4. Create a QuestionResponse
5. Create a QuestionResponseValidator

### Form

- Form: A form has several question group, each question group has several questions.
- Form Response Action: The action to trigger when user submited the form response.
- Form Table: All questions in the form can maps to a corresponding Table

### Question

- Question Precondition: Question is enabled when the precondtion is satified
- Question
- Question Response Validator

### Action

Action is an workflow, which take the Form Response as the input,
For normal users, the actions are predefined:

- Send Email
- Send Whatsapp
- Send SMS

For developers: the actions is extensiable:
