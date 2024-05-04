import { loadFeature, defineFeature } from "jest-cucumber";
import {render, waitFor, within} from '@testing-library/react';
import App from "../App";
import Event from "../components/Event";
import { getEvents } from "../__test__/api";
import userEvent from "@testing-library/user-event";
import CitySearch from "../components/CitySearch";

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppComponent;
        given('the main page is open', () => {
            AppComponent = render(<App />)
        });

        when('the app displays a list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            })
        });

        then('the event details are hidden by default', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        given('the user is seeing an event with hidden details', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />)
            expect(EventComponent.container.querySelector('details')).not.toBeInTheDocument();
        });

        when('the user clicks a button on the desired event to show more information', async () => {     
            const showDetails = EventComponent.queryByText('show details');
            const user = userEvent.setup();
            await user.click(showDetails);
        });

        then('the event will be expanded to show more detail about the event', async () => {
            const user= userEvent.setup();
            const button = EventComponent.queryByText('Show Details');
            await user.click(button);
            const details = EventComponent.container.querySelector('.details');
            expect(details).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        given('the user has selected an event and is looking at the details for the event', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            const user= userEvent.setup();
            const button = EventComponent.queryByText('Show Details');
            await user.click(button);
            const details = EventComponent.container.querySelector('.details');
            expect(details).toBeInTheDocument();
        });

        when('the user clicks a button to hide the information about this event', async () => {
            const hideDetails = EventComponent.queryByText('Hide Details');
            const user = userEvent.setup();
            await user.click(hideDetails);
        });

        then('the details of the event will dissappear and the user will be returned to the list of upcomming events', () => {
            expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
            expect(EventComponent.queryByText('Hide Details')).not.toBeInTheDocument();
        });
    });
});