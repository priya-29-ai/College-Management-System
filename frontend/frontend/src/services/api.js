const API_URL = "http://localhost:5000/api";

export const apiRequest = async (endpoint, method = "GET", data = null, token = null) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` })
    },
    ...(data && { body: JSON.stringify(data) })
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
};