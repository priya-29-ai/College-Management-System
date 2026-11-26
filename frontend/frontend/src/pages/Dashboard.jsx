function Dashboard({ user, onLogout, onStudentsClick }) {
  return (
    <div className="dashboard">

      <h1>College Management System</h1>

      <h2>Welcome, {user?.name}!</h2>

      <p>Welcome to your College Dashboard</p>

      <div className="dashboard-cards">

        {/* Students Card */}
        <div
          className="dashboard-card"
          onClick={onStudentsClick}
          style={{ cursor: "pointer" }}
        >
          <h3>Students</h3>
          <p>Manage Students</p>
        </div>

        {/* Teachers Card */}
        <div className="dashboard-card">
          <h3>Teachers</h3>
          <p>Manage Teachers</p>
        </div>

        {/* Courses Card */}
        <div className="dashboard-card">
          <h3>Courses</h3>
          <p>Manage Courses</p>
        </div>

        {/* Attendance Card */}
        <div className="dashboard-card">
          <h3>Attendance</h3>
          <p>Manage Attendance</p>
        </div>

      </div>

      <button onClick={onLogout}>
        Logout
      </button>

    </div>
  );
}

export default Dashboard;