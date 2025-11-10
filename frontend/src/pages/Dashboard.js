import Tags from '../components/tags/Tags';
import ProjectList from '../components/projects/ProjectList';
import ProjectForm from '../components/projects/ProjectForm';

const Dashboard = () => {
  return (
    <>
      <div className="page">
        <Tags />
        <main className="projects">
          <ProjectList />
        </main>
      </div>
      <ProjectForm />
    </>
  );
};

export default Dashboard;
