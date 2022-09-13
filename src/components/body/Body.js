import { Component } from "react";
import {Route} from 'react-router-dom';
import CourseDetail from "./dashboard/teacher/CourseDetail";

// body parts
import HomePage from "./HomePage";
import StudentLogin from "./StudentLogin";
import StudentRegister from "./StudentRegister";
import TeacherLogin from "./TeacherLogin";
import TeacherRegister from "./TeacherRegister";
import TeacherDashboard from "./dashboard/teacher/TeacherDashboard"
import Logout from "./Logout";
import StudentDashboard from "./dashboard/student/StudentDashboard";
import BrowseAllCourse from "./BrowseAllCourse";
// import TeacherProfile from "./dashboard/teacher/TeacherProfile";


class Body extends Component
{
    render()
    {
        return(
            <div>
                <div className="mt-5">


                    <Route path="/" exact component={HomePage}/>
                    <Route path="/course/:id" exact component={CourseDetail}/>

                    <Route path="/browse/all-courses" exact component={BrowseAllCourse} />

                    <Route path = "/account/teacher/register" exact component={TeacherRegister}/>
                    <Route path = "/account/student/register" exact component={StudentRegister}/>




                    <Route path="/account/student/login" exact component={StudentLogin}/>
                    <Route path="/account/teacher/login" exact component={TeacherLogin}/>


                    <Route path="/student/dashboard" exact component={StudentDashboard} />

                    <Route path="/teacher/dashboard" exact component={TeacherDashboard} />
                    {/* <Route path="/teacher/profile" exact component={TeacherProfile} /> */}


                    <Route path="/logout" exact component={Logout}/>


                    
                </div>
            </div>
        )
    }
}


export default Body