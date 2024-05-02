import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test =>{
    test('When the user hasnt specified a number, 32 events are shown by default', ({ given, when, then }) => {
                given('the user selects a city to view upcoming events', () => {
        
                });
        
                when('the user loads the city page', () => {
        
                });
        
                then(/^the user will see (\d+) upcoming events by default$/, (arg0) => {
        
                });
            });
    
    test('User can change the number of events displayed', ({ given, when, then }) => {
                given(/^the user is looking at the default list of (\d+) upcoming events$/, (arg0) => {    
        
                });
        
                when('the user inputs a new number of events to view', () => {
        
                });
        
                then('the app will show the number of events specified by the user', () => {
        
                });
            });
});