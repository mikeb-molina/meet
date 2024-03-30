#Objective:
    To build a serverless, progressive web application (PWA) with Raect using a test-driven development (TDD) technique. The application uses the Google Calendat API to fetch upcoming events.


#User Stories:

##1: Filter Events by City. 
	As a user,
	I should be able to filter events by city,
	So that I can see a list of events taking place in that city.
	
##2: Show/Hide Event Details. 
As a user,
I should be able to show and hide event details
So that I can look into each event and see more information.

##3: Specify Number of Events. 
	As a user,
	I should be able to specify a number of events shown to me,
	So that I am not overwhelmed with information and can select a certain number to see at one time.

##4: Use the App When Offline.
	As a user,
 	I should be able to use the app while offline,
	So that I am able to see the events in my city even if I am not connected to an internet source.

##5: Add an App Shortcut to the Home Screen. 
	As a user,
	I should be able to add the app to my home screen,
	So that I always have easy access to see new events in my city.

##6: Display Charts Visualizing Event Details.
	As a user,
 	I should be able to see charts visualizing details of each event,
	So that I can see the information of each event in a way that is clear and precise.



#Gherkins Syntax:

##1 Filter events by city.
Scenario 1: When the user hasn’t searched for a city, show upcoming events from all cities. 
-Given the user hasn’t searched for any city;
-When the user opens the app;
-Then the user should see a list of upcoming events.

##Scenario 2: User should see a list of suggestions when they search for a city.
		-Given the main page is open;
		-When the user starts typing in the city textbox;
		-Then the user should receive a list of cities that matched what they’ve typed.

##Scenario 3: User can select a city from the suggested list. 
		-Given the user was typing “Berlin” in the city box AND the list of suggested cities is showing;
		-When the user selects a city from the list;
		-Then their city should be changed to that city AND the user should receive a list of upcoming events in that city.

##2 Show/Hide Event Details

Scenario 1: An event element is collapsed by default.
		-Given the user has selected a city;
		-When the city page loads;
		-Then the user will see a list of upcoming events for that city.

Scenario 2: User can expand an event to see details.
		-Given the user is seeing a list of events for a specific city;
		-When the user clicks a button on the desired event to show more information;
		-Then the event will be expanded to show more detail about the event.

Scenario 3: User can collapse an event to hide details.
		-Given the user has selected an event and is looking at the details for the event;
		-When the user clicks a button to hide the information about this event;
		-Then the details of the event will disappear and the user will be returned to the list of upcoming events.

##3 Specify Number of Events

Scenario 1: When the user hasn’t specified a number, 32 events are shown by default.
		-Given the user selects a city to view upcoming events;
		-When the user loads the city page;
		-Then the user will see 32 upcoming events by default.

Scenario 2: User can change the number of events displayed.
		-Given the user is looking at the default list of 32 upcoming events;
		-When the user inputs a new number of events to view;
		-Then the app will show the number of events specified by the user.

##4 Use the App When Offline

Scenario 1: Show cached data when there’s no internet connection.
		-Given the user is trying to view the app with no internet connection;
		-When the user opens the app;
        -Then the app will use the cached data to populate the information for the most recent or saved city search.

Scenario 2: Show error when user changes search settings (city, number of events).
		-Given the user is trying to view the app with no internet connection;
		-When the user tries to change the search criteria;
		-The app will return an error message with a message stating the app is offline.

##5 Add an App Shortcut to Home Screen 
Scenario 1: User can install the meet app as a shortcut on their device home screen.
		-Given the user clicks the “create shortcut” button;
		-When the user goes back to their home screen;
		-Then the user will see a shortcut button to the meet app on their home screen.

##6 Display Charts Visualizing Event Details
Scenario 1: Show a chart with the number of upcoming events in each city.
		-Given the user has searched for events in a specific city;
		-When the user clicks a button to show more details about an event;
		-Then the information displayed will also include a chart visualizing the details of the event.