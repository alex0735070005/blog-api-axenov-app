import React from 'react';
import Router from './Router';
import Paper from '@material-ui/core/Paper';
import Header from '../components/modules/Header';
import Footer from '../components/modules/Footer';
import '../components/shared/styles.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Paper className="page" >
          <Router />
        </Paper>
        <Footer />
      </div>
    </div>
  );
}

export default App;
