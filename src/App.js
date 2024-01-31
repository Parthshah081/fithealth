// App.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import HeroSection from './components/HeroSection';
import ConsultationForm from './components/ConsultationForm';
import TestimonialsSection from './components/TestimonialsSection';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [company, setCompany] = useState('');
  const [complaints, setComplaints] = useState('');
  const [previousExperience, setPreviousExperience] = useState(false);
  // const [doctors, setDoctors] = useState([
  //   { id: 1, name: 'Dr. Smith', expertise: 'Orthopedics', city: 'New York' },
  //   { id: 2, name: 'Dr. Johnson', expertise: 'Cardiology', city: 'Los Angeles' },
  //   // Add more doctors as needed
  // ]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  // const [testimonials, setTestimonials] = useState([
  //   { id: 1, comment: 'Great experience with Fix Health!', author: 'John Doe' },
  //   { id: 2, comment: 'Highly recommended services.', author: 'Jane Smith' },
  //   // Add more testimonials as needed
  // ]);
  
  const doctors = useMemo(
    () => [
      { id: 1, name: 'Dr. Smith', expertise: 'Orthopedics', city: 'New York' },
      { id: 2, name: 'Dr. Johnson', expertise: 'Cardiology', city: 'Los Angeles' },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      { id: 1, comment: 'Great experience with Fix Health!', author: 'John Doe' },
      { id: 2, comment: 'Highly recommended services.', author: 'Jane Smith' },
    ],
    []
  );

  // Comment to inform ESLint that these variables are intentionally not used
  // const unusedSetDoctors = setDoctors; 
  // const unusedSetTestimonials = setTestimonials;


  const filterDoctors = useCallback(() => {
    let filtered = doctors.filter(doctor => doctor.city === (city || doctor.city));
    setFilteredDoctors(filtered);
  }, [city, doctors]);

  useEffect(() => {
    filterDoctors();
  }, [city, doctors, filterDoctors]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation (you can customize this based on your requirements)
    if (!name || !phone || !age || !city || !company || !complaints) {
      console.error('Please fill out all the required fields.');
      return;
    }

    // Simulate form submission (replace this with actual API calls if available)
    console.log('Form submitted with the following data:');
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Age:', age);
    console.log('City:', city);
    console.log('Company:', company);
    console.log('Chief Complaints:', complaints);
    console.log('Previous Experience with Physiotherapy:', previousExperience);
    console.log('Selected Doctor:', filteredDoctors.length > 0 ? filteredDoctors[0].name : 'No doctor selected');
  };

  return (
    <div className="dark-theme">
      <Navbar/>
      <HeroSection />
      <ConsultationForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        age={age}
        setAge={setAge}
        city={city}
        setCity={setCity}
        company={company}
        setCompany={setCompany}
        complaints={complaints}
        setComplaints={setComplaints}
        previousExperience={previousExperience}
        setPreviousExperience={setPreviousExperience}
        filteredDoctors={filteredDoctors}
        handleSubmit={handleSubmit}
      />
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
};

export default App;
