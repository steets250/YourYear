import React from 'react';
import { Button, Input } from 'antd';

import history from '../../history';

import './style.less';

const Login = () => {
    return (
        <div className="login">
            <div className="header">
                <div className="header-title">YourYear</div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80%'}}>
                <div className="body">
                    <div className="welcome">Member Login</div>
                    <div className="input-container">
                        <Input className="input" size="large" placeholder="Username" />
                    </div>
                    <div className="input-container">
                        <Input.Password className="input" size="large" placeholder="Password" />
                    </div>
                    <div className="button-container">
                        <Button className="button" type="primary" shape="round" size={"large"} onClick={() => { history.push('/planner') }}>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;