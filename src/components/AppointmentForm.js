import React from 'react'
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const AppointmentForm = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <section id="book" className="home-book5">
        <div className="home-heading17">
          <h2 className="home-text69">Book an appointment</h2>
        </div>
        <div className="home-form">
          <div className="home-types1">
            <div className="book-type">
              <span className="home-text71">In person appointment</span>
            </div>
            <div className="book-type">
              <span className="home-text72">Virtual appointment</span>
            </div>
          </div>
          <div className="home-inputs">
            <input
              type="text"
              placeholder="Name"
              autoComplete="name"
              className="input book-input"
            />
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="input book-input"
            />
            <input
              type="tel"
              placeholder="Phone"
              autoComplete="tel"
              className="input book-input"
            />
            <div className="home-date">
              <input
                type="date"
                placeholder="Date"
                className="input book-input"
              />
              <img
                alt="image"
                src="/Icons/calendar-2.svg"
                className="home-image19"
              />
            </div>
            <input
              type="select"
              placeholder="Gender"
              className="input book-input"
            />
            <Box sx={{ minWidth: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Speciality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Cardiology</MenuItem>
          <MenuItem value={20}>Orthopedics</MenuItem>
          <MenuItem value={30}>Pediatrics</MenuItem>
          <MenuItem value={40}>Ophtalmolocy</MenuItem>
        </Select>
      </FormControl>
    </Box>
            <div className="home-lower">
              <div className="home-button">
                <button className="home-book6 button button-main">
                  <span>Book</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AppointmentForm
