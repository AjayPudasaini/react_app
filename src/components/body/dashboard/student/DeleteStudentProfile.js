import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class DeleteStudentProfile extends Component{
    state = {
        isDeleted : false,
        success:false,

        config : {
            headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        }
    }
    deleteStudentProfile = () =>{
        axios.delete("http://localhost:1337/reviews/deleteOnAccount", this.state.config)
        .then((response)=>{
            console.log("delete reviews", response)
        })
        .catch((err)=>{
            console.log(err.response.data);
        })


        axios.delete("http://localhost:1337/enrolled/courses/deleteOnAccount", this.state.config)
        .then((response)=>{
            console.log("delete enrolled courses", response)
        })
        .catch((err)=>{
            console.log(err.response.data);
        })




        
        axios.delete("http://localhost:1337/account/student/delete" , this.state.config)
        .then((response)=>{
            console.log(response)

            this.setState({
                isDeleted:true,
                success : response.data.success
            })

            if(this.state.isDeleted===true)
            {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
            }
        })
        .catch((err)=>
        {
            console.log(err.response.data)
        })
    }

    render()
    {
        if(this.state.success===true)
        {
            // redirect dashboard
           return window.location.href="/"
           
        }
        else
        {
            console.log('Invalid')
        }
        
        return(
            <div className="container p-5">
                <div className="mx-auto mt-5" style={{ width:600 }}>
                    <div className="container border rounded bg-white p-2">
                        <fieldset className="form-group">
                            <legend className="border-bottom mb-4">Confirm delete your account</legend>
                        </fieldset>
                        <h6>Are sure want to delete your account?</h6>
                        <div className="form-group d-grid p-3">
                            <Link to="/student/dashboard" className="btn btn-outline-info btn-lg ">Cancel</Link>
                            <button onClick={this.deleteStudentProfile} className="btn btn-danger btn-lg mt-3">Yes, Delete</button>
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}
export default DeleteStudentProfile