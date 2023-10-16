# Dynamic Form App

This is a small application to create dynamic forms. It uses React, TypeScript, and Vite. It also uses some libraries like `react-hook-form`. The app uses the Context API from React to manage the internal state.

This app simulates an external HTTP request using the **Repository Pattern**. You can find the repository at `src/components/repositories/InMemoryRepository.tsx`. There, you'll find a `fetchData`async method, and a fake database structure with the form data. You can set up different form configurations.

This form allows you to validate fields by adding the correct message errors.

## Goal

Create a dynamic form using a frontend framework and TypeScript. Render it based on a provided configuration array and capture user input.

## Requirements:

Use hooks or equivalent, and a state management tool.
Configurations specify the type (e.g., "text", "number", "select"), label, and options (for select types).
Include a submit button. On submission, display the captured data.
Ensure a mobile-first, responsive design.
Employ TypeScript for type definitions and checks

## Form API
In order to create dynamic forms you should set the form data (located in the `InMemoryRepository.tsx` file, as following:

| Option Name | Description                           | Default Value |
|-------------|---------------------------------------|---------------|
| inputtype   | (required) The type of the form field | Enum ["inputtext", "select"] |
| type        | (required) The input type for the field | Enum ["text", "email", "password", "number"] |
| required    | (required) Defined if it's a required field | boolean |
| label       | (required) The field label            | string |
| errorMessage| (optional) The error message for required fields | string |
| options     | (optional) An array of options for select fields | string[] |

## Screenshots

https://github.com/darde/dynamic-form/assets/24977035/39f979a8-3d8f-44b7-a0cc-82ef43d3c461

## Running

Ensure you have both node and npm installed.
Clone this repo (or fork it), and then run the following commands in a terminal:

```bash
npm install
npm run dev
```
