# project-analyzers

project-analyzers is a CLI tool designed to analyze and document your JavaScript/TypeScript project. It generates a comprehensive PDF report containing details such as libraries, CSS information, project stability, bug reports, and component/module summaries.

---

## Features

- Analyze your project's dependencies and their links.
- Extract CSS-related information.
- Assess project stability.
- Detect bugs and provide detailed reports.
- Summarize components and modules with detailed insights.

---

## Installation

### Install Globally

To use `project-analyzers` globally on your system:

```bash
npm install -g project-analyzers
```

---

## Usage

### Run the CLI

After installation, you can use `project-analyzers` in any project directory:

```bash
project-analyzers
```

### Steps:

1. **Install project-analyzers:** Make sure it's installed globally as shown above.
2. **Navigate to Your Project Root:** Go to the root directory of your project.
3. **Run the Command:**
   ```bash
   project-analyzers
   ```
4. **View the Generated Report:** The tool will generate a `project-report.pdf` in the current directory containing all analyzed details.

---

## Examples

### Basic Example

```bash
cd my-project
project-analyzers
```

Output:

- A `project-report.pdf` file will be created in the root of `my-project`.

### Sample Output

The generated PDF includes:

- **Dependencies:** Library names with links to their official documentation.
- **CSS Details:** Information about used stylesheets and global styles.
- **Stability Score:** An overview of the project’s stability.
- **Bug Report:** A detailed list of potential bugs.
- **Component Summary:** Insights into components and modules.

---

## Requirements

- Node.js v14.0.0 or later

---

## How It Works

1. **Analyze Project:** project-analyzers scans the project’s files and extracts necessary information.
2. **Generate PDF:** All extracted data is compiled into a structured and readable PDF report.

---

## Development

### Clone the Repository

If you want to contribute or test locally:

```bash
git clone https://github.com/kaushikdevs/project-analyzer.git
cd project-analyzers
```

### Install Dependencies

```bash
npm install
```

### Build the Project

```bash
npm run build
```

### Link the CLI Locally

To test your CLI tool locally:

```bash
npm link
```

You can now use `project-analyzers` globally on your system.

### Run the CLI

```bash
project-analyzers
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

<!-- ---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

--- -->

## Support

If you encounter any issues or have questions, feel free to open an issue in the repository or contact me at [kaushiktech07@gmail.com].

---

<!-- ## Roadmap

- Add support for more project types (e.g., Python, Ruby).
- Include real-time progress in the CLI.
- Enhance PDF formatting.
- Provide JSON and HTML output options.

--- -->

## Acknowledgments

- Inspired by project documentation tools and the need for automated project analysis.
- Thanks to all contributors who helped improve this tool.

---

## Feedback

We’d love to hear your thoughts! If you have suggestions or improvements, please open an issue or submit a pull request.
