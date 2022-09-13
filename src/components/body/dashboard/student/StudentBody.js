import { Component } from "react"
import { Route } from "react-router"
import DashboardPage from "./DashboardPage"
import DeleteStudentProfile from "./DeleteStudentProfile"
import EnrolledCourse from "./EnrolledCourse"
import StudentProfile from "./StudentProfile"

class StudentBody extends Component{
    render()
    {
        return(
            <div>
                <Route path="/student/dashboard" exact component={DashboardPage} />
                <Route path="/account/student/profile" exact component={StudentProfile}/>
                <Route path="/delete/student/account" exact component={DeleteStudentProfile} />
                <Route path="/my-Courses" exact component={EnrolledCourse} />


            </div>
        )
    }
}

export default StudentBody