import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import './App.css';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './__test__/api';
import NumberOfEVents from './components/NumberOfEvents';

const App = () => {
const [events, setEvents] = useState([]);
const [currentNOE, setCurrentNOE] = useState(32);
const [allLocations, setAllLocations] = useState([]);
const [currentCity, setCurrentCity] = useState ("See all cities");

useEffect(() =>{
  fetchData();
}, [currentCity]);

const fetchData= async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }


  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEVents setCurrentNOE={setCurrentNOE}/>
      <EventList events={events} />
    </div>
  );
 };


 
 export default App;
