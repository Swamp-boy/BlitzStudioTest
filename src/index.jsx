import './scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import TopBlock from './components/TopBlock/TopBlock.jsx';
import SecondMenuBlock from './components/SecondMenuBlock/SecondMenuBlock.jsx';
import AboutBlock from './components/AboutMeBlock/AboutMeBlock.jsx';

ReactDOM.render(
    <React.Fragment>
        <TopBlock />
        <SecondMenuBlock />
        <AboutBlock />
    </React.Fragment>, document.getElementById('root'),
);
