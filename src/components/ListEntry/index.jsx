import React from 'react';

import './style.less';

const ListEntry = (props) => {
    const { title, code, units } = props;

    return (
        <div className="list-entry">
            <div className="title">{code}</div>
            <div className="subtitle">{title} ({units})</div>
        </div>
    );
};

export default ListEntry;