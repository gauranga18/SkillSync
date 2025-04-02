# SkillSync

## 🔥 Overview
SkillSync is a **modern learning platform** designed to help users navigate through various course components effortlessly. The platform features an interactive **Resource Section**, a **Discussion Forum**, and a **Video Management System** to enhance the learning experience. The UI is built with **ReactJS and TailwindCSS**, ensuring a clean, responsive, and visually appealing design.

---

## 🚀 Features
### 🌟 **Frontend** (ReactJS + TailwindCSS)
- **Modern Dark UI**: Gradient-based dark-to-grey theme.
- **Resource Section**: Interactive cards for navigating course components.
- **Discussion Forum**: Peer-to-peer mentorship and Q&A.
- **Responsive Design**: Mobile-friendly (supports screens down to 320px).
- **Smooth Animations**: Fade-in/out effects using TailwindCSS.
- **Authentication UI**: Login & Registration forms with OAuth support.

### 🔥 **Backend** (Node.js, Express, Firebase, MongoDB)
- **Authentication**: Firebase Auth (Google, Email & Password Login).
- **Database**: MongoDB for storing user profiles, course progress, and forum discussions.
- **Real-time Updates**: WebSockets for live discussion forums.
- **Analytics**: Track user engagement with Firebase.

---

## 🛠️ Tech Stack
### **Frontend**:
- **ReactJS**: Component-based UI development.
- **TailwindCSS**: Utility-first styling for a clean, scalable UI.

### **Backend**:
- **Node.js & Express**: REST API for user authentication, courses, and discussions.
- **MongoDB**: NoSQL database for storing user and course data.
- **Firebase**: Authentication & real-time engagement tracking.

---

## 🎯 Installation & Setup
### **1️⃣ Clone the repository**
```bash
git clone https://github.com/your-username/skillsync.git
cd skillsync
```

### **2️⃣ Install dependencies**
```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### **3️⃣ Set up Firebase & MongoDB**
- Create a **Firebase project** and enable **Authentication**.
- Get Firebase **config keys** and update them in `.env`.
- Set up a **MongoDB database** (MongoDB Atlas or local).

### **4️⃣ Run the application**
```bash
# Start frontend
cd client
npm run dev

# Start backend
cd server
npm start
```

---

## 📂 Project Structure
```
SkillSync/
├── client/ (Frontend)
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Individual pages (Home, About, Login, etc.)
│   │   ├── assets/      # Images and static files
│   │   ├── App.js       # Main React App
│   │   ├── index.js     # Entry point
│   ├── tailwind.config.js  # TailwindCSS configuration
│   ├── package.json    # Dependencies
│
├── server/ (Backend)
│   ├── routes/         # API routes
│   ├── models/         # MongoDB schemas
│   ├── controllers/    # Backend logic
│   ├── config/         # Firebase & MongoDB configuration
│   ├── index.js        # Main server file
│   ├── package.json    # Dependencies
│
├── .env                # Environment variables
├── README.md           # Project documentation
```

---

## 🎨 UI/UX Design
- **Color Theme**: Dark mode-first, black-to-grey gradient.
- **Icons & Animations**: Framer Motion & Lucide Icons.
- **Typography**: Modern sans-serif fonts.

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repository and submit a pull request with your improvements.

---

## 📌 Future Enhancements
✅ AI-powered course recommendations  
✅ Push notifications for updates & discussions  
✅ Leaderboard & Gamification system  

---

## 📞 Contact
For any queries, reach out via:
📧 Email: sauravjyotikalita56@gmail.com 
🔗 LinkedIn: https://www.linkedin.com/in/saurav-jyoti/  

---

### ⭐ **If you like this project, don't forget to star it on GitHub!** ⭐

