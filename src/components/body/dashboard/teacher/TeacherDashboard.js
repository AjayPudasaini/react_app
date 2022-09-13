import { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import TeacherDashboardHeader from "./TeacherDashboardHeader";
import TeacherBody from "./TeacherBody";


class TeacherDashboard extends Component{
    render()
    {
        return(
            <div className="container p-5">
                <div className="card">
                    <div className="row">
                        <BrowserRouter>
                            <div className="col-lg-3 vertical p-4">

                                <TeacherDashboardHeader></TeacherDashboardHeader>

                            </div>

                            <div className="col-lg-9 p-4">

                                
                                <TeacherBody></TeacherBody>
                                
                                
                            </div>
                        </BrowserRouter>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default TeacherDashboard