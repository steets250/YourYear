import React from 'react';

import { Button } from 'antd';
import history from '../../history';

import './style.less';

const Header = (props) => {
    const { college, major, minor, gradYear } = props;
    return (
        <div className="header">
            <span style={{ fontSize: '40px' }}>YourYear</span> <span>College: {college}</span> <span>Major: {major}</span> <span>Minor: {minor}</span> <span>Grad Year: {gradYear}</span>
            <Button onClick={() => { history.push('/') }}>Log Out</Button>
        </div>
    );
};

export default Header;