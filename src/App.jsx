import React, {useState} from "react";
import './App.css';
import SearchForm from './components/SearchForm';
import ListOfGifs from './components/ListOfGifs';
import {Route, useLocation} from "wouter";

function App() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useLocation();

  return (
  <div className="App">
      <section className="App-content">
          <SearchForm 
            keyword={keyword}
            setKeyword={setKeyword}
            location={location}
            setLocation={setLocation}
          />
          <Route path='/gif/:keyword' component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;