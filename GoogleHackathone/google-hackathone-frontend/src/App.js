import RegisterPage from './app/pages/RegisterPage';
import LoginPage from './app/pages/LoginPage';
import PostsPage from './app/pages/PostsPage';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to='/register'>register</Link><br/>
      <Link to='/login'>login</Link><br/> 
      <Link to='/posts'>posts</Link><br/>
    </div>
  );
}

export default App;
