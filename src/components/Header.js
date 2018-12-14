import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import Upload from './Upload';
import $ from 'jquery';


class Header extends Component {

    triggerDropdown = (e) => {
        $(e.target).siblings('.profile-dropdown').toggleClass('show');

    }


    render(){
        const {currentUser} = this.props;
        return (
        <header>
            <div className="head-content">
                <div className="branding">
                    <Link to="/home"><img src={logo} alt="logo" /></Link>
                </div>
                <div className="nav">
                    <div className="userInfo">
                        <div className="avatar">
                            <img src={currentUser.avatar} alt='' onClick={(e)=> this.triggerDropdown(e)} />
                            <div className="profile-dropdown">
                                <ul>
                                    <Link to={"/profile/"+currentUser.id}><li><i className="fa fa-user-circle" aria-hidden="true"></i>Profile</li></Link>
                                    <Link to="/"><li><i className="fa fa-sign-out" aria-hidden="true"></i>Another User</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Upload
                    />
                </div>
            </div>

        </header>
        );

    }
}

export default Header;
