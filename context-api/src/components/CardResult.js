import React from 'react';
import CardContext from '../contexts/CardContext';
function CardResult() {
    return <CardContext.Consumer>
        {context => <h1>{context}</h1>}
    </CardContext.Consumer>
}
export default CardResult;