import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

class StudentRegister extends Component{
    state = {
        username : "",
        email : "", 
        password : "",
        success : false

    }
    sendStudentData = (e) =>
    {
        e.preventDefault()
        const data = {
            username : this.state.username, 
            email : this.state.email,
            password : this.state.password
        }

        axios.post("http://localhost:1337/account/register/student", data)
        .then(response=>
            {
                console.log(response)
                this.setState({
                    success:true

                })
            }).catch((err)=>
            {
                console.log(err.response)
            })
    }
    render()
    {
        if(this.state.success===true)
        {
            return <Redirect to='/account/student/login'/>
        }
        else{
            console.log('please enter a vlid data');
        }
        return(
            <div className="container p-5">
                <div className="mx-auto mt-5" style={{ width:600 }}>
                    <div className="container border rounded bg-white p-2">
                        <form novalidate>
                            <fieldset className="form-group">
                                <legend className="border-bottom mb-4">Student Register</legend>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" value={this.state.username} onChange={(event)=>{this.setState({username:event.target.value})}} placeholder="Enter username" />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="email" className="form-control" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Enter email" />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="password" className="form-control" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}} placeholder="Password" />
                                </div>
                            </fieldset>
                            <div className="form-group d-grid mb-3">
                                <button type="submit" onClick={this.sendStudentData} className="btn btn-outline-info btn-lg">Register</button>
                            </div>
                        </form>

                        <div className="border-top pt-3">
                            <small className="text-muted">Already have an account <Link className="ml-2" href="/account/student/login"> Login! </Link></small>
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentRegister