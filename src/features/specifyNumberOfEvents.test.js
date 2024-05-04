import { loadFeature, defineFeature } from "jest-cucumber";
import {render, waitFor, within} from '@testing-library/react';
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test =>{
    test('When the user hasnt specified a number, 32 events are shown by default', ({ given, when, then }) => {
        given('the user has not specified number of events', () => {

        });
        
        let AppComponent
        when('the user loads the events', () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            expect(EventListDOM).toBeInTheDocument();
        });
        
        then(/^the user will see (\d+) upcoming events by default$/, async (arg0) => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector("#event-list");
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
    });
    
    test('User can change the number of events displayed', ({ given, when, then }) => {
        let AppComponent
        given(/^the user is looking at the default list of (\d+) upcoming events$/, async (arg0) => {    
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector("#event-list");
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
        
        when('the user inputs a new number of events to view', async () => {
            const user = userEvent.setup();
            const AppDOM= AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            const numberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
            await user.type(numberOfEventsInput, '{backspace}{backspace}10')
            
        });
        
        then('the app will show the number of events specified by the user', () => {
            const AppDOM= AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
            expect(allRenderedEventItems.length).toEqual(10);
        });
    });
});