import React from 'react';
import './App.css';
import BoatTable from './BoatTable';
import BoatView from './BoatView';
import BoatEdit from './BoatEdit';
import { useRoutes } from 'hookrouter'

const routes = {
  '/boats/:boatId/edit': (params: any) => <BoatEdit boatId={params.boatId} />,
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
