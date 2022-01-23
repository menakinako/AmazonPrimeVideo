import './App.css';
import Welcome from './components/Welcome';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { TemplateProvider } from './template/TemplateProvider';
import ContextProvider from './context/contextProvider';
import { Box } from "@material-ui/core"
import Browser from './components/Browser';
import Home from './components/home/Home';
import TV from './components/home/TV';
import Channels from './components/home/Channels';
import HDetailView from './components/detail/HDetailView';
import TDetailView from './components/detail/TDetailView';
import CDetailView from './components/detail/CDetailView';

function App() {
  return (
     <TemplateProvider>
       <ContextProvider>
         <BrowserRouter>
           <Box>
              <Switch>
                 <Route exact path="/" component={Welcome} />
                 <Route exact path="/browser" component={Browser} />
                 <Route exact path="/home" component={Home} />
                 <Route exact path="/tv" component={TV} />
                 <Route exact path="/movies" component={Home} />
                 <Route exact path="/channels" component={Channels} />
                 <Route exact path="/homeslide/:id" component={HDetailView} />
                 <Route exact path="/tvslide/:id" component={TDetailView} />
                 <Route exact path="/channelslide/:id" component={CDetailView} />
              </Switch>
           </Box>
         </BrowserRouter>
       </ContextProvider>
     </TemplateProvider>
  );
}

export default App;
