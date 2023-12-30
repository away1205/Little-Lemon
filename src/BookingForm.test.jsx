import { render, screen } from '@testing-library/react';
import BookingForm from './Components/Booking/BookingForm';
import { MantineProvider } from '@mantine/core';

test('renders Booking Form Heading', () => {
  render(
    <MantineProvider>
      <BookingForm />
    </MantineProvider>
  );
  const headingElement = screen.getByText(/RESERVE YOUR TABLE!/i);
  expect(headingElement).toBeInTheDocument();
});
