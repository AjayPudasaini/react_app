import { Component } from "react";
import {Route, Switch} from 'react-router-dom';
import CourseUpload from "./CourseUpload";
import CourseUpdate from "./CourseUpdate";
import DeleteTeacherProfile from "./DeteteTeacherProfile";
import MyCourse from "./MyCourse";
import TeacherProfile from './TeacherProfile'


class TeacherBody extends Component
{
    render()
    {
        return(
            <div>

                <Switch>
                    <Route path="/teacher/dashboard" exact component={MyCourse}/>
                    <Route path="/teacher/profile" exact component={TeacherProfile} />
                    <Route path="/delete/teacher/account" exact component={DeleteTeacherProfile}/>
                    <Route path="/upload/courses" exact component={CourseUpload} />
                    <Route path="/course/update/:id" exact component={CourseUpdate} />
                </Switch>

            </div> 
        )
    }
}

export default TeacherBody