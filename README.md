# 🎯 Predictoplay – Skill-Based Prediction Game (Frontend)

**Predictoplay** is a modern, interactive frontend web application inspired by platforms like **Probo**. It allows users to engage with real-world predictions using virtual coins in a gamified and visually rich interface.

> ⚠️ This project is focused purely on the **frontend**, showcasing UI/UX design, animations, responsive layouts, and user interface logic using **React.js** and **Tailwind CSS**.

---

## 🚀 Features (Frontend)

- 🔐 **Authentication UI**
  - Login/Register forms with animated transitions
  - OTP input UI (dummy, no backend logic)

- 🎮 **Prediction Interface**
  - Dynamic question cards with countdown timers
  - YES/NO selection with animated feedback
  - Stake slider input to choose coin amount
  - Real-time visual updates (mocked data flow)

- 🧑‍💼 **User Dashboard**
  - Active predictions
  - Win/loss history cards
  - Virtual coin balance display

- 📊 **Leaderboard Page**
  - Weekly and all-time rankings
  - Animated progress bars & profile badges

- 💼 **Wallet Page**
  - Coin transaction UI
  - "Add Coins" mock modal
  - Transaction list component

- 🛠️ **Admin Panel UI (Frontend only)**
  - Add prediction form with category/tag selectors
  - Resolve prediction form with dropdown results

- 🌙 **Dark/Light Mode** toggle
- 📱 **Fully Responsive** (mobile-first design)
- 🌀 **Framer Motion animations** for modals, sliders, and page transitions

---

## 🖥️ Tech Stack

- **React.js** (with Hooks + Router)
- **Tailwind CSS** (utility-first styling)
- **React Icons**
- **Context API** (for mock global state)
- **LocalStorage** (for fake login + coin management)

---

## 📸 Screenshots



- Home Page with Trending Predictions/ Prediction Modal with YES/NO UI 
- ![Screenshot_3-7-2025_235623_predictoplaycom netlify app](https://github.com/user-attachments/assets/0c98f3d8-846e-4ef7-b4bd-e6f041624d8a)


 
- Wallet Page with Coin Management
- ![Screenshot_4-7-2025_0041_predictoplaycom netlify app](https://github.com/user-attachments/assets/835cfbe9-3f25-48a2-ba10-7e9170d8ed32)
 


---

## 📁 Folder Structure (Frontend Only)

 predictoplay-frontend/
├── public/ # Static assets (index.html, favicon, etc.)
└── src/
├── assets/ # Images, icons, SVGs
├── components/ # Reusable UI components (cards, modals, etc.)
├── pages/ # Main pages (Home, Wallet, Leaderboard, etc.)
├── context/ # Context for mock auth and coin state
├── data/ # Dummy data and helper utility functions
└── App.jsx # Root component


---

## 💡 Notes

- All data (user, predictions, coins) is mocked or stored in `localStorage` for demonstration.
- No backend/API integration. Focus is on **frontend design, structure, and logic.**
- Designed for future scalability and backend integration.

---

## 📌 Future Improvements

- Connect to a real backend (Node.js/Express)
- Real-time result resolution
- Google/Firebase authentication
- Integration with MongoDB & payment gateway

---

## 🧑‍🎓 Author

Made with ❤️ by Garvit Trivedi

---

## 🏁 How to Run

```bash
git clone https://github.com/your-username/predictoplay-frontend.git
cd predictoplay-frontend
npm install
npm run dev


