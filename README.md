### **TakeUBackward**

---

### **Overview**
TakeUBackward is a React-based responsive quiz app offering questions on both old (COBOL, FORTRAN, BASIC) and modern (JavaScript) programming languages. The name is a playful twist on the educational platform "TakeUForward," which focuses on modern tech, while TakeUBackward challenges users with quizzes from older programming languages. The app includes 10 questions covering both old and modern languages.


---
## ✨ Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="images/Screenshot%202025-01-11%20151254.png" alt="Screenshot 1" width="300px">
  <img src="images/Screenshot%202025-01-11%20151342.png" alt="Screenshot 2" width="300px">
  <img src="images/Screenshot%202025-01-11%20151427.png" alt="Screenshot 3" width="300px">
  <img src="images/Screenshot%202025-01-11%20151536.png" alt="Screenshot 4" width="300px">
  <img src="images/Screenshot%202025-01-11%20151701.png" alt="Screenshot 5" width="300px">
  <img src="images/Screenshot%20(771).png" alt="Screenshot 6" width="300px">
  <img src="images/Screenshot%202025-01-11%20152000.png" alt="Screenshot 7" width="300px">
  <img src="images/Screenshot%202025-01-11%20152030.png" alt="Screenshot 8" width="300px">
  <img src="images/Screenshot%202025-01-11%20160712.png" alt="Screenshot" width="300px">

</div>

---

### **Project Structure**

```plaintext
/quiz-app
├── /public                     # Static public assets
│   ├── index.html              # Main HTML file
│   └── favicon.ico             # App favicon
├── /src                        # Source folder for the project
│   ├── /components             # Reusable components
│   │   ├── /question           # Question component
│   │   │   ├── Question.js     # Component for individual questions
│   │   │   └── Question.module.css
│   │   ├── /toolTip            # Tooltip component
│   │   │   ├── InfoToolTip.js  # Tooltip functionality
│   │   │   └── InfoToolTip.module.css
│   ├── /screens                # Screens for different parts of the app
│   │   ├── QuizScreen.js       # Main quiz screen component
│   │   ├── QuizScreen.module.css
│   │   ├── ResultScreen.js     # Result screen component
│   │   ├── ResultScreen.module.css
│   │   ├── ReviewScreen.js     # Review screen component
│   │   └── ReviewScreen.module.css
│   ├── /utils                  # Utility/helper files
│   │   ├── quizData.js         # Static, but random quiz data
│   │   └── instructions.js     # Provides instructions
│   ├── App.js                  # Main App component
│   ├── App.module.css          # Global styles for App
│   ├── index.js                # Entry point of the application
│   └── index.css               # Global CSS (if applicable)
├── /node_modules               # Auto-generated by npm/yarn
├── package.json                # Project dependencies and scripts
├── package-lock.json           # Exact dependency tree
├── .gitignore                  # Files and folders to ignore in Git
├── README.md                   # Documentation for the project
```

---

### **React Concepts Used**

1. **Components**: 
   - Modular design with reusable parts like `Question` (displays a question) and `ToolTip` (hints/help).  

2. **State Management**: 
   - Tracks quiz progress, selected answers, and results using `useState`.  

3. **Props**: 
   - Passes data (e.g., questions, answers) between components.  

4. **CSS Modules**: 
   - Scoped styles (`.module.css`) to avoid conflicts.  

5. **Conditional Rendering**: 
   - Shows different screens (Quiz, Result, Review) based on state.  

6. **Hooks**: 
   - `useState` and `useEffect` manage app logic and dynamic data.  

---

## Features and Functionality

### 1. **Landing Page**:
   - Displays instructions (from `instructions.js`) and a start button to enter the quiz.
   - Upon clicking the "Enter Quiz" button, the quiz timer starts, and the app transitions to the next step.

### 2. **Instructions Page**:
   - Displays clear instructions for the quiz.
   - After a brief 3-second delay, the app automatically moves to the quiz component.

### 3. **Quiz Component**:
   - Displays a series of shuffled questions (from `quizData.js`) with multiple-choice options.
   - Tracks user answers using React state and moves to the next question.
   - Questions are shuffled for each session to offer a fresh experience every time.

### 4. **User Interaction**:
   - Users can select one answer option per question.
   - Answers are stored in the app’s state for evaluation after completing the quiz.

### 5. **Submitting the Quiz**:
   - Once the user has answered all the questions, they click the "Finish" button.
   - The app calculates the user's final score by comparing their answers with the correct ones.

### 6. **Results Component**:
   - Displays the user's score and shows how many questions were answered correctly.
   - Includes two options:
     - **Review**: Allows users to compare their answers with the correct answers.
     - **Retake**: Provides an option to retake the quiz.

### 7. **Review Screen**:
   - After finishing the quiz, users can review the answers to compare what they answered with the correct responses.

### Additional Features:
   - **Randomized Questions**: The questions are shuffled for each session, ensuring a unique experience every time.
   - **Progress Chart**: Displays the progress of the quiz, allowing users to track their journey.


---

### **How To Use**
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/dishadewangan/takeUbackward

# Install dependencies
$ npm install

# Run the app
$ npm start
```

---

### **Tech Stack**
- **Languages**: HTML, CSS Modules
- **Frameworks/Libraries**: React.js, React Icons, Material-UI Tooltip, React Circular Progressbar, React Visibility Sensor
- **Version Control**: Git
- **Package Managers**: NPM

---

### **Acknowledgments**

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/) - A popular routing library for React applications.

