import React from 'react';

import './style.less';

const Header = (props) => {
    const { college, major, minor, gradYear, name } = props;
    return (
        <div className="header">
            <span style={{fontSize: '40px'}}>YourYear</span> <span>College: {college}</span> <span>Major: {major}</span> <span>Minor: {minor}</span> <span>Grad Year: {gradYear}</span>
        </div>
    );
};

export default Header;