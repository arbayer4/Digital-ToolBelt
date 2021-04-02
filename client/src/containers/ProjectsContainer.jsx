import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Layout from "../components/shared/Layout/Layout";
import ProjectDetails from "../screens/ProjectDetails/ProjectDetails";
import Projects from "../screens/Projects/Projects";
import { getAllHours, postHours } from "../services/hours";
import {
  destroyMaterial,
  getAllMaterials,
  postMaterial,
} from "../services/materials";
import { getAllProjects } from "../services/projects";

function ProjectsContainer(props) {
  const [projects, setProjects] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [hours, setHours] = useState([]);
  const { currentUser, handleLogout } = props;

  //Getting User Projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = await getAllProjects();
      const userProjectData = projectData.filter(
        (project) => project.user_id === currentUser.id
      );
      setProjects(userProjectData);
    };
    fetchProjects();
  }, [currentUser.id]);

  //Material List from API
  useEffect(() => {
    const fetchMaterials = async () => {
      const materialData = await getAllMaterials();
      setMaterials(materialData);
    };
    fetchMaterials();
  }, []);

  //Hours List from API
  useEffect(() => {
    const fetchHours = async () => {
      const hourData = await getAllHours();
      setHours(hourData);
    };
    fetchHours();
  }, []);
  const handleTimeCreate = async (timeData) => {
    const newTime = await postHours(timeData);
    setHours((prevState) => [...prevState, newTime]);
  };
  const handleMaterialCreate = async (materialData) => {
    const newMaterial = await postMaterial(materialData);
    setMaterials((prevState) => [...prevState, newMaterial]);
  };
  const handleMaterialDelete = async (id) => {
    await destroyMaterial(id);
    setMaterials((prevState) =>
      prevState.filter((material) => material.id !== id)
    );
  };

  return (
    <Layout user={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route exact path="/">
          <Projects projects={projects} materials={materials} hours={hours} />
        </Route>
        <Route path="/projects/:id">
          <ProjectDetails
            projects={projects}
            materials={materials}
            hours={hours}
            handleTimeCreate={handleTimeCreate}
            handleMaterialCreate={handleMaterialCreate}
            handleMaterialDelete={handleMaterialDelete}
          />
        </Route>
      </Switch>
    </Layout>
  );
}

export default ProjectsContainer;
