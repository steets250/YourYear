import React from 'react';
import { PageHeader } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


import './style.less';

const Login = () => {
    return (
        <div className="login">
            <div className="header"> 
                <div className="header-title">YourYear</div>
            </div>
            <div className="body">
                {/* <div className="square"></div> */}
                <div className="welcome">Member Login</div>
                <div className="input-container">
                    <Input className="input" size="large" placeholder="Username" />
                </div>
                <div className="input-container"> 
                        <Input className="input" size="large" placeholder="Password" />
                </div>
                <div className="button-container">
                    <Button className="button" type="primary" shape="round" size={"large"}>
                    Login
                    </Button>
                 </div>
            </div>
        </div>
    );
};

export default Login;