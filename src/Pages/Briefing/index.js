import React from 'react';
import './style.css';
import { Widget } from '@typeform/embed-react';
import { useSearchParams } from 'react-router-dom';
import TagManager from 'react-gtm-module';

function Briefing(props) {
    let [searchParams, setSearchParams] = useSearchParams();

    document.title = 'Briefing | wcr.design';

    function sendForm(){
        TagManager.dataLayer({
            dataLayer: {
                event: "briefing_form_submit",
            }
        });
    }

    return (
        <Widget
            id="Y27iy3K9"
            className="briefing-form"
            enableSandbox={searchParams.get('test') ? true : false}
            onSubmit={sendForm}
        />
    );
}

export default Briefing;