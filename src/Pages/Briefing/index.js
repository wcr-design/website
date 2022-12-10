import React from 'react';
import './style.css';
import { Widget } from '@typeform/embed-react';
import { useSearchParams } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import { once } from 'underscore';

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

    function formStart(){
        TagManager.dataLayer({
            dataLayer: {
                event: "briefing_form_start",
            }
        });
    }

    return (
        <Widget
            id="Y27iy3K9"
            className="briefing-form"
            enableSandbox={searchParams.get('test') ? true : false}
            onSubmit={sendForm}
            onQuestionChanged={once(formStart)}
        />
    );
}

export default Briefing;