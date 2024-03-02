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

- Question Precondition: Question is enabled when the precondition is satified
- Question
- Question Response Validator

#### About General Question
All instances related to Question utilize the `<GeneralQuestion />` component.

In design mode: `<GeneralQuestion mode="design" generalFragmentKey={...} />`.
In response mode: `<GeneralQuestion mode="response" fragmentKey={...} />`.
Within the GeneralQuestion component, the behavior is determined based on the provided parameters.
Underlying components, such as ShortTextQuestion, have corresponding versions like DesignModeShortTextQuestion.

### Action

Action is an workflow, which take the Form Response as the input,
For normal users, the actions are predefined:

- Send Email
- Send Whatsapp
- Send SMS

For developers: the actions is extensiable:

