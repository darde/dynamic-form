# Dynamic Form App

This is a small application to create dynamic forms. It uses React, TypeScript, and Vite.

This app simulates an external HTTP request using the **Repository Pattern**. You can find the repository at `src/components/repositories/InMemoryRepository.tsx`. There, you'll find a `fetchData`async method, and a fake database structure with the form data. You can setup different form configurations.

This form allows you to validate fields by adding the correct message errors.

## Goal

Create a dynamic form using a frontend framework and TypeScript. Render it based on a provided configuration array and capture user input.

## Requirements:

Use hooks or equivalent, and a state management tool.
Configurations specify the type (e.g., "text", "number", "select"), label, and options (for select types).
Include a submit button. On submission, display the captured data.
Ensure a mobile-first, responsive design.
Employ TypeScript for type definitions and checks

## Running

Ensure you have both node and npm installed.
Clone this repo (or fork it), and then run the following commands in a terminal:

```bash
npm install
npm run dev
```
