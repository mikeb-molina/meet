Feature: Specify Number of Events
    Scenario: When the user hasnt specified a number, 32 events are shown by default
        Given the user selects a city to view upcoming events
        When the user loads the city page
        Then the user will see 32 upcoming events by default
    
    Scenario: User can change the number of events displayed
        Given the user is looking at the default list of 32 upcoming events
        When the user inputs a new number of events to view
        Then the app will show the number of events specified by the user