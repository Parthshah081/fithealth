// ConsultationForm.js
import React from 'react';
import './ConsultationForm.css'; // Import the CSS file for styling

const ConsultationForm = ({
  name, setName, phone, setPhone, age, setAge,
  city, setCity, company, setCompany, complaints, setComplaints,
  previousExperience, setPreviousExperience, filteredDoctors,setFilteredDoctors, handleSubmit
}) => {
  return (
    <section className="consultation-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="complaints">Chief Complaints:</label>
          <textarea id="complaints" value={complaints} onChange={(e) => setComplaints(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="previousExperience">Previous Experience with Physiotherapy:</label>
          <input type="checkbox" id="previousExperience" checked={previousExperience} onChange={() => setPreviousExperience(!previousExperience)} />
        </div>

        {age >= 40 && (
          <div className="form-group">
            <label htmlFor="doctors">Best Available Doctors:</label>
            <select id="doctors" value={filteredDoctors} onChange={(e) => setFilteredDoctors(e.target.value)}>
              {filteredDoctors.map(doctor => (
                <option key={doctor.id} value={doctor.name}>{doctor.name} - {doctor.expertise} - {doctor.city}</option>
              ))}
            </select>
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ConsultationForm;
