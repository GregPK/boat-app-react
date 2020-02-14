import React, { useState } from 'react';
import './App.css';
import BoatTable from './BoatTable';
import BoatView from './BoatView';
import BoatEdit from './BoatEdit';
import LoginForm from './LoginForm';
import { useRoutes, navigate } from 'hookrouter'

const routes = {
  '/boats/:boatId/edit': (params: any) => <BoatEdit boatId={params.boatId} />,
  '/boats/:boatId': (params: any) => <BoatView boatId={params.boatId} />,
  '/boats': () => <BoatTable />,
  '/': () => <LoginForm />,
}

const App = () => {
  const [loggedIn] = useState(false);

  // if (loggedIn === false) {
  //   navigate("/")
  // }

  let routeResult = useRoutes(routes)
  return (
    <div>
      {routeResult}
    </div>
  )
}

export default App;
