import React from 'react';
import { connect } from 'react-redux';
import { characterRequest } from '../store/actions';

const Form = props => {
    return (
        <div className='search-input'>
            <input type='text'></input>
            <button>Submit</button>
        </div>
    )
}

export default connect( null, { characterRequest } )( Form );