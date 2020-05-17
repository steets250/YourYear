import React from 'react';

import Onboard from '../components/Onboard';

import { getColleges } from '../actions/info';

const OnboardPage = () => {
    getColleges((data) => {console.log(data)})
    return (
        <div>
            <Onboard />
        </div>
    );
};

export default OnboardPage;