import {Switch, Route} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Info from './Components/Info';
import NotFound from './Components/NotFound';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/info' component={Info} />
        <NotFound />
    </Switch>
)

export default Routes;