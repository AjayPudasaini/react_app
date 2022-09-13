import { Component } from "react";

class Logout extends Component{
    componentDidMount()
    {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('user')
        localStorage.removeItem('ID')
        window.location.href="/"
    }

    render()
    {
        // return <Redirect to='/' />
        return(
            <div>Unauthorized</div>
        )
    }
}

export default Logout