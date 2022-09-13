import { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';


class TeacherProfile extends Component{
    state = {
        username : "",
        email : "",
        firstName : "",
        lastName : "",
        website : "",
        linkin : "",
        youtube : "",
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
        axios.get('http://localhost:1337/account/teacher/profile', this.state.config)
        .then((response)=>
        {
            console.log('teacher profile response', response);
            this.setState({
                username:response.data.username,
                email:response.data.email,
                firstName:response.data.firstName,
                lastName:response.data.lastName,
                website:response.data.website,
                linkin:response.data.linkin,
                youtube:response.data.youtube,
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



    updateTeacherProfileData = (e) =>
    {
        e.preventDefault()

        const data = new FormData()

        data.append('username', this.state.username)
        data.append('email', this.state.email)
        data.append('firstName', this.state.firstName)
        data.append('lastName', this.state.lastName)
        data.append('website', this.state.website)
        data.append('linkin', this.state.linkin)
        data.append('youtube', this.state.youtube)
        data.append('bioGraphy', this.state.bioGraphy)
        data.append('profilePicture', this.state.profilePicture)


        axios.put("http://localhost:1337/account/teacher/update", data, this.state.config)
        .then(response=>{
                // console.log('updating teacher data',response)
                // console.log(this.state.username)
                this.setState({
                    checkLogin:true,
                    success : response.data.success
                })
        })
        .catch((err)=>{
                console.log(err.response.data)
        })
    }

    render()
    {
        if(this.state.success===true)
        {
            // redirect dashboard
           return window.location.href="/teacher/dashboard"
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
                                    <Link to="/delete/teacher/account" class="btn btn-danger">Delete My Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-7">
                        <div className="profileUpdateForm card p-3">

                            <form>
                                <fieldset className="form-group">
                                    <legend className="border-bottom mb-4">Profile Information</legend>

                                    <div className="form-group mb-3">
                                        <label class="form-label">Username</label>
                                        <input type="text" name="username" className="form-control" value={this.state.username} onChange={(event)=>{this.setState({username:event.target.value})}} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label class="form-label">Email Address</label>
                                        <input type="text" name="email" className="form-control" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label class="form-label">First Name</label>
                                        <input type="text" name="firstName" className="form-control" value={this.state.firstName} onChange={(event)=>{this.setState({firstName:event.target.value})}} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label class="form-label">Last Name</label>
                                        <input type="text" name="lastName" className="form-control" value={this.state.lastName} onChange={(event)=>{this.setState({lastName:event.target.value})}} />
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <label class="form-label">Website</label>
                                        <input type="text" name="bioGraphy" className="form-control" value={this.state.website} onChange={(event)=>{this.setState({website:event.target.value})}} placeholder="enter website link here" />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label class="form-label">LinkIn</label>
                                        <input type="text" name="website" className="form-control" value={this.state.linkin} onChange={(event)=>{this.setState({linkin:event.target.value})}} placeholder="enter website link here" />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label class="form-label">Youtube</label>
                                        <input type="text" name="linkin" className="form-control" value={this.state.youtube} onChange={(event)=>{this.setState({youtube:event.target.value})}} placeholder="enter website link here" />
                                    </div>
                                    

                                    <div className="form-group mb-3">
                                        <label class="form-label">BioGraphy</label>
                                        <textarea type="text" name="youtube" className="form-control" value={this.state.bioGraphy} onChange={(event)=>{this.setState({bioGraphy:event.target.value})}} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label class="form-label">ProfilePicture</label>
                                        <input type="file" name="profilePicture" className="form-control" onChange={this.profilePictureUpload} />
                                    </div>
                                    
                                </fieldset>

                                <div className="form-group d-grid mb-3">
                                    <button type="submit" onClick={this.updateTeacherProfileData} className="btn btn-outline-info btn-lg">Update Profile</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TeacherProfile