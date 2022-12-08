import React from "react";
import RoutesList from "./RoutesList";
import TagManager from 'react-gtm-module'

TagManager.initialize({
  gtmId: 'GTM-T859MJM'
})

function App() {
  return (
    <RoutesList />
  );
}

export default App;
