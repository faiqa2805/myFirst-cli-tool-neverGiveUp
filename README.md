# 🎮 Interactive CLI Quiz & Location Search Tool

> An interactive command-line interface (CLI) application built with Node.js featuring dynamic autocomplete search via Teleport REST API, real-time terminal animations, and a computer science quiz game.

https://github.com/user-attachments/assets/c7b4ed30-d50c-4206-8bb2-317e412abb41

---

## 📌 Features

* **Asynchronous Execution Flow:** Top-level `async/await` execution pipeline for step-by-step game progression and score tracking.
* **Terminal UI Animations:** Visual spinner statuses, rainbow ASCII headers, custom gradient rendering, and graceful exit handling on failure states.

---
### Core Dependencies

* **`inquirer` / `inquirer-autocomplete-standalone`:** Terminal prompt rendering
* **`nanospinner`:** Non-blocking async loader states for answer validation(checking answer).
* **`gradient-string` & `figlet`:** ASCII banner rendering on completion("Congratulations ${playername}").
* **`chalk` & `chalk-animation`:** Terminal color styling and text animations.

---

## 🚀 Setup

Clone the repository:
```bash
git clone [https://github.com/your-username/cli-tool.git](https://github.com/your-username/cli-tool.git)
cd cli-tool
```
Install dependencies:
```bash
npm install
```
Link CLI locally for testing:
```bash
npm link
cli-tool
```

## Project File Structure
.
├── external-api.js    # API integration and search query handler
├── index.js           # Main CLI entry point, animation routines, and game loop
├── package.json       # ES Module config, bin links, and dependencies
└── README.md          # Project documentation

## 🧠 Notes & Edge Case Handling

* **ES Module Architecture:** Configured with "type": "module" and #!/usr/bin/env node shebang line for cross-platform binary execution.
* **API Fault Tolerance:** The searchCountries function in external-api.js explicitly guards against empty inputs, handles URI encoding via encodeURIComponent(), and returns a safe fallback array [] on fetch failure.
* **Terminal Process Lifecycle:** Immediate process termination (process.exit(1)) upon incorrect answers
