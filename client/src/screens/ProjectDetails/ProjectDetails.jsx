import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ProjectDetails.css";

function ProjectDetails(props) {
  const [timeFormData, setTimeFormData] = useState({
    date: "",
    hours: "",
    project_id: "",
  });
  const [materialFormData, setMaterialFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    project_id: "",
  });
  const [project, setProject] = useState([]);
  const [hours, setHours] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [loading, setLoading] = useState(true);
  const {
    projects,
    handleTimeCreate,
    handleMaterialCreate,
    handleMaterialDelete,
  } = props;
  const params = useParams();

  useEffect(() => {
    if (projects.length && params.id) {
      const foundProject = projects.find(
        (proj) => Number(params.id) === proj.id
      );
      if (foundProject) {
        setProject(foundProject);
        setTimeFormData((prevState) => ({
          ...prevState,
          project_id: foundProject.id,
        }));
        setMaterialFormData((prevState) => ({
          ...prevState,
          project_id: foundProject.id,
        }));

        setLoading(false);
      }
    }
  }, [projects, params.id]);

  useEffect(() => {
    setHours(props.hours.filter((hour) => hour.project_id === project.id));
  }, [props.hours, project.id]);

  useEffect(() => {
    setMaterials(
      props.materials.filter((material) => material.project_id === project.id)
    );
  }, [props.materials, project.id]);

  useEffect(() => {
    const cost = materials.reduce((acc, material) => {
      acc += Number(material.price) * material.quantity;
      return acc;
    }, 0);
    setTotalCost(cost);
  }, [materials]);

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setTimeFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleMaterialChange = (e) => {
    const { name, value } = e.target;
    setMaterialFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) : (
        <div>
          <h1>{project.project_name}</h1>
          <div className="owner-details">
            <div>{project.address}</div>
            <div className="owner">
              <div>Client: {project.client_name}</div>
              <div>Phone: {project.client_phone}</div>
            </div>
            <div className="description">{project.description}</div>
          </div>
          <div className="budget-time">
            <div className="timesheet">
              <h3>TimeSheet</h3>
              <div className="time-table">
                <div className="table-columns">
                  <div className="date">Date</div>
                  <div className="hours">Hours</div>
                </div>
                {hours.map((hour, index) => (
                  <div className="time-row" key={index}>
                    <div className="date">{hour.date}</div>
                    <div className="hours">{hour.hours}</div>
                  </div>
                ))}
                <div className="time-total">
                  <div className="total">Total: </div>
                  <div className="hours-total">
                    {hours.reduce((acc, entry) => {
                      acc += Number(entry.hours);
                      return acc;
                    }, 0)}
                  </div>
                </div>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleTimeCreate(timeFormData);
                  setTimeFormData((prevState) => ({
                    ...prevState,
                    date: "",
                    hours: "",
                  }));
                }}
              >
                <div className="add-hours">
                  <input
                    className="date"
                    type="date"
                    name="date"
                    value={timeFormData.date}
                    onChange={handleTimeChange}
                  />
                  <input
                    className="hours"
                    placeholder="# Hours"
                    type="number"
                    name="hours"
                    value={timeFormData.hours}
                    onChange={handleTimeChange}
                  />
                </div>
                <button type="submit">Add Time</button>
              </form>
            </div>
            <div className="budget-container">
              <div className="boxline">
                <div>Bid:</div>
                <div>${project.bid}</div>
              </div>
              <div className="boxline">
                <div>Expenses:</div>
                <div>${totalCost}</div>
              </div>
              <div className="boxline">
                <div>Total Revenue: </div>
                <div className={project.bid - totalCost > 0 ? "green" : "red"}>
                  ${Math.abs(project.bid - totalCost)}
                </div>
              </div>
            </div>
          </div>

          <div className="materials-table-container">
            <h3>Materials</h3>
            <div className="materials-table">
              <div className="material-row">
                <div className="material-box">Name</div>
                <div className="material-box">Price</div>
                <div className="material-box">Quantity</div>
                <div className="material-box">Total</div>
              </div>
              {materials.map((material, index) => (
                <div className="material-row">
                  <div className="material-box">{material.name}</div>
                  <div className="material-box">
                    ${Number(material.price).toFixed(2)}
                  </div>
                  <div className="material-box">{material.quantity}</div>
                  <div className="material-box">
                    ${Number(material.quantity * material.price).toFixed(2)}
                  </div>
                  <img
                    className="delete-icon"
                    onClick={() => {
                      handleMaterialDelete(material.id);
                    }}
                    src="https://i.imgur.com/HvfL3H2.png"
                  />
                </div>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleMaterialCreate(materialFormData);
                setMaterialFormData((prevState) => ({
                  ...prevState,
                  name: "",
                  price: "",
                  quantity: "",
                }));
              }}
            >
              <input
                type="text"
                placeholder="name"
                name="name"
                value={materialFormData.name}
                onChange={handleMaterialChange}
              />
              <input
                type="number"
                placeholder="price"
                name="price"
                value={materialFormData.price}
                onChange={handleMaterialChange}
              />
              <input
                type="number"
                placeholder="quantity"
                name="quantity"
                value={materialFormData.quantity}
                onChange={handleMaterialChange}
              />
              <button type="submit">Add Material Cost</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;
