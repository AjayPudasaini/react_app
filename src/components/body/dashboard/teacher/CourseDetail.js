import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class CourseDetail extends Component{


    state={
        course : '',
        id : this.props.match.params.id,

        content : '',
        reviewerName : '',

        reviews : [],


        enrolls : [],
        enrolled:false,

        config : {
            headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        }
        
    }

    


    enrollCourse = (e) =>{
        // e.preventDefault()

        const data = new FormData()

        axios.post("http://localhost:1337/enroll/course/" + this.state.id, data, this.state.config).then((response)=>
        {
            console.log(response);
            this.setState({
                enrolled:true
            })
            console.log('print then header',this.state.config);
        })
        .catch((err)=>
        {
            console.log(err.response);
            console.log('print catch header',this.state.config);
        })
        console.log('print outside header',this.state.config);
    }









    componentDidMount()
    {
        console.log(this.state.id)

        axios.get("http://localhost:1337/course/" + this.state.id)
        .then((singleCourse)=>{
            console.log('single course', singleCourse)
            this.setState({
                course : singleCourse.data
            })

        })


        .catch((err)=>
        {
            console.log('catch errorrrrrrrrrrrrrrrr',+err)
        })


        axios.get("http://localhost:1337/reviews/"+ this.state.id)
        .then((allReviews)=>{
            this.setState({
                reviews : allReviews.data
            })

            console.log('count reviews',this.state.reviews.length);

        })


        .catch((err)=>
        {
            console.log('catch errorrrrrrrrrrrrrrrr',+err)
        })


        axios.get("http://localhost:1337/enrolles/"+ this.state.id)
            .then((allEnrolls)=>{
                console.log('all reviews', allEnrolls)


                this.setState({
                    enrolls : allEnrolls.data
                })

                console.log('count enrolls',this.state.enrolls.length);

            })
            .catch((err)=>
            {
                console.log('catch errorrrrrrrrrrrrrrrr',+err)
            })
        


    }

   

    sendReviewData=(e)=>{
        // e.preventDefault()
        const data = {
            content : this.state.content
        }

        axios.post("http://localhost:1337/review/post/" + this.state.id, data, this.state.config)
        .then((response)=>
        {
            console.log(response)
        }).catch((err)=>
        {
            console.log(err.response)
        })
    }

    

    render()
    {

        if (this.state.enrolled===true) {
            console.log('course enrolled')
        }

        if(localStorage.getItem('token') && localStorage.getItem('user')==='Student')
        {
            var postReview = 
                <div>
                    <button type="submit" onClick={this.sendReviewData} className="btn btn-outline-info btn-lg">Post</button>
                </div>


            var enrollButton = 
                <div>
                    <button type="submit" onClick={this.enrollCourse} className="btn btn-success"> Enroll Course </button>
                    
                </div>
        }
        else
        {

            var postReview = 
                <div>
                    <p>please login first as a student for posting review!</p>
                    <Link to="/account/student/login" class="btn btn-primary">Login</Link>
                </div>


            var enrollButton = 
                <div>
                    <p>please login first as a student for enrolling this course!</p>
                    <Link to="/account/student/login" class="btn btn-primary">Login</Link>
                </div>
        }

        return(
            <div className="courseDetail">

               <div className="top-banner">
                    <img src="../bc2.jpg" class="img-fluid" />
               </div>


               <div className="container">
                   <div className="course-contents">
                        <h4>{this.state.course.courseTitle}</h4>
                        <h6>No of Reviews: {this.state.reviews.length}</h6>
                        <h6>No of Enrolls: {this.state.enrolls.length}</h6>
                   </div>
               </div>

               <div className="container course-detail card mb-5 p-3">

                        <div className = "row">

                        <div className="col-lg-7">
                               <div className="card-body">

                                    <div className="course-content p-3">
                                        <div className="video-title border-bottom">
                                        <h3>Course Description</h3>
                                        </div>

                                        <div className="video-desc mt-2">
                                            <p>{ this.state.course.courseDesc }</p>
                                            {/* <p>{ this.state.course._id }</p> */}
                                        </div>
                                    </div>


                                    <div className="review-section mt-5">
                                        <div className="card">
                                            <div className="card-body">
                                                <form>
                                                    <legend className="border-bottom mb-4">Write a rewiew</legend>

                                                    <div className="form-group mb-3">
                                                        <label class="form-label">Content * :</label>
                                                        <textarea type="text" name="content" value={this.state.content} onChange={(event)=>{this.setState({content:event.target.value})}} className="form-control" />
                                                    </div>

                                                    <div className="form-group d-grid mb-3">
                                                        {postReview}
                                                    </div>
                                                </form>


                                                <div className="all-reviews mt-3 border p-3">
                                                    {this.state.reviews.map((r)=>{
                                                        return(
                                                            <div className="border-bottom mb-3">
                                                                <div className="reviewed-by d-flex">
                                                                    <img class="rounded reviewedBy-picture" src={"http://localhost:1337/"+r.reviewedBy.profilePicture} />
                                                                    <h6 className="reviewedBy-username">{r.reviewedBy.username}</h6>
                                                                </div>
                                                                <div className="reviewed-content">
                                                                    <p>{r.content}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                        </div>

                        <div className="col-lg-5">
                            {/* <div className="card"> */}
                                {/* <div className="card-body"> */}
                                    <div className="coursePoster">
                                        <div class="enroll-section">
                                            <img class="card-img-top" src={"http://localhost:1337/"+ this.state.course.courseThumbnail} alt="Card image cap" />
              
                                            <div class="card-body">
                                                <form>

                                                    <div className="form-group d-grid mb-3">
                                                        {enrollButton}
                                                    </div>
                                                    
                                                </form>
                                                
                                            </div>
                                        </div>
                                    </div>
                                {/* </div> */}
                            {/* </div> */}
                        </div>

                    </div>
                
                </div>
                    
            </div>
        )
    }
}

export default CourseDetail