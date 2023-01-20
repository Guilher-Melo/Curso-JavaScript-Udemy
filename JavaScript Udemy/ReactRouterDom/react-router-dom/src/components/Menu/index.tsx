import './style.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
   <nav className="menu">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/posts">Post</Link>
      </li>
      <li>
        <Link to="/posts/10">Post 10</Link>
      </li>
    </ul>
   </nav>
  ) 
}