import React from 'react';

import Header from '../components/Header';
import Planner from '../components/Planner';

const PlannerPage = () => {
    return (
        <div>
            <Header college="UC San Diego" major="Computer Science" minor="Business" gradYear="2022" />
            <div style={{display: 'flex', width: '100vw', height: 'calc(100vh - 64px)', backgroundColor: 'red'}}>
                <Planner />
            </div>
        </div>
    );
};

export default PlannerPage;