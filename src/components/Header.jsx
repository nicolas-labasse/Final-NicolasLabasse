import logo from '../components/images/logo-akra.png';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';



const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
        <img src={ logo } alt="" width="80" height="30" className="d-inline-block align-text-top me-3"></img>
        </Link>
          <NavBar />
        </div>
      </nav>
    );
}

export default Header;