# 🎄 High-Performance New Year Landing Page

This project is a modern, single-page promotional website built using React and contemporary front-end practices. It is designed to deliver a fast, fully adaptive, and highly interactive user experience.

## ✨ Key Features & Technical Highlights

* **⚡ Optimized Performance (Core Web Vitals):** Achieved by implementing advanced loading strategies.
    * **Code Splitting:** Heavy UI sections (like the Slider) are loaded dynamically using `React.lazy` and `React.Suspense` to minimize the initial load time.
    * **Asynchronous Data Loading:** Content data is loaded asynchronously immediately upon mounting, preventing the main thread from being blocked during render.
* **🧩 Component-Driven Architecture:** The entire UI is built with functional React components, ensuring high reusability and clean structure.
* **📱 Adaptive User Experience (UX):** The layout logic adapts dynamically based on the viewport size.
    * Utilizes a custom **`useMediaQuery`** hook to determine the device type.
    * Components switch dynamically (e.g., from a carousel/Slider on desktop to a ScrollList on mobile) to provide the best possible UX for the current device.
* **🛠️ Maintainable Logic:** Complex interactions, such as the infinite scrolling carousel, are managed entirely by dedicated custom React Hooks (e.g., `useSliderLogic`), separating logic from presentation.
* **🖼️ Advanced Image Optimization:** Uses the `<picture>` element to serve highly efficient image formats (**AVIF** and **WebP**) with robust fallback, ensuring the fastest media delivery and low data usage.

## 💻 Technology Stack

| Technology | Role | Rationale |
| :--- | :--- | :--- |
| **React** | Core UI Library | Provides a declarative and efficient way to manage the user interface. |
| **Custom React Hooks** | Logic Abstraction | Isolates and standardizes complex logic (slider, media query listeners) for reusability and maintainability. |
| **SCSS (Sass)** | Styling Preprocessor | Professional, scalable, and organized approach to styling with variables, nesting, and mixins. |
| **Vite** | Build Tooling | Used for lightning-fast development setup and optimized production builds. |

## 📁 Project Structure

The project is structured logically for separation of concerns:

```text
src/
├── components/          # Reusable UI components (Section, Slider, Cards, Lists)
├── data/                # Configuration and data files (sections.js)
├── styles/              # SCSS files (main.scss)
├── utils/               # Custom hooks and utility functions (useMediaQuery, useSliderLogic)
└── App.jsx              # Main application component and configuration logic
```

## 🗂️ Detailed File Structure Overview

The project is organized following best practices for a scalable React application, separating UI components, business logic (hooks), data configuration, and styling.

```text
src/
├── components/          # Reusable UI components
│   ├── App.jsx          # Main application wrapper and section configuration
│   ├── Section.jsx      # Universal component for rendering page sections (handles logic for component switching/lazy loading)
│   ├── Slider.jsx       # Interactive, infinitely looping carousel (Desktop view)
│   ├── SliderCard.jsx   # Individual item component within the Slider
│   ├── ScrollList.jsx   # Horizontal scrolling list (Mobile view and specific sections)
│   └── ScrollCard.jsx   # Individual item component within the ScrollList
├── data/                # Centralized data and configuration
│   └── sections.js      # Data source configuration, image metadata extraction (WebP/AVIF), and asynchronous loading logic
├── styles/              # SCSS styling files
│   ├── main.scss        # Core styles, variables, mixins, and BEM block definitions
│   └── customization.scss # Custom styles, for positioning/size overrides
└── utils/               # Custom React Hooks and utility functions
    ├── useMediaQuery.js # Hook for monitoring screen size and implementing adaptive UI logic
    └── useSliderLogic.js# Hook containing all the complex logic for the infinite slider (state, gestures, transitions)
```

## ▶️ Getting Started

To run this modern React application locally, follow these steps.

### Prerequisites

You will need the following installed on your system:

* **Node.js** (version 16 or higher is recommended)
* A package manager (**npm** or **yarn**)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DayvuJoness/new-year-2022-js/
   cd new-year-2022-js
   ```
2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```
   
### Running Locally

To run the project in development mode:

  ```bash
  npm run dev
  # or
  yarn dev
  ```

### Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```
The compiled files will be located in the dist/ directory, ready for deployment.
