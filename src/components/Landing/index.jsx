import React from 'react';

import './style.less';

import Picture from '../../landing.png';

const Landing = () => {
    return (
        <div className="landing">
            <p>landing component</p>
            <img src={Picture} style={{height: 200, width: 200}}></img>
        </div>
    );
};

export default Landing;