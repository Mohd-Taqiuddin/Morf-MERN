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
                <div className='teamMembers'>
                    <div className='member sideBar__item2'>
                        <div className='profileImg'>
                            <img src='https://goglobiliti-sandbox.s3.amazonaws.com/innochamps/download%20(2).jpg' alt='profile' />
                        </div>
                        <div className='team'>
                            <div className='memberName'>
                                Member Name
                            </div>
                            <div className='memberTitle'>
                                Professor
                            </div>
                        </div>
                    </div>
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
        <div className='dashboardBody'>
            <div className='header'>
                <div className='headerName'>
                    Name
                </div>
                <div className='headerTabs'>
                    <div className='headerTab'>
                        DISCOVER
                    </div>
                    <div className='headerTab1'>
                        IMPACT BOARD
                    </div>
                    <div className='headerTab'>
                        LEARNING PODS
                    </div>
                </div>
            </div>
            <div className='body'>
                <div className='bodyItems'>
                    Impact Campaings
                    <img src='https://goglobiliti.com/assets/icons/plus.svg' alt='add' />
                    <div className='bodyItem'>
                        <div className='itemTitle'>
                            XYZ
                        </div>
                        <div className='badge'>
                            Medium
                        </div>
                        <div className='itemDetails'>
                            <div className='target'>
                                <img src='https://goglobiliti.com/assets/icons/User.svg' alt='user' />
                                Student
                            </div>
                            <div className='target'>
                                <img src='https://goglobiliti.com/assets/icons/Link.svg' alt='user' />
                                tools
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bodyItems'>
                    Learning Tools
                    <img src='https://goglobiliti.com/assets/icons/plus.svg' alt='add' />
                </div>
                <div className='bodyItems'>
                    Tool Pilots
                    <img src='https://goglobiliti.com/assets/icons/plus.svg' alt='add' />
                </div>
                <div className='bodyItems'>
                    Design Learning Pods
                    <img src='https://goglobiliti.com/assets/icons/plus.svg' alt='add' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard