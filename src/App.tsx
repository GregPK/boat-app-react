import React from 'react';
import './App.css';
import BoatTable from './BoatTable';
import BoatView from './BoatView';
import BoatEdit from './BoatEdit';
import BoatNew from './BoatNew';
import LoginForm from './LoginForm';
import { useRoutes, navigate } from 'hookrouter'
import Auth from './Auth'

const routes = {
  '/boats/new': () => <BoatNew />,
  '/boats/:boatId/edit': (params: any) => <BoatEdit boatId={params.boatId} />,
  '/boats/:boatId': (params: any) => <BoatView boatId={params.boatId} />,
  '/boats': () => <BoatTable />,
  '/login': () => <LoginForm />,
}

const App = () => {
  console.log(Auth().isLoggedIn(), window.location.pathname)
  if (Auth().isLoggedIn() === false && window.location.pathname !== '/login') {
    navigate("/login", true)
  }
  if (Auth().isLoggedIn() === true && window.location.pathname === '/') {
    navigate("/boats", true)
  }

  let routeResult = useRoutes(routes)
  return (
    <div>
      {routeResult}
    </div>
  )
}

export default App;
