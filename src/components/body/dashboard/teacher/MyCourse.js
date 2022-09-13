import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class MyCourse extends Component{

    state = {
        // profileData : [], 
        course : [],
        deleted:false,

        config : {
            headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        }

    }

    componentDidMount(){
        axios.get('http://localhost:1337/get/teacher/course', this.state.config )
        .then((response)=>
        {
            console.log(response)
            console.log('respofjdjvdfbvjxc',response.data);


            this.setState({
                course : response.data
            })

            console.log('print coursetitle', this.state.course)

        })
        .catch((err)=>
        {
            console.log(err)
        })
    }


    deleteCourse = (cId) =>{
        axios.delete("http://localhost:1337/course/delete/"+cId, this.state.config)
        .then((response)=>{
            console.log(response)
            this.setState({
                deleted:true
            })
        })
        .catch()
    }


    render()
    {
        if (this.state.deleted===true) {
            return window.location.href="/teacher/dashboard"
        }
        return(
            <div>
                <div className="row">

                                        

                    { this.state.course.map((c)=>{
                        return (

                            <div className="col-md-3 mb-4"> 

                                <Link to={'#'}>
                                    <div className="card">
                                        <img src={"http://localhost:1337/"+c.courseThumbnail} className="card-img-top" alt={c.courseTitle} />
                                        <hr></hr>
                                        <div className="card-body">
                                            <p className="card-text">{c.courseTitle}</p>
                                            <p className="card-text">Rs:{c.coursePrice}/-</p>
                                            <p><button onClick={this.deleteCourse.bind(this, c._id)}>delete</button></p>
                                            <Link to={"/course/update/"+c._id}>Update</Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        )
                    }) }

                </div>
            </div>
        )
    }
}

export default MyCourse