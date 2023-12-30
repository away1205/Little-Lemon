import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { MemoryRouter } from 'react-router-dom';

import BookingPage from './Components/Booking/BookingPage';
import { fetchAPI } from './data/fetchAPI';

test('updateTimes returns the same value with expected value in the specified date provided', async () => {
  render(
    <MemoryRouter>
      <MantineProvider>
        <BookingPage />
      </MantineProvider>
    </MemoryRouter>
  );

  const expectedTime = await fetchAPI(new Date()).then((data) => data);

  // Find the date input element by its associated label
  const dateInputElement = screen.getByLabelText(/Select Date/);

  // Simulate a user changing the value of the date input
  fireEvent.change(dateInputElement, { target: { value: '2023-12-31' } });

  // Find the time input element by its associated label
  const timeInputElement = screen.getByLabelText(/Select Time/);

  // Simulate a user changing the value of the time input
  fireEvent.change(timeInputElement, { target: { value: expectedTime[0] } });

  // Use getByText to find the selected option by its text content
  const selectedOption = screen.getByText(expectedTime[0]);

  // Wait for the component to update
  await waitFor(() => {
    // Assert that the value has been set
    expect(selectedOption).toBeInTheDocument();
  });
});
