# Online Quiz Application

A premium, responsive web-based quiz application built with HTML, CSS, and JavaScript. Students can select topics, answer timed multiple-choice questions, and review their results with a beautiful, modern interface.

## ✨ Premium Features

- **Custom Premium Dropdowns** - Beautiful animated dropdown selectors for topic selection
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Premium UI/UX** - Refined typography, smooth animations, and cohesive design
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Accessibility** - Keyboard navigation, focus states, and reduced motion support

## 🎯 Aim

To create a responsive online quiz application where students can choose a topic, answer timed multiple-choice questions, and view their score with answer review.

## 🔑 Key Features

- Student name input (required to start quiz)
- Quiz category selection (HTML, CSS, JavaScript, Web Technology)
- Random question set generated from a larger question bank
- 30-second timer for each question
- Multiple-choice answer selection with animated feedback
- Automatic score calculation
- Final result with percentage and visual ring
- Correct and incorrect answer count
- Review section showing selected and correct answers
- Leaderboard saved in browser localStorage with top 10 scores
- Total participants counter showing number of quiz attempts
- **Admin Panel** for adding new questions and managing quiz settings
- Customizable questions per quiz (configurable from admin panel)

## 🛠 Technologies Used

- **HTML5** - Semantic page structure
- **CSS3** - Modern styling with CSS variables, animations, and responsive layout
- **JavaScript (ES6+)** - Quiz logic, timer, scoring, localStorage, and DOM manipulation

## 🚀 How to Run

Simply open `index.html` in any modern web browser. No server required.

## 📚 Quiz Categories

The application includes question banks for:
- **HTML Basics** - Tags, attributes, and page structure
- **CSS Styling** - Selectors, layout, and responsive design
- **JavaScript** - DOM manipulation, events, variables, and logic
- **Web Technology** - Mixed questions for exam preparation

Additional categories can be added through the admin panel.

## 👨‍💻 Admin Panel

The application includes a secure admin panel:

- **Access**: Click "Admin" button on the start screen
- **Password**: `admin123@`
- **Features**:
  - Add new questions to any category
  - Configure number of questions per quiz
  - Manage quiz settings

## 💾 Data Storage

The application uses browser's localStorage for data persistence:

| Data | Description |
|------|-------------|
| Leaderboard | Stores top 10 scores with student names and results |
| Quiz Questions | Persists custom questions added via admin panel |
| Quiz Settings | Remembers configured questions per quiz |
| Theme Preference | Stores user's dark/light mode preference |

## 📋 Browser Requirements

- Modern web browser with JavaScript enabled
- localStorage support
- CSS Grid and Flexbox support
- ES6 JavaScript support

## 📁 Project Structure

```
quiz/
├── index.html      # Main webpage structure
├── style.css       # Premium user interface styling
├── script.js       # Quiz data and application logic
├── README.md       # Development documentation    
```

## 🎨 Design Highlights

- **Color Palette**: Warm terracotta primary with stone backgrounds
- **Typography**: Cormorant Garamond (headings) + IBM Plex Sans (body)
- **Animations**: Smooth transitions, staggered reveals, and micro-interactions
- **Premium Elements**: 
  - Gradient backgrounds with subtle patterns
  - Custom dropdowns with smooth animations
  - Hover states with lift effects
  - Score ring with entrance animation

---

Built with ❤️ using pure HTML, CSS, and JavaScript.