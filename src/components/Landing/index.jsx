import React from 'react';
import { Button } from 'antd';
import './style.less';

import Picture from '../../landing.png';
import history from '../../history';

const Landing = () => {
    return (
        <div>
            <div className="landing">
                <div style={{ marginTop: '2.5vh', marginLeft: '5vw', marginRight: '5vw', display: 'flex', justifyContent: 'space-between' }}>
                    <div className="header-title">YourYear</div>
                    <div className="button-container">
                        <Button className="signup-button" type="primary" shape="round" size={"large"} onClick={() => { history.push('/register') }}>Get Started</Button>
                        <Button className="signin-button" type="primary" shape="round" size={"large"} onClick={() => { history.push('/login') }}>Login</Button>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%' }}>
                        <h1>A 4-year course planner made just for you</h1>
                        <h2>YourYear allows students to plan their academic schedule with a sleek drag and drop interface. We make it easy to view your quarterly plans, rearrange schedules, and learn more about avaliable courses.</h2>
                    </div>
                </div>

                <img src={Picture} alt="homepage-icon" style={{ position: 'absolute', right: 0, bottom: 0, height: '500px', width: '500px' }}></img>
            </div>
        </div>
    );
};

export default Landing;