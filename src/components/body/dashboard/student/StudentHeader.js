import { Component } from "react";
import { Link } from "react-router-dom";

class StudentHeader extends Component{
    render()
    {
        return(
            <div>
                
                <ul class="nav flex-column">

                    <li class="nav-item">
                        <Link class="nav-link" to="/student/dashboard">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/my-Courses">Course Enrolled</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/account/student/profile">Profile</Link>
                    </li>
                                
                </ul>

            </div>
        )
    }
}

export default StudentHeader