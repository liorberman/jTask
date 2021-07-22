import App from './App.js';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 

const Main = () => {
    return ( 
        <Router>
            <Route path="/" component={App}/>
        </Router>
     );
}
 
export default Main;