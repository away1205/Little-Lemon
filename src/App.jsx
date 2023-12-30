import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Home/Homepage';
import BookingPage from './Components/Booking/BookingPage';
import { useState } from 'react';
import ConfirmationPage from './Components/Confirmation/ConfirmationPage';
import ThankyouPage from './Components/Thankyou/ThankyouPage';

function App() {
  const [bookingData, setBookingData] = useState({});

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route
            path='/reserve'
            element={
              <BookingPage
                onBookingData={setBookingData}
                bookingData={bookingData}
              />
            }
          />
          <Route
            path='/confirmation'
            element={
              <ConfirmationPage
                onBookingData={setBookingData}
                bookingData={bookingData}
              />
            }
          />
          <Route path='/thankyou' element={<ThankyouPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
