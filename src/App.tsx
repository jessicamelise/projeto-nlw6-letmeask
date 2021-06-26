import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { AuhtContextProvider } from './contexts/AuthContext';
import { Room } from './pages/Room';

function App() {
  return (
    <BrowserRouter>
      <AuhtContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuhtContextProvider>
    </BrowserRouter>
  );
}

export default App;
