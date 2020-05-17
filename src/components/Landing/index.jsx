import React from 'react';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './style.less';

import Picture from '../../landing.png';

const Landing = () => {
    return (
        <div>
        <div className="landing">
            <div>
                <div className="header-title">YourYear</div>
                <div className="button-container">
                    <Button className="signin-button" type="primary" shape="round" size={"large"}>
                        Login
                    </Button>
                </div>
                <div className="about-us">About us</div>
            </div>
            <div className="headline">
                <h1>A 4-year course planner</h1>
            </div>
            <div className="headline-2">
                <h1>made with your way</h1>
            </div>
            <div className="description-1">
                <h2>YourYear allows students to plan their educational plan with a sleek </h2>
            </div>
            <div className="description-2">
                <h2>drag and drop interface. We make sure you reach you fulfill all</h2>
            </div>
            <div className="description-3">
                <h2>university requirements and as well as keeping track of your GPA and units.</h2>
            </div>
        </div>
        <div className="button-container-signup">
            <Button className="signup-button" type="primary" shape="round" size={"large"}>
                Get Started
            </Button>
        </div>
        <div className="picture-container">
            <img src={Picture} style={{ height: 1050, width: 1050 }}></img>
        </div>
        </div>
    );
};

export default Landing;