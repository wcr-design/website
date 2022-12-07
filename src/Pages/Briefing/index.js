import React from 'react';
import './style.css';
import { Widget } from '@typeform/embed-react'

function Briefing(props) {
    document.title = 'Briefing | wcr.design';
    
    return (
        <Widget id="Y27iy3K9" className="briefing-form" />
    );
}

export default Briefing;