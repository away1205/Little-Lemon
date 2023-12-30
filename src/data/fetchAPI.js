// Inspired by 'alexismenest' capstone 'mockAPI' logic.
// fetchAPI accepts a JavaScript Date object.
// fetchAPI returns a list of randomly generated available times.
// The times are between 15:00 and 23:30.
// The list always begins with "--- Select a Time---"
// I found this useful for debugging.
//
// submitAPI always returns 'true'.

const seededGenerator = (date, hour) => {
  const m = 9;
  const d = date.getDate();
  const result = ((d + hour) % m) / 10;

  return result;
};

const fetchAPI = (date) => {
  return new Promise((resolve) => {
    let result = [];

    result.push('Select Your Desired Time');

    for (let hour = 15; hour <= 23; hour++) {
      if (seededGenerator(date, hour) < 0.5) result.push(hour + ':00');
      if (seededGenerator(date, hour + 7) < 0.5) result.push(hour + ':30');
    }

    resolve(result);
  });
};

const submitAPI = (formData) => true;

export { fetchAPI, submitAPI };
