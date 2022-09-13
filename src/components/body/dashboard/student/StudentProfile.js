import { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

class StudentProfile extends Component{

    state = {
        username : "",
        email : "",
        firstName : "",
        lastName : "",
        bioGraphy : "",
        profilePicture : "",
        isUpdated : false,
        success : false,


        config : {
            headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        }

    }


    componentDidMount()
    {
        axios.get('http://localhost:1337/account/student/profile', this.state.config)
        .then((response)=>
        {
            console.log('student profile response', response);
            this.setState({
                username:response.data.username,
                email:response.data.email,
                firstName:response.data.firstName,
                lastName:response.data.lastName,
                bioGraphy:response.data.bioGraphy,
                profilePicture:response.data.profilePicture
            })
        })
        .catch((err)=>
        {
            console.log(err.response)
        })
    }


    profilePictureUpload = (e)=>{
        this.setState({
            profilePicture : e.target.files[0]
        })
    }




    updateStudentProfileData = (e) =>
    {
        e.preventDefault()


        const data = new FormData()

        data.append('username', this.state.username)
        data.append('email', this.state.email)
        data.append('firstName', this.state.firstName)
        data.append('lastName', this.state.lastName)
        data.append('bioGraphy', this.state.bioGraphy)
        data.append('profilePicture', this.state.profilePicture)


        axios.put("http://localhost:1337/account/student/update", data, this.state.config)
        .then(response=>
            {
                console.log(response)
                console.log(this.state.username)
                this.setState({
                    checkLogin:true,
                    success : response.data.success
                })
            }).catch((err)=>{
                console.log(err.response.data)
            })
    }



    render(){
        if(this.state.success===true)
        {
            // redirect dashboard
           return window.location.href="/student/dashboard"
        }
        else
        {
            console.log('Invalid')
        }

        return(
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="profilePicture">
                            <div class="card">
                                <img class="card-img-top" src={"http://localhost:1337/"+this.state.profilePicture} alt="Card images cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{this.state.username}</h5>
                                    <Link to="/delete/student/account" class="btn btn-danger">Delete My Account</Link>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="profileUpdateForm card p-3">

                            <form novalidate>
                                <fieldset className="form-group">
                                    <legend className="border-bottom mb-4">Profile Information</legend>

                                    <div className="form-group mb-3">
                                        <label class="form-label">Username</label>
                                        <input type="text" className="form-control" value={this.state.username} onChange={(event)=>{this.setState({username:event.target.value})}} required/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label class="form-label">Email</label>
                                        <input type="text" className="form-control" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}} required/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label class="form-label">First Name</label>
                                        <input type="text" className="form-control" value={this.state.firstName} onChange={(event)=>{this.setState({firstName:event.target.value})}} required/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label class="form-label">Last Name</label>
                                        <input type="text" className="form-control" value={this.state.lastName} onChange={(event)=>{this.setState({lastName:event.target.value})}} required/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label class="form-label">Bio Graphy</label>
                                        <input type="text" className="form-control" value={this.state.bioGraphy} onChange={(event)=>{this.setState({bioGraphy:event.target.value})}} required/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label class="form-label">Profile Picture</label>
                                        <input type="file" className="form-control" onChange={this.profilePictureUpload} required/>
                                    </div>
                                    
                                </fieldset>
                                <div className="form-group d-grid mb-3">
                                    <button type="submit" onClick={this.updateStudentProfileData} className="btn btn-outline-info btn-lg">Update Profile</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentProfile