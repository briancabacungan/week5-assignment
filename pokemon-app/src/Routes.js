import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={CharacterList} />
                    <Route path="/pokemon/:id" component={CharacterDetails} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;