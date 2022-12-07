import React from 'react';
import './style.css';
import { Widget } from '@typeform/embed-react';
import { useSearchParams } from 'react-router-dom';

function Briefing(props) {
    let [searchParams, setSearchParams] = useSearchParams();

    document.title = 'Briefing | wcr.design';
    
    console.log(searchParams.get('test'));

    return (
        <Widget id="Y27iy3K9" className="briefing-form" enableSandbox={searchParams.get('test') ? true : false}/>
    );
}

export default Briefing;