import React from 'react';

import Info from '../../assets/noun_Info_2510066.svg';

import './style.less';

const ListEntry = (props) => {
    const { title, code, units } = props;

    return (
        <div className="list-entry">
            <div class="info-container">
                <div className="title">{code}</div>
                <img class="info" src={Info} onClick={() => {props.setVisible(true)}}/>
            </div>
            <div className="subtitle">{title} ({units})</div>
        </div>
    );
};

export default ListEntry;