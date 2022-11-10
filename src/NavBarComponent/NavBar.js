import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../css/NavBar.css';

export default class Navbarcomponent extends Component {
    click = false;

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClick = () => {
        this.click = true;
    }

    render() {
        return (
            <div className="container-fluid">
                {/* <nav className="navbar">
                    <NavLink
                        exact to="/" CMS="active"
                        className="end-logo"
                        onClick={this.handleClick}>
                        Claim Management System
                    </NavLink>
                    <ul className={this.click ? "nav-menu active" : "nav-menu"}>

                        <NavLink
                            exact to="/" HomeComponent="active"
                            className="nav-links"
                            onClick={this.handleClick}>
                            Home
                        </NavLink>
                        <NavLink
                            exact to="/addmember" activeClassName="active"
                            className="nav-links"
                            onClick={this.handleClick}>
                            Member Registration
                        </NavLink>
                        <NavLink
                            exact to="/MemberLogin" activeClassName="active"
                            className="nav-links"
                            onClick={this.handleClick}>
                            Member Login
                        </NavLink>
                        <NavLink
                            exact to="/AdminLogin" activeClassName="active"
                            className="nav-links"
                            onClick={this.handleClick}>
                            Admin Login
                        </NavLink>
                    </ul>
                </nav> */}
                <nav className="navbar" class="navbar navbar-expand-lg navbar-light bg-light">
                    <h1>Claim Management System</h1>

                    {/* <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">
                                <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/346/posts/26719/image/HomeButton_AI60Secfinal.jpg" width="80" height="50" class="d-inline-block align-top" alt="home"/>
                                    {/* <h5>Home</h5>  */}
                                    <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/addmember">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDShsIXXkd9E3-u5sfY7hwTE88lMZBh__7GwK-7TWwhIysAdKNPHmlV_Qs-K8oaHKijk4&usqp=CAU" width="170" height="50" class="d-inline-block align-top" alt="registration"/>
                                    {/* <h5>Member Registration</h5> */}</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                
                                    Login
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="/MemberLogin">Member Login</a>
                                    <a class="dropdown-item" href="/AdminLogin">Admin Login</a>
                                    <div class="dropdown-divider"></div>
                                    
                                </div>
                            </li>
                        </ul>
                        {/* <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav>
            </div>
        )
    }
}