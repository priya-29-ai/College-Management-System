import { useEffect, useState } from "react";
import { apiRequest } from "../services/api";

function Students({ onBack, onAddStudent }) {
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setMessage("");

      const token = localStorage.getItem("token");

      const result = await apiRequest(
        "/students",
        "GET",
        null,
        token
      );

      setStudents(result.students || []);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="dashboard">
      <button onClick={onBack}>Back to Dashboard</button>

      <h1>Student Management</h1>

      <button onClick={onAddStudent}>+ Add Student</button>

      <h3>All Students</h3>

      {loading && <p>Loading students...</p>}
      {message && <p>{message}</p>}

      {!loading && !message && (
        students.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Course</th>
                <th>Semester</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.rollNumber}</td>
                  <td>{student.email}</td>
                  <td>{student.phone || "-"}</td>
                  <td>{student.department}</td>
                  <td>{student.course}</td>
                  <td>{student.semester}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No students found.</p>
        )
      )}
    </div>
  );
}

export default Students;