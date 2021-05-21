import React from 'react';
import {Link} from 'react-router-dom';

class CharacterDetails extends React.Component {
    state = {
        isLoading: true,
        pokeCharacterDet: null,
        error: false
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoading: false,
                    pokeCharacterDet: data
                })
            })
            .catch((error) => {
                this.setState({
                    isLoading: false,
                    error: true
                })
            })
    }

    render() {
        const {isLoading, pokeCharacterDet, error} = this.state;
        const loading = <p>Loading...</p>;
        const errorMessage = <p>Error. Refresh page.</p>
        let content;

        if (pokeCharacterDet) {

            const abilities = pokeCharacterDet.abilities.map((ability) => {
                return ability.ability.name;
            })

            const moves = pokeCharacterDet.moves.map((move) => {
                return move.move.name;
            })

            const types = pokeCharacterDet.types.map((type) => {
                return type.type.name;
            })

            content = (
                <div className="PokemonDetails">
                    <h2>{pokeCharacterDet.name}</h2>
                    <ul>
                        <li>Height (in decimetres): {pokeCharacterDet.height}</li>
                        <p></p>
                        <li>Weight (in hectograms): {pokeCharacterDet.weight}</li>
                        <p></p>
                        <li>Abilities: {abilities.join(", ")}</li>
                        <p></p>
                        <li>Moves: {moves.join(", ")}</li>
                        <p></p>
                        <li>Type: {types}</li>
                    </ul>
                </div>
            )
        }

        return (
            <div>
                <button type="button">
                    <Link to="/">Back to Pokemon list</Link>
                </button>
                <h1>Pokemon Character Details</h1>
                {isLoading && loading}
                {error && errorMessage}
                {content}
            </div>
        )
    }
}

export default CharacterDetails;