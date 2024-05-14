import { Link, Outlet } from 'react-router-dom';

const Works = () => {
  return (
    <div>
      <h2>Welcome on the works page. Please, select a category</h2>
      <nav>
        <Link to="exercises">Exercises</Link>
        <Link to="case-study">Case Study</Link>
        <Link to="concret-case">Concret Case</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default Works;