import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Layout from "../components/shared/Layout/Layout";
import { getAllHours } from "../services/hours";
import { getAllMaterials } from "../services/materials";
import { getAllProjects } from "../services/projects";

function ProjectsContainer(props) {
  const [projects, setProjects] = useState();
  const { currentUser, handleLogout } = props;
  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = await getAllProjects();
      const userProjectData = projectData.filter(
        (project) => project.user_id === currentUser.id
      );
      setProjects(userProjectData);
    };
    fetchProjects();
  }, []);
  useEffect(() => {
    const fetchMaterials = async () => {
      const materialData = await getAllMaterials();
      console.log(materialData);
    };
    fetchMaterials();
  }, []);
  useEffect(() => {
    const fetchHours = async () => {
      const hourData = await getAllHours();
      console.log(hourData);
    };
    fetchHours();
  }, []);

  return (
    <Layout user={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route path="/">
          <h1>This will Be projects</h1>
        </Route>
      </Switch>
    </Layout>
  );
}

export default ProjectsContainer;
