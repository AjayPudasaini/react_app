import { Component } from "react";
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import { toast } from "react-toastify";

class StudentLogin extends Component{

    state = {
        username : "",
        password : "",
        checkLogin : false,
        success : false

    }
    studentLoginData = (e) =>
    {
        e.preventDefault()
        const data = {
            username : this.state.username, 
            password : this.state.password
        }

        axios.post("http://localhost:1337/account/login/student", data)
        .then(response=>
            {
                console.log('this is response data', response)

                console.log('pring student data', response.data.studentData);


                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', response.data.user)



                this.setState({
                    checkLogin:true,
                    success : response.data.success

                })

                toast(response.data.message)
                
            }).catch()


    }

    render()
    {
        if(this.state.success===true)
        {
            // redirect dashboard
            return window.location.href="/student/dashboard"
        }
        else
        {
            console.log('invalid login data')
        }


        return(
            <div className="container p-5">
                <div className="mx-auto mt-5" style={{ width:600 }}>
                    <div className="container border rounded bg-white p-2">
                        <form>
                            <fieldset className="form-group">
                                <legend className="border-bottom mb-4">Student Login</legend>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" value={this.state.username} onChange={(event)=>{this.setState({username:event.target.value})}} placeholder="Enter username" required/>
                                </div>
                                <div className="form-group mb-3">
                                    <input type="password" className="form-control" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}} placeholder="Password" required />
                                </div>
                            </fieldset>
                            <div className="form-group d-grid mb-3">
                                <button type="submit" onClick={this.studentLoginData} className="btn btn-outline-info btn-lg">Log in</button>
                            </div>
                        </form>

                        <div className="border-top pt-3">
                            <small className="text-muted">I don't have an account <Link className="ml-2" to="/account/student/register"> Sign up! </Link></small>
                        </div>
                       
                    </div>
                </div>
            </div>

        )
    }
}

export default StudentLogin