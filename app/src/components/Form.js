import React from 'react';
import { connect } from 'react-redux';
import { characterRequest } from '../store/actions';

const Form = props => {
    return (
        <div>
            
        </div>
    )
}

export default connect( null, { characterRequest } )( Form );