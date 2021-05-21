import React from 'react';
import {Link} from 'react-router-dom';

class CharacterList extends React.Component {
    state = {
        isLoading: true,
        pokemonCharacter: [],
        error: null
    }

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoading: false,
                    pokemonCharacter: data.results
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
        const {isLoading, pokemonCharacter, error} = this.state;
        const loading = <p>Loading...</p>;
        const errorMessage = <p>Error. Refresh page.</p>

        return (
            <div className="characterlist">
                <h1>Pokemons</h1>

                <div>
                    {isLoading && loading}
                    {error && errorMessage}
                </div>

                <div>
                    {pokemonCharacter && this.state.pokemonCharacter.map((pokemon, index) => {
                        const id = pokemon.url.split('/').slice(-2)[0];
                        const link = `/pokemon/${id}`;
                         
                        return (
                            <Link to={link}>
                                <h2>{id}. {pokemon.name}</h2>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CharacterList;