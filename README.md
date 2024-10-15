# DAT API Test Suite

---

## Introduction

Welcome to the **DAT API Test Suite**! This project is designed to **automate the testing** of the (https://reqres.in/) API endpoints using **Node.js**, **Jest**, and **Supertest**. By implementing this test suite, you can ensure that the API behaves as expected, handling both typical and edge-case scenarios effectively.

### Features

- **Modular Test Structure**: Organized test files for each API endpoint.
- **Comprehensive Coverage**: Tests cover both successful operations and error handling.
- **Reusable Configuration**: Centralized base URL configuration for easy maintenance.
- **Automated Testing**: Easily run tests and generate coverage reports.

---

### Folder and File Descriptions

- **`node_modules/`**: Contains all the installed npm packages.
  
- **`tests/`**: Directory for all test files.
  
  - **`endpoints/`**: Sub-directory categorizing tests based on API endpoints.
    
    - **`getUsers.test.js`**: Tests for the **GET /users** endpoint.
    - **`getUserById.test.js`**: Tests for the **GET /users/:id** endpoint.
    - **`createUser.test.js`**: Tests for the **POST /users** endpoint.
    - **`deleteUser.test.js`**: Tests for the **DELETE /users/:id** endpoint.

- **`config/`**: Directory for configuration files.
  
  - **`apiConfig.js`**: Contains shared configurations, such as the base URL.

- **`package.json`**: Defines project metadata, scripts, and dependencies.
  
---

## Prerequisites

Before setting up and running the test suite, ensure you have the following installed on your machine:

1. **[Node.js](https://nodejs.org/en/download/)** (v12 or later)
2. **npm** (comes bundled with Node.js)
3. **[Visual Studio Code](https://code.visualstudio.com/)** (optional, for development)

---

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/project-DAT-automation.git  
    ```

2. **Navigate to the Project Directory**
    ```bash
    cd project-DAT-automation
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```
4. **Running the Tests**

    1. **Run All Tests**
    ```bash
    npm test
    ```
    2. **Run Specific Tests**
    ```bash
    npx jest tests/endpoints/getUsers.test.js
    ```
5. **Screenshots:**
    Screenshots of the test results will be automatically generated and saved in the root directory after running the tests.
