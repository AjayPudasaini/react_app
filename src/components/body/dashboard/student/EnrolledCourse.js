import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class EnrolledCourse extends Component{
    state={
        enrolledCourses : [],
        deleted:false,

        config : {
            headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        }
    }


    componentDidMount()
    {
        axios.get("http://localhost:1337/get/enrolled/courses" , this.state.config)
        .then((allMyCourses)=>{
            console.log('enrolled course', allMyCourses)
            this.setState({
                enrolledCourses:allMyCourses.data.data
            })

            // console.log('course price', this.state.enrolledCourses.course.coursePrice);

        })


        .catch((err)=>
        {
            console.log('catch error',+err)
        })

    }

    deleteenrolledCourse=(id)=>{
        axios.delete("http://localhost:1337/delete/my-enroll/"+id, this.state.config)
        .then((response)=>
        {
            console.log(response);
            this.setState({
                deleted:true
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    render()
    {

        if (this.state.deleted===true) {
            return window.location.href="/student/dashboard"
        }
        return(
            <div>
            <div className="row">

                <div>
                    <table className="table border-bottom">
                            <thead>
                                <tr>
                                <th scope="col">Course Thumbnail</th>
                                <th scope="col">Course Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            { this.state.enrolledCourses.map((c)=>{
                                return(
                                    <tbody className="border-bottom">
                                        <td className="cThumb"><img src={"http://localhost:1337/"+c.course.courseThumbnail} className="card-img-top" alt={c.courseTitle}/> </td>
                                        <td><Link to={'/course/'+c._id}><p className="card-text">{c.course.courseTitle}</p></Link> </td>
                                        <td><p className="card-text">Rs:{c.course.coursePrice}/-</p> </td>
                                        <td>
                                            <div class="d-grid gap-2 d-md-block">
                                                <button class="btn btn-danger" onClick={this.deleteenrolledCourse.bind(this, c._id)} type="button">Delete</button>
                                            </div>

                                        </td>
                                    </tbody>
                                )
                            }
                            )}
                            
                    </table>

                   <div className="mr-auto border p-3">
                       <div>
                            <h5> your enrolled courses: {this.state.enrolledCourses.length} </h5>
                            <Link to={'#'} className="btn btn-success" >Checkout</Link>
                       </div>
                   </div>



                </div>
                        

            </div>
        </div>
        )
    }
}

export default EnrolledCourse