import React from 'react';
import { PageHeader } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


import './style.less';

const Register = () => {
    return (
        <div className="register">
            <div className="header">
                <div className="header-title">YourYear</div>
            </div>
            <div className="body">
                {/* <div className="square"></div> */}
                <div className="welcome">Get Started</div>
                <div className="input-container">
                    <Input className="input" size="large" placeholder="Username" />
                </div>
                <div className="input-container">
                    <Input className="input" size="large" placeholder="Password" />
                </div>
                <div className="input-container">
                    <Input className="input" size="large" placeholder="Email" />
                </div>
                <div className="button-container">
                    <Button className="button" type="primary" shape="round" size={"large"}>
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Register;