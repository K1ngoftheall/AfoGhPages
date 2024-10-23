import React, { useState, useEffect } from "react";
import items from "./data/data.json";
import TableProducts from "./TableProducts";
import classes from "./App.module.css";

function App() {
  const [cards, setCards] = useState([]);
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    setLoaded(false);
    setCards(items);
    setLoaded(true);
  }, []);  



  return (
    <div className={classes.app}>
      <TableProducts cards={cards} loaded={loaded}/>
    </div>
  );
}

export default App;

