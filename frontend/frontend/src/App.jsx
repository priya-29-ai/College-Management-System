import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setCurrentPage("dashboard");
  };

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <>
      {currentPage === "dashboard" && (
        <Dashboard
          user={user}
          onLogout={handleLogout}
          onStudentsClick={() => setCurrentPage("students")}
        />
      )}

      {currentPage === "students" && (
        <Students
          onBack={() => setCurrentPage("dashboard")}
          onAddStudent={() => setCurrentPage("addStudent")}
        />
      )}

      {currentPage === "addStudent" && (
        <AddStudent
          onBack={() => setCurrentPage("students")}
          onStudentAdded={() => setCurrentPage("students")}
        />
      )}
    </>
  );
}

export default App;