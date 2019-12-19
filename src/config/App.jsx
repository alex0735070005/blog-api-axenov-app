import React from 'react';
import Paper from '@material-ui/core/Paper';
import Router from './Router';
import Header from '../components/modules/Header';
import Footer from '../components/modules/Footer';
import '../components/shared/styles.scss';

function App() {
  const res = { a: 5, c: 10, b: 'hello' };

  return (
    <div className="App">
      {res.b || 'hello'}
      <div className="container">
        <Header />
        <Paper className="page">
          <Router />
        </Paper>
        <Footer />
      </div>
    </div>
  );
}

export default App;
