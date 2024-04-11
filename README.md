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
-----------------------------------------------------------------------------------------------------------

The Dynamic Form Builder is a versatile tool designed to streamline the creation of questionnaires, surveys, and other forms. With this application, users can effortlessly generate custom forms with various question types and logic-based visibility settings. Whether it's a simple feedback form or a complex survey with conditional branching, the Dynamic Form Builder provides the functionality needed to create engaging user experiences.

## Featrures

- **Flexible Form Creation**: Users can easily create custom forms tailored to their specific needs. The application supports various question types, including:

    - Short text
    - Paragraph
    - Multiple choice
    - Checkbox
    - Date
    - Linear scale

- **Conditional Visibility**: Users have the ability to control the visibility of questions based on responses to prerequisite questions. This feature allows for dynamic, personalized forms that adapt to the user's input.

- **Data Collection**: Once forms are created, users can seamlessly distribute them to their customers or respondents. Data submitted through the forms is collected and stored for analysis, providing valuable insights into customer feedback, preferences, and more.

- **Scripting Language**: The application implements a scripting language to support dynamic form behavior. This scripting language is divided into three main components:

    - Lexer: Responsible for breaking down the input script into tokens.
    - Parser: Parses the tokenized script and generates a syntax tree.
    - Evaluator: Executes the script and evaluates conditions to determine question visibility and other dynamic behaviors.


## Getting Started

To get started with the Dynamic Form Builder, follow these steps:

Installation: Clone the repository and install any necessary dependencies.

```
git clone https://github.com/your/repository.git
cd dynamic-form-builder
npm install
```

Usage: Run the application and start creating your dynamic forms.

```
npm start
```

## Key Componet Structure

The following diagram highlights critical components central to understanding the project's architecture and functionality. It focuses on key elements such as `FormSpecCreateEntryPoint`, `GeneralQuestion`, and their subdivisions into design and respond modes, along with specific question types like `DesignModeMultiChoiceQuestion` and D`ynamicResponseModeMultiChoiceQuestion`. 

![Component Structure Diagram](./docs/image/component_structure.png)

## Usage Demo