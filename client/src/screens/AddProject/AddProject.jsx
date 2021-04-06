import { useState, useEffect } from "react";
import "./AddProject.css";

function AddProject(props) {
  const [formData, setFormData] = useState({
    project_name: "",
    client_name: "",
    client_phone: "",
    address: "",
    description: "",
    bid: "",
  });
  const { currentUser, handleProjectCreate } = props;

  useEffect(() => {
    if (currentUser) {
      setFormData((prevState) => ({
        ...prevState,
        user_id: currentUser.id,
      }));
    }
  }, [currentUser, currentUser.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        className="add-project-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleProjectCreate(formData);
        }}
      >
        <h1>Add Project</h1>
        <label htmlFor="job-name">Job Name</label>
        <input
          type="text"
          id="job-name"
          placeholder="Job Name"
          name="project_name"
          required
          value={formData.project_name}
          onChange={handleChange}
          autoFocus
        />
        <label htmlFor="client-name">Client:</label>
        <input
          type="text"
          id="client-name"
          placeholder="Client"
          name="client_name"
          required
          value={formData.client_name}
          onChange={handleChange}
        />
        <label htmlFor="client-phone">Client Phone Number:</label>
        <input
          type="tel"
          id="client-phone"
          placeholder="Client Phone"
          name="client_phone"
          required
          value={formData.client_phone}
          onChange={handleChange}
        />
        <label htmlFor="job-address">Job Address:</label>
        <input
          type="text"
          id="job-address"
          placeholder="Project Address"
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
        />
        <label htmlFor="bid">Bid:</label>
        <input
          type="number"
          id="bid"
          placeholder="Bid"
          name="bid"
          required
          value={formData.bid}
          onChange={handleChange}
        />
        <label htmlFor="job-description">Job Description</label>
        <textarea
          name="description"
          id="job-description"
          cols="30"
          rows="10"
          required
          value={formData.description}
          onChange={handleChange}
        />
        <button className="brown-button" type="submit">
          Save Project
        </button>
      </form>
    </div>
  );
}

export default AddProject;
