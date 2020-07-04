import React from 'react';
import './App.css';
import TransferJobs from './components/TransferJobs';
import ArweaveGateways from './components/Arweave';


function App() {
  return (
    <div className="App">
      <h1>Skale - Arweave Bridge</h1>
      <ArweaveGateways />
      <TransferJobs />
    </div>
  );
}

export default App;
