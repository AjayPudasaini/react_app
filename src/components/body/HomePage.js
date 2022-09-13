import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component{
    state = {
        course : [],
    }
    componentDidMount()
    {
        axios.get("http://localhost:1337/all-courses")
        .then((allCourses)=>{
            console.log(allCourses)
            this.setState({
                course : allCourses.data.data
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

                <div className="top-section mt-5">

                    <div className="top-section">
                        <div className="banner">
                            <img src="../ca1.jpg" class="img-fluid" />
                        </div>
                        <div className="banner-content p-5">
                            <h5>“If you think education is expensive, try ignorance.”</h5><br></br>
                            <div className="searchForm">
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="What do you want to learn?" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    
                </div>


                <div className="container-fluid bg-white">
                    <div className="container p-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="middlePicture">
                                    <img src="../mp1.jpg" class="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-6 p-5 mt-5 middleContent">
                                <h2>The world’s largest selection of online courses</h2>
                                <p>Millions of people have used Kingster to decide which online course to take. We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone.</p>
                                <Link to="/browse/all-courses" className="btn btn-primary btnBrowseCourse">Browse Courses</Link>
                            </div>
                        </div>
                    </div>
                </div>

                

                <div className="container mt-5 mb-5">

                    <div className="popularCourses">
                        <h3>Explore Our Popular Online Courses</h3>
                    </div>

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
                
                
                <div className="popularCourses">
                    <h3>Testomonials</h3>
                </div>

                <div className="container mt-5 mb-5 d-flex justify-content-center ">
                    

                    <div className="row">
                        <div className="col-md-3">
                            <div className="maincard p-3">
                                <div className="thecard">
                                    <div className="thefront text-center py-4"> <img src="https://i.imgur.com/o5uMfKo.jpg" className="rounded-circle mt-5" width="100" />
                                        <h3 className="mt-2 mb-0">Jane Dae</h3> <small className="user_name">Student</small>
                                    </div>
                                    <div className="theback py-3 px-3">
                                        <div className="quote mt-3">
                                            <h4><i className="fa fa-quote-left"></i></h4>
                                            <p className="about text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="maincard p-3">
                                <div className="thecard">
                                    <div className="thefront text-center py-4"> <img src="https://i.imgur.com/tmdHXOY.jpg" className="rounded-circle mt-5" width="100" />
                                        <h3 className="mt-2 mb-0">Manor Josa</h3> <small className="user_name">Student</small>
                                    </div>
                                    <div className="theback py-3 px-3">
                                        <div className="quote mt-3">
                                            <h4><i className="fa fa-quote-left"></i></h4>
                                            <p className="about text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="maincard p-3">
                                <div className="thecard">
                                    <div className="thefront text-center py-4"> <img src="https://i.imgur.com/8JiAQGa.jpg" className="rounded-circle mt-5" width="100" />
                                        <h3 className="mt-2 mb-0">Jimmy Anderson</h3> <small className="user_name">Student</small>
                                    </div>
                                    <div className="theback py-3 px-3">
                                        <div className="quote mt-3">
                                            <h4><i className="fa fa-quote-left"></i></h4>
                                            <p className="about text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="maincard p-3">
                                <div className="thecard">
                                    <div className="thefront text-center py-4"> <img src="https://i.imgur.com/HjKTNkG.jpg" className="rounded-circle mt-5" width="100" />
                                        <h3 className="mt-2 mb-0">Jimmy Anderson</h3> <small className="user_name">Student</small>
                                    </div>
                                    <div className="theback py-3 px-3">
                                        <div className="quote mt-3">
                                            <h4><i className="fa fa-quote-left"></i></h4>
                                            <p className="about text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default HomePage