import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import './App.css';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './__test__/api';
import NumberOfEVents from './components/NumberOfEvents';
import { ErrorAlert, InfoAlert, WarningAlert } from './components/Alert';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';


const App = () => {
const [events, setEvents] = useState([]);
const [currentNOE, setCurrentNOE] = useState(32);
const [allLocations, setAllLocations] = useState([]);
const [currentCity, setCurrentCity] = useState ("See all cities");
const [ infoAlert, setInfoAlert] = useState("");
const [ errorAlert, setErrorAlert] = useState("");
const [ warningAlert, setWarningAlert] = useState("");

useEffect(() =>{
  if(navigator.onLine) {
    setWarningAlert('');
  } else {
    setWarningAlert('You are offline')
  }
  fetchData();
}, [currentCity, currentNOE]);

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
      <div className='alerts-container'>
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
      </div>
      <CitySearch 
      allLocations={allLocations} 
      setCurrentCity={setCurrentCity} 
      setInfoAlert={setInfoAlert}/>
      <NumberOfEVents 
      setCurrentNOE={setCurrentNOE}
      setErrorAlert={setErrorAlert}/>
      <div className='charts-container'>
        <EventGenresChart events={events} />
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} />
    </div>
  );
 };


 
 export default App;
