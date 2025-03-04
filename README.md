# Chef Claude

A robust and modern project built with an API AI interaction, based on React. With this simple responsive site, you can easily get any recipe with the help of AI, with any 4 ingredients listed. The purpose of this project is to showcase a real time AI API call and fetch some real data. The showcased model in this project is the popular model Mistral. It is just one of the many capable models presented by the AI community at Hugging Face.

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Usage](#usage)
4. [Available Scripts](#available-scripts)
5. [Dependencies](#dependencies)
6. [Project Structure](#project-structure)

## Features

- Responsive design, compatible with tablet and mobile devices
- Clear and modular code structure
- AI API integration
- real time data fetching

## Getting Started

### Installation

Install the dependencies and run the project

- npm install
- npm start

Head over to https://vitejs.dev/ to learn more about configuring vite

## Usage

To start the development server, run:
**npm run dev**
The application will be accessible at **http://localhost:5173.**

## Available Scripts

Available Scripts
In the project directory, you can run:

- npm run dev : Starts the development server
- npm run build : Builds the application for production
- npx prettier --check : Checks prettier formatting
- npx prettier --write : Runs prettier and formats it

## Dependencies

- "@huggingface/inference": "^3.3.6",
- "react": "^19.0.0",
- "react-dom": "^19.0.0",
- "react-markdown": "^10.0.0"

## Project Structure

This project follows a modular structure for better organization and maintainability. Here's an overview of the folder structure:

- **api**: Global functions used for any kind of interactions with APIs.
- **assets**: Contains all images used thrughout the project.
- **components**: Components used in multiple places.
- **css**: Css (style) file exported into index.html.
- **node_modules**: stores all dependencies and libraries used throughout the project.
- **page**: Main folder the view (page) for the application.
- **public**: Stores all static assets that are not processed by the build system

Below is an example folder structure for the "components" view:

```
components/
└─ Header/
├── header-file/

```
