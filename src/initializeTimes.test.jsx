import { MantineProvider } from '@mantine/core';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingPage from './Components/Booking/BookingPage';
import { fetchAPI } from './data/fetchAPI';

test('Validate initializeTimes function to validate returns the correct expected value.', async () => {
  render(
    <MemoryRouter>
      <MantineProvider>
        <BookingPage />
      </MantineProvider>
    </MemoryRouter>
  );

  const expectedValue = await fetchAPI(new Date()).then((data) => data);

  // Get the time input element that use the initializeTimes function
  const timeInputElement = screen.getByLabelText(/Select Time/);

  // Change the timeInputElement to the value that initializeTimes provide
  fireEvent.change(timeInputElement, { target: { value: expectedValue[0] } });

  // Get the display value of the timeInputElement
  const timeDisplayValue = screen.getByDisplayValue(expectedValue[0]);

  // Test the timeInputElement display value with the expected value
  expect(timeDisplayValue).toBeInTheDocument();
});
