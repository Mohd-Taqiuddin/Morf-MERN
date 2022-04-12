import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='sideBar'>
            <div className='gLogo'>
                <img src='https://goglobiliti.com/assets/images/globiliti-logo2x.png' alt='globiliti logo' />
            </div>
            <div className='sideBar__items'>
                <div className='sideBar__item1'>
                    <img src='https://goglobiliti.com/assets/icons/Home.svg' alt='Home logo'/>
                    Home
                </div>
                <div className='sideBar__item2'>
                    <img src='https://goglobiliti.com/assets/icons/Group.svg' alt='logo'/>
                        My Team
                </div>
                <div className='sideBar__item2'>
                    <img src='https://goglobiliti.com/assets/icons/Lab-flask.svg' alt='logo'/>
                        My Pilots
                </div>
                <div className='sideBar__item2'>
                    <img src='https://goglobiliti.com/assets/icons/Group.svg' alt='logo'/>
                        Chat
                </div>
            </div>
            <div className='sideBar__team'>
                <div className='addTeam'>
                    <div className='addText'>Add Team Members</div>
                    <img src='	https://goglobiliti.com/assets/icons/Add-circle.svg' alt='add logo' />
                </div>
                <div className='team'>
                    Members
                </div>
            </div>
            <div className='footer'>
                <div className='sideBar__item2'>
                    <img src='https://goglobiliti.com/assets/icons/Settings.svg' alt='logo'/>
                        My Account
                </div>
                <div className='sideBar__item2'>
                    <img src='https://goglobiliti.com/assets/icons/Sign-out.svg' alt='logo'/>
                        Log out
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard