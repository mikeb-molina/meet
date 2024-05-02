import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user has selected a city', () => {

        });

        when('the city page loads', () => {

        });

        then('the user will see a list of upcoming events for that city', () => {

        });
    });

    test('User can expand an event to see details', ({ given, when, then }) => {
        given('the user is seeing a list of events for a specific city', () => {

        });

        when('the user clicks a button on the desired event to show more information', () => {     

        });

        then('the event will be expanded to show more detail about the event', () => {

        });
    });

    test('User can collapse an event to hide details', ({ given, when, then }) => {
        given('the user has selected an event and is looking at the details for the event', () => {
        });

        when('the user clicks a button to hide the information about this event', () => {

        });

        then('th edetails of the event will dissappear and the user will be returned to the list of upcomming events', () => {

        });
    });
});