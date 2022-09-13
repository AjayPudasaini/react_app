import { Component } from "react";
import {Link} from 'react-router-dom';

class Footer extends Component
{


    render()
    {
        return(
            <div>
                <footer id="footer">
                    <div class="container-fluid">
                        <div class="row ml-5">
                        <div class="col-sm-3 mb-5">
                            <h4 class="mt-5">About Us In Short</h4>
                            <hr color="White" />
                            <div class="About-Us-In-Short">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <h4 class="mt-5">For JobSeeker</h4>
                            <hr color="White" />
                            <div class="legal">
                            <ul>
                                <li><Link to="">Register</Link></li>
                                <li><Link to="">login</Link></li>
                                
                                <li><Link to="">FAQ</Link></li>

                            </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <h4 class="mt-5">For Employeers</h4>
                            <hr color="White"/>
                            <div class="usefullinks">
                            <ul>
                                <li><Link to="">Register</Link></li>
                                
                                <li><Link to="">Logout</Link></li>
                                

                                <li><Link to="">Post Job</Link></li>
                                <li><Link to="">FAQ</Link></li>
                            </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <h4 class="mt-5">Follow Us</h4>
                            <hr color="White"/>
                            <div class="socialicon">
                                <ul>
                                    <li><Link to="facebook.com"><i class="fa fa-facebook-f"></i></Link></li>
                                    <li><Link to="twitter.com"><i class="fa fa-twitter"></i></Link></li>
                                    <li><Link to="instagram.com"><i class="fa fa-instagram"></i></Link></li>
                                    <li><Link to="youtube.com"><i class="fa fa-youtube"></i></Link></li>
                                    <li><Link to="pinterest.com"><i class="fa fa-pinterest-p"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>&copy; copyright-2021 E-leaen! Design and developed by Ajaya Pudasaini </p>
                    </div>
                </footer>
            </div>
        )
    }
}


export default Footer