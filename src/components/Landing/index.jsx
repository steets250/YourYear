import React from 'react';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './style.less';

import Picture from '../../landing.png';

const Landing = () => {
    return (
        <div className="landing">
            <div className="header">
                <div className="header-title">Your Year</div>
                <div className="button-container">
                    <Button className="signin-button" type="primary" shape="round" size={"large"}>
                    Login
                    </Button>
                </div>
                <div className="about-us">About us</div>
            </div>
            {/* <img src={Picture} style={{ height: 200, width: 200 }}></img> */}
        </div>
    );
};

export default Landing;