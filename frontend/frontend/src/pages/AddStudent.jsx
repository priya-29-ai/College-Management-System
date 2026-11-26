import { useState } from "react";
import { apiRequest } from "../services/api";

function AddStudent({ onBack, onStudentAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    email: "",
    phone: "",
    department: "",
    course: "",
    semester: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const result = await apiRequest(
        "/students",
        "POST",
        {
          ...formData,
          semester: Number(formData.semester)
        },
        token
      );

      setMessage(result.message);
      setFormData({
        name: "",
        rollNumber: "",
        email: "",
        phone: "",
        department: "",
        course: "",
        semester: ""
      });

      if (onStudentAdded) onStudentAdded();

    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="dashboard">
      <button onClick={onBack}>Back</button>

      <h1>Add New Student</h1>

      <form onSubmit={handleSubmit}>

        <input name="name" placeholder="Student Name"
          value={formData.name} onChange={handleChange} required />

        <input name="rollNumber" placeholder="Roll Number"
          value={formData.rollNumber} onChange={handleChange} required />

        <input name="email" type="email" placeholder="Email"
          value={formData.email} onChange={handleChange} required />

        <input name="phone" placeholder="Phone Number"
          value={formData.phone} onChange={handleChange} />

        <input name="department" placeholder="Department"
          value={formData.department} onChange={handleChange} required />

        <input name="course" placeholder="Course"
          value={formData.course} onChange={handleChange} required />

        <input name="semester" type="number" placeholder="Semester"
          value={formData.semester} onChange={handleChange} required />

        <button type="submit">Add Student</button>

      </form>

      <p>{message}</p>
    </div>
  );
}

export default AddStudent;