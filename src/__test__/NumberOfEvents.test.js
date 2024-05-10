import { render } from "@testing-library/react";
import { getEvents } from "./api";
import NumberOfEvents from '../components/NumberOfEvents'
import userEvent from "@testing-library/user-event";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents 
            setCurrentNOE={() => {}} 
            setErrorAlert={() => {}}
            />);
    })

    test('has an element with "textbox" role', () => {
        expect(NumberOfEventsComponent.queryByRole('textbox')).toBeInTheDocument();
    });

    test('renders number of events text input', () => {
        const numberOfEvents = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberOfEvents).toBeInTheDocument();
        expect(numberOfEvents).toHaveClass('number-of-events-input');
    });

    test('default value is 32', () => {
        expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue('32');
    });

    test('update numberOfEvents when user types', async() => {
        const numberOfEvents= NumberOfEventsComponent.queryByRole('textbox');
        const user = userEvent.setup();
        await user.type(numberOfEvents, '{backspace}{backspace}10');
        expect(numberOfEvents).toHaveValue('10');
    });

});