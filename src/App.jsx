import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Home/Homepage';
import BookingPage from './Components/Booking/BookingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/reserve' element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
