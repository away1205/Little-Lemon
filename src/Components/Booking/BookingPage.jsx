import { useCallback, useEffect, useReducer } from 'react';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import HeroSection from '../Home/HeroSection';
import BookingForm from './BookingForm';
import { fetchAPI } from '../../data/fetchAPI';

const initializeTimes = () => {
  return {
    availableTimes: [],
    isLoading: false,
  };
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'loading':
      return { ...state, isLoading: true };
    case 'loaded':
      return { ...state, availableTimes: payload };
    default:
      return state;
  }
}

function BookingPage({ onBookingData = () => null, bookingData = [] }) {
  const [{ availableTimes, isLoading }, dispatch] = useReducer(
    reducer,
    initializeTimes()
  );

  const updateTimes = useCallback((date) => {
    dispatch({ type: 'loading' });
    try {
      fetchAPI(date).then((data) =>
        dispatch({
          type: 'loaded',
          payload: data,
        })
      );
    } catch (error) {
      console.log('error');
    }
  }, []);

  useEffect(() => {
    fetchAPI(new Date()).then((data) =>
      dispatch({ type: 'loaded', payload: data })
    );
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <BookingForm
        availableTimes={availableTimes}
        isLoading={isLoading}
        updateTimes={updateTimes}
        onBookingData={onBookingData}
      />
      <Footer />
    </>
  );
}

export default BookingPage;
