import { useLocation } from 'react-router-dom';
import './style.css';

export const About = () => {
  const { state } = useLocation();
  return <div>
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint omnis, cupiditate harum earum nisi deserunt. Quidem, in non molestias dolorum nisi quae officia nobis corrupti, assumenda reprehenderit nostrum quam.</p>
    <p>{ state }</p>
  </div>
}