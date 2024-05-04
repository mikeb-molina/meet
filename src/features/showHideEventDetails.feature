Feature: Show and Hide Event Details
    Scenario: An event element is collapsed by default
        Given the main page is open
        When the app displays a list of events
        Then the event details are hidden by default

    Scenario: User can expand an event to see details
        Given the user is seeing an event with hidden details
        When the user clicks a button on the desired event to show more information
        Then the event will be expanded to show more detail about the event

    Scenario: User can collapse an event to hide details
        Given the user has selected an event and is looking at the details for the event
        When the user clicks a button to hide the information about this event
        Then the details of the event will dissappear and the user will be returned to the list of upcomming events
        