import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { characterRequest } from '../store/actions';

import './CharacterCards.scss';

const CharacterCards = props => {

    useEffect(() => {
        props.characterRequest();
    }, [])

    // console.log(props.characters)
    // console.log(props.isFetching)

    return (
        <div className='card-container'>
            {props.characters.map(character => (
                <div className='character-card' key={character.id}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name} />
                <p>STATUS {character.status}</p>
                <p>SPECIES {character.species}</p>
                <p>GENDER {character.gender}</p>
                <p>TYPE {character.type}</p>
                <p>ORIGIN {character.origin.name}</p>
                <p>LAST LOCATION {character.location.name}</p>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      characters: state.characters.characters,
      isFetching: state.characters.isFetching,
      error: state.characters.error
    }
  }

export default connect( mapStateToProps, { characterRequest })( CharacterCards );