import React, {useState, useEffect, useRef} from 'react';
import {Link, BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import InstallationPrompt from './pages/InstallationPrompt';
import DetectingInstalledApps from './pages/DetectingInstalledApps';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route index element={<InstallationPrompt />} />
         <Route path="/detectingInstalledApps" index element={<DetectingInstalledApps />} />
        </Routes>
      </BrowserRouter>

      <div>
        <h2>Paths</h2>
        <a href="/" >
          <button>Installation Prompt</button>
        </a>
        <br/><br/>
        <a href="/detectingInstalledApps" >
          <button>Detecting Installed Apps</button>
        </a>
      </div>
    </div>
  );
}

export default App;
