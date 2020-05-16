import React from 'react';

import Header from '../components/Header';
import ListEntry from '../components/ListEntry';
// import Guest from '../components/Guest';

const PlannerPage = () => {
    return (
        <div>
            <Header college="UC San Diego" major="Computer Science" minor="Meme Making" gradYear="2022" name="Steven Steiner"/>
            <ListEntry title="Advanced Data Structures" code="CSE 100" units="4"/>
            {/* <Guest /> */}
        </div>
    );
};

export default PlannerPage;