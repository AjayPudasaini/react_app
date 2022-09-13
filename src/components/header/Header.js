import { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component{
    
    render()
    {

        if(localStorage.getItem('token') && localStorage.getItem('user')==='Teacher')
        {
            var menu =
                    
                    <div className="collapse navbar-collapse py-0" id="navbarSupportedContent">
                        <Link className="navbar-brand" to="/teacher/dashboard"> E-learn! </Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/teacher/dashboard">Home</Link>
                            </li>

                        </ul>

                        <ul className="navbar-nav ml-auto p-2 mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    profile
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/teacher/dashboard">Dashboard</Link></li>
                                    <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div> 
                
        }
        else if(localStorage.getItem('token') && localStorage.getItem('user')==='Student')
        {
            var menu =
                    <div className="collapse navbar-collapse py-0" id="navbarSupportedContent">
                        <Link className="navbar-brand" to="/"> E-learn! </Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            

                        </ul>

                        <ul className="navbar-nav ml-auto p-2 mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profile
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/student/dashboard">Dashboard</Link></li>
                                    <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div> 
        }
        else{
            var menu = 
                    

                    // sbdkbdjvc

                    <div className="collapse navbar-collapse py-0" id="navbarSupportedContent">
                        <Link className="navbar-brand" to="/"> E-learn! </Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>


                        </ul>

                        <ul className="navbar-nav ml-auto p-2 mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Register
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/account/teacher/register">Teacher</Link></li>
                                    <li><Link className="dropdown-item" to="/account/student/register">Student</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/account/teacher/login">Teacher</Link></li>
                                    <li><Link className="dropdown-item" to="/account/student/login">Student</Link></li>
                                </ul>
                            </li>
                        </ul>
                </div>



        }
        return(

            <div>
                <nav className="navbar fixed-top navbar-expand-lg">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse py-0" id="navbarSupportedContent">
                            {menu}
                        </div>
                    </div>
                </nav>               
            </div>

        

            
        )
    }
}

export default Header