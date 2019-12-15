import React from 'react';
import ApiList from './components/ApiList';

import './styles.scss';


const Home = () => (
  <div className="home">
    <h1>API DATA URLS</h1>
    {<ApiList />}
  </div>
)
export default Home;