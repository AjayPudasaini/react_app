import { Component } from "react";
import {Link} from 'react-router-dom';

class TeacherDashboardHeader extends Component{
    render()
    {
        return(
            <div>
                
                <ul class="nav flex-column">

                    <li class="nav-item">
                        <Link class="nav-link" to="/teacher/dashboard">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/teacher/profile">Profile</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/upload/courses">Upload Course</Link>
                    </li>
                                
                </ul>

            </div>
        )
    }
}

export default TeacherDashboardHeader