import React from 'react';

import './style.less';

const Header = (props) => {
    const { college, major, minor, gradYear, name } = props;
    return (
        <div className="header">
            <span>{college}</span> <span>{major}</span> <span>{minor}</span ><span>{gradYear}</span> <span>{name}</span>
        </div>
    );
};

export default Header;