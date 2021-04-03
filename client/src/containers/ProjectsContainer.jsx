import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router";
import Layout from "../components/shared/Layout/Layout";
import AddProject from "../screens/AddProject/AddProject";
import EditProject from "../screens/EditProject/EditProject";
import ProjectDetails from "../screens/ProjectDetails/ProjectDetails";
import Projects from "../screens/Projects/Projects";
import { destroyHour, getAllHours, postHours } from "../services/hours";
import {
  destroyMaterial,
  getAllMaterials,
  postMaterial,
} from "../services/materials";
import {
  destroyProject,
  getAllProjects,
  postProject,
  putProject,
} from "../services/projects";

function ProjectsContainer(props) {
  const [projects, setProjects] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [hours, setHours] = useState([]);
  const { currentUser, handleLogout } = props;
  const history = useHistory();

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
  const handleProjectCreate = async (projectData) => {
    const newProject = await postProject(projectData);
    setProjects((prevState) => [...prevState, newProject]);
    history.push("/");
  };
  const handleProjectUpdate = async (id, projectData) => {
    const updatedProject = await putProject(id, projectData);
    setProjects((prevState) =>
      prevState.map((project) => {
        return project.id === Number(id) ? updatedProject : project;
      })
    );
    history.push(`/projects/${id}`);
  };

  const handleProjectDelete = async (id) => {
    await destroyProject(id);
    setProjects((prevState) =>
      prevState.filter((project) => project.id !== id)
    );
    history.push("/");
  };

  const handleTimeCreate = async (timeData) => {
    const newTime = await postHours(timeData);
    setHours((prevState) => [...prevState, newTime]);
  };
  const handleTimeDelete = async (id) => {
    await destroyHour(id);
    setHours((prevState) => prevState.filter((hour) => hour.id !== id));
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
    <Switch>
      <Route exact path="/">
        <Projects projects={projects} materials={materials} hours={hours} />
      </Route>
      <Route exact path="/projects/:id">
        <ProjectDetails
          projects={projects}
          materials={materials}
          hours={hours}
          handleTimeCreate={handleTimeCreate}
          handleTimeDelete={handleTimeDelete}
          handleMaterialCreate={handleMaterialCreate}
          handleMaterialDelete={handleMaterialDelete}
          handleProjectDelete={handleProjectDelete}
        />
      </Route>
      <Route path="/add-project">
        <AddProject
          currentUser={currentUser}
          handleProjectCreate={handleProjectCreate}
        />
      </Route>
      <Route path="/projects/:id/edit">
        <EditProject
          projects={projects}
          handleProjectUpdate={handleProjectUpdate}
        />
      </Route>
    </Switch>
  );
}

export default ProjectsContainer;
