import { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

class TeacherLogin extends Component{
    state = {
        username : "",
        password : "",
        checkLogin : false,
        success : false

    }

    // refreshPage = () => {
    //     window.location.reload(); 
    // }


    teacherLoginData = (e) =>
    {
        e.preventDefault()
        const data = {
            username : this.state.username, 
            password : this.state.password
        }

        axios.post("http://localhost:1337/account/login/teacher", data)
        .then(response=>
            {
                console.log('this is response data', response)

                localStorage.setItem('token', response.data.token)
                // localStorage.setItem('username', response.data.teacherData.username)
                // localStorage.setItem('ID', response.data.teacherData._id)
                localStorage.setItem('user', response.data.user)

            
                this.setState({
                    checkLogin:true,
                    success : response.data.success

                })
            }).catch()
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
            console.log('please enter valid login data! ')
        }
        return(
            <div className="container p-5">
                <div className="mx-auto mt-5" style={{ width:600 }}>
                    <div className="container border rounded bg-white p-2">
                        <form>
                            <fieldset className="form-group">
                                <legend className="border-bottom mb-4">Teacher Login</legend>
                                <div className="form-group mb-3">
                                    <input type="text" name="username" className="form-control" value={this.state.username} onChange={(event)=>{this.setState({username:event.target.value})}} placeholder="Enter username" />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="password"  name="password" className="form-control" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}} placeholder="Password" />
                                </div>
                            </fieldset>
                            <div className="form-group d-grid mb-3">
                                <button type="submit" onClick={this.teacherLoginData} className="btn btn-outline-info btn-lg">Log in</button>
                            </div>
                        </form>

                        <div className="border-top pt-3">
                            <small className="text-muted">I don't have an account <Link className="ml-2" to="/account/teacher/register"> Sign up! </Link></small>
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default TeacherLogin