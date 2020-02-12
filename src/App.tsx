import React from 'react';
import './App.css';
import BoatTable from './BoatTable';
import BoatView from './BoatView';
import { useRoutes } from 'hookrouter'

const routes = {
  '/boats/:boatId': (params: any) => <BoatView boatId={params.boatId} />,
  '/boats': () => <BoatTable />,
  '/': () => <BoatTable />,
}

const App = () => {
  let routeResult = useRoutes(routes)
  return (
    <div>
      {routeResult}
    </div>
  )
}

export default App;
