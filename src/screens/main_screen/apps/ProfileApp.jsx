import React from 'react';
import './ProfileApp.css';
import ProfileAppItem from './ProfileAppItem';

import profileImg from './../../../assets/foto_epica_redonda.png';

const ProfileApp = ({ AppName }) => {

    return (
        <div className="profile-app">
            <div className="profile-app-top-container">
                <div className="profile-app-top-container-user-info">
                    <img src={profileImg} alt="Me" className='profile-app-img' />
                    <div className='profile-app-user-details'>
                        <p>Mario Leiva Torres</p>
                        <p>Full Stack Developer</p>
                        <p>marioleivatorres23@gmail.com</p>
                        <button className="btn-download-resume">Download Resume</button>
                    </div>
                </div>
            </div>
            <div className="profile-app-main-container">
                    <ul className="profile-app-main-container-accordion">
                        <ProfileAppItem number="first" title="About Me" description="" checked="true" />
                        <ProfileAppItem number="second" title="Certifications" description="" />
                        <ProfileAppItem number="third" title="Soft Skills" description="" />
                        <ProfileAppItem number="fourth" title="It Lenguages" description="" />
                        <ProfileAppItem number="fifth" title="Lenguages" description="" />
                        <ProfileAppItem number="sixth" title="Professional Experience" description="" />
                    </ul>
                </div>
        </div>
    );
}

export default ProfileApp;