import { isInRange, isNotEmpty, useForm } from '@mantine/form';
import { IconCalendarPlus, IconClock, IconUserPlus } from '@tabler/icons-react';
import { NumberInput, TextInput } from '@mantine/core';

import Button from '../Button';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import classes from './ConfirmationForm.module.css';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../../data/fetchAPI';

function ConfirmationForm({ bookingData = {} }) {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      fullname: '',
      telephone: '',
    },

    validate: {
      fullname: isNotEmpty('fullname cannot be empty'),
      telephone:
        isNotEmpty(
          'Please input your phone number so we can remind your reserve table'
        ) && isInRange({ min: 1 }, 'Your phone number is not valid'),
    },
  });

  function handleSubmitData(data) {
    submitAPI(data);
    navigate('/thankyou');
  }

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2>YOUR TABLE INFORMATION!</h2>

        <div className={classes.tableInfo}>
          <p>
            <IconCalendarPlus color='gray' />
            {bookingData.date.toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <p>
            <IconClock color='gray' />
            at {bookingData.time}
          </p>
          <p>
            <IconUserPlus color='gray' />
            {bookingData.numberGuests} person
          </p>
        </div>

        <form
          className={classes.inputContainer}
          onSubmit={form.onSubmit((val) => handleSubmitData(val))}
          role='form'
          aria-labelledby='Reserve Form'
          aria-describedby='Form for reserve your table'
        >
          <TextInput
            label='Fullname'
            required
            placeholder='What is your fullname?'
            styles={{
              input: {
                backgroundColor: '#495E57',
                borderRadius: '16px',
              },
            }}
            classNames={{
              label: classes.label,
              input: classes.input,
            }}
            {...form.getInputProps('fullname')}
          />

          <NumberInput
            required
            label='Telephone number'
            placeholder='Where we can remind you?'
            classNames={{
              label: classes.label,
              input: classes.input,
            }}
            hideControls
            {...form.getInputProps('telephone')}
          />

          <div className={classes.button}>
            <Button width='98%' type={'submit'}>
              Reserve the Table
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

export default ConfirmationForm;
