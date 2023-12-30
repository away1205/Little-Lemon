import { DateInput } from '@mantine/dates';
import { isInRange, isNotEmpty, useForm } from '@mantine/form';
import {
  IconCalendarPlus,
  IconClock,
  IconConfetti,
  IconUserPlus,
} from '@tabler/icons-react';
import { NativeSelect, NumberInput } from '@mantine/core';

import Button from '../Button';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import classes from './BookingForm.module.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BookingForm({
  availableTimes = [],
  updateTimes = () => null,
  onBookingData = () => null,
}) {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      date: new Date(),
      time: '',
      numberGuests: 0,
      occasions: '',
      isAgree: false,
    },

    validate: {
      date: isNotEmpty('Date cannot be empty'),
      time: isNotEmpty('Please select your desired time'),
      numberGuests:
        isNotEmpty('Please input your desired number of dinners') &&
        isInRange({ min: 1 }, 'Number of dinners must be 1 or more'),
      occasions: isNotEmpty('Please pick your occasions'),
      isAgree: (value) =>
        value === false
          ? 'Click agree to Terms and Conditions to continue your reserve table process'
          : null,
    },
  });

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }

    updateTimes(form.values.date);
  }, [form.values.date]);

  function handleSubmitData(data) {
    onBookingData(data);
    navigate('/confirmation');
  }

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2>RESERVE YOUR TABLE!</h2>

        <form
          className={classes.inputContainer}
          onSubmit={form.onSubmit((val) => handleSubmitData(val))}
          role='form'
          aria-labelledby='Reserve Form'
          aria-describedby='Form for reserve your table'
        >
          <DateInput
            label='Select Date'
            required
            placeholder='Pick Your Date'
            leftSection={<IconCalendarPlus color='#D9D4D4' />}
            styles={{
              input: {
                backgroundColor: '#495E57',
                borderRadius: '16px',
              },
            }}
            classNames={{
              label: classes.label,
              input: classes.input,
              section: classes.iconSection,
            }}
            {...form.getInputProps('date')}
          />

          <NativeSelect
            required
            label='Select Time'
            leftSection={<IconClock color='#D9D4D4' />}
            classNames={{
              label: classes.label,
              input: classes.input,
              section: classes.iconSection,
            }}
            data={availableTimes}
            {...form.getInputProps('time')}
          />

          <NumberInput
            required
            label='Number of Guests'
            classNames={{
              label: classes.label,
              input: classes.input,
              section: classes.iconSection,
            }}
            leftSection={<IconUserPlus color='#D9D4D4' />}
            hideControls
            {...form.getInputProps('numberGuests')}
          />

          <NativeSelect
            required
            label='Occasions'
            classNames={{
              label: classes.label,
              input: classes.input,
              section: classes.iconSection,
            }}
            data={[
              { label: 'Occasions', value: '' },
              { label: 'Birthday', value: 'birthday' },
              { label: 'Anniversary', value: 'anniversary' },
            ]}
            leftSection={<IconConfetti color='#D9D4D4' />}
            {...form.getInputProps('occasions')}
          />

          <TermsCheckbox
            isAgree={form.values.isAgree}
            onIsAgree={form.setFieldValue}
          />

          <div className={classes.button}>
            <Button width='98%' type={'submit'}>
              Continue
            </Button>
          </div>

          {form.errors.isAgree ? (
            <p style={{ color: 'red' }}>{form.errors.isAgree}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

// eslint-disable-next-line react/prop-types
function TermsCheckbox({ isAgree, onIsAgree }) {
  return (
    <>
      <div>
        <p>Are you agree with our Terms & Conditions ?</p>
        {isAgree ? (
          <div
            className={classes.checkboxContainer}
            onClick={() => onIsAgree('isAgree', false)}
            role='button'
          >
            <p>Yes, I agree</p>
            <img src='/yes.svg' alt='yes icon' />
          </div>
        ) : (
          <div
            className={classes.checkboxContainer}
            onClick={() => onIsAgree('isAgree', true)}
            role='button'
          >
            <p style={{ color: 'red' }}>No, I don&apos;t agree</p>
            <img src='/no.svg' alt='no icon' />
          </div>
        )}
      </div>
    </>
  );
}

export default BookingForm;
