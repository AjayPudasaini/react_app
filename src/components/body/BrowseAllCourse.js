import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class BrowseAllCourse extends Component{
    state = {
        course : [],
    }
    componentDidMount()
    {
        axios.get("http://localhost:1337/all-courses")
        .then((allCourses)=>{
            console.log(allCourses)
            this.setState({
                course : allCourses.data
            })

            console.log('print this', this.state.course);
        })

        

        .catch((err)=>
        {
            console.log(err)
        })
    }


    render()
    {
        return(

            <div className="mt-5 p-0">

                <div className="top-banner">
                    <img src="../bc2.jpg" className="img-fluid" />
               </div>

                <div className="mx-auto" style={{width:500}}>
                    <div className="browse-content p-5">
                        <div className="searchForm">
                            <form className="d-flex">
                                <input className="form-control" type="search" placeholder="What do you want to learn?" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>



                <div className="container mt-5 mb-5">

                    <div className="row mt-5">

                            { this.state.course.map((c)=>{
                                return (

                                    <div className="col-md-3 p-2 mb-3"> 

                                        <Link to={'/course/'+c._id}>
                                            <div className="card">
                                                <img src={"http://localhost:1337/"+c.courseThumbnail} className="card-img-top courseIMG" alt={c.courseTitle} />
                                                <hr></hr>
                                                <div className="card-body courseView">
                                                    <p className="card-text">{c.courseTitle}</p>
                                                    <p className="card-text ">Rs:{c.coursePrice}/-</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                )
                            }) }
                        
                    </div>

                    
                </div>
               

            </div>
        )
    }
}

export default BrowseAllCourse