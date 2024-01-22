import React from 'react';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Cadastro from "./containers/Cadastro/Cindex";
import Pedidos from "./containers/Pedidos/Pindex";

function RoutePages(){
  return(
    
    <main>
      <Router>
          <Routes>
             <Route path="/" element={<Cadastro />}/>
             <Route  path="/pedidos" element={<Pedidos />}/>
          </Routes>
        
      </Router>
    </main>
  )
}

export default RoutePages;