
const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const port =3000
app.use(bodyParser.json());
const patients = [];

app.post('/register_patients', (req, res) => {
  const data = req.body;

  // validating the required fields
  if (!data.patient_id || !data.date_time || !data.encounter_type) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // checking if patient already exists
  const existingPatient = patients.find(patient => patient.patient_id === data.patient_id);
  if (existingPatient) {
    return res.status(400).json({ error: 'Patient already registered' });
  }

  const newPatient = {
    patient_id: data.patient_id,
    date_time: data.date_time,
    encounter_type: data.encounter_type,
    encounters: []  // Initializing encounters array for the new patient
  };

  const newEncounter = {
    date_time: data.date_time,
    encounter_type: data.encounter_type
  };

  newPatient.encounters.push(newEncounter);
  patients.push(newPatient);

  return res.status(201).json({ message: 'Encounter started successfully' });
});

app.post('/submit_vitals', (req, res) => {
  const data = req.body;

  // Validate required fields
  if (!data.patient_id || !data.date_time || !data.blood_pressure || !data.temperature || !data.pulse || !data.SP02) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Check if patient and encounter exist
  const patient = patients.find(patient => patient.patient_id === data.patient_id);
  if (!patient) {
    return res.status(404).json({ error: 'Patient not found' });
  }

  const encounter = patient.encounters.find(encounter => encounter.date_time === data.date_time);
  if (!encounter) {
    return res.status(404).json({ error: 'Encounter not found' });
  }

  const newVitals = {
    blood_pressure: data.blood_pressure,
    temperature: data.temperature,
    pulse: data.pulse,
    SP02: data.SP02
  };

  encounter.vitals.push(newVitals);
  return res.status(201).json({ message: 'Vitals submitted successfully' });
});



app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
