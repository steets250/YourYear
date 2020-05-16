import React from 'react';
import { PageHeader } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


import './style.less';

const Guest = () => {
    return (
        <div className="guest">
            <div className="header"> 
                <div className="header-title">YourYear</div>
            </div>
            <div className="body">
                <div className="welcome">Your year starts now!</div>
                <div className="input-container">
                    <Input className="input" size="large" placeholder="What is your name?" />
                </div>
                <div className="button-container">
                    <Button className="button" type="primary" shape="round" size={"large"}>
                    Get Started
                    </Button>
                 </div>
            </div>
        </div>
    );
};

export default Guest;