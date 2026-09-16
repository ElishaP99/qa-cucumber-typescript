# QA Automation — Cucumber + TypeScript

A Behaviour-Driven Development (BDD) automation framework built with Cucumber.js and TypeScript.

## About

This project is part of my QA Automation portfolio and focuses on building a maintainable BDD automation framework.

The project demonstrates the use of Cucumber, Gherkin and TypeScript to create structured and readable automated tests.

## Technologies

- TypeScript
- Cucumber.js
- Gherkin
- Node.js
- npm
- Git
- GitHub
- Visual Studio Code

## Project Structure

qa-cucumber-typescript/
├── src/
│   ├── features/
│   │   └── login.feature
│   └── step-definitions/
│       └── login.steps.ts
├── .gitignore
├── cucumber.js
├── package.json
├── package-lock.json
└── tsconfig.json

## Current Test Coverage

### Login

The current framework contains a basic successful login scenario demonstrating:

- Gherkin feature definition
- Cucumber scenario
- TypeScript step definitions

## Running the Tests

Install the project dependencies:

npm install

Run the Cucumber test suite:

npx cucumber-js

## Development Roadmap

The framework will be expanded to include:

- Additional login scenarios
- Negative test cases
- Page Object Model
- Test hooks
- Test data management
- Test reporting
- GitHub Actions
- Additional feature coverage

## Portfolio

This repository is part of my QA Automation portfolio and documents my development of automated testing skills using TypeScript and Cucumber.
