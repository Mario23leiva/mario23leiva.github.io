import React from 'react';
// import './ProfileAppItem.css';

const ProfileAppItem = ({ number, title, description, checked }) => {
    return (
        <li>
            <input type="checkbox" name="accordion" id={number}/>
            <label htmlFor={number} >{title}</label>
            <div className='content'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quos saepe inventore magnam quas. Sequi necessitatibus consequuntur molestiae suscipit ab?</p>
            </div>
        </li>
    );
}

export default ProfileAppItem