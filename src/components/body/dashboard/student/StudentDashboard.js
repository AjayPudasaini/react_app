import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import StudentBody from "./StudentBody";
import StudentHeader from "./StudentHeader";

class StudentDashboard extends Component{
    render()
    {
        return(
            <div className="container p-5">
                <div className="card">
                    <div className="row">
                        <BrowserRouter>
                            <div className="col-lg-3 vertical p-4">

                                
                                <StudentHeader></StudentHeader>

                            </div>

                            <div className="col-lg-9 p-4">

                                
                                <StudentBody></StudentBody>
                                
                                
                            </div>

                        </BrowserRouter>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default StudentDashboard