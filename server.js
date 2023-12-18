
const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const port =3000
app.use(bodyParser.json());
const patients = [];

app.post('/register_patients', (req, res) =>{
  const data = req.body;
})
//validating the required fields
if (!data.patient_id || !data.date_time ||!data.encounter_type){
return res.status(400).json({error: "Missing required fields"});

}
// checking if patient already exists

const existingPatient = patients.find(patient => patient.patient_id === data.patient_id);
if (existingPatient){retun res.status(400).json({error: 'patient already registered'});}


const newPatient = {
  patient_id : data.patient_id,
  date_time:data.date_time,
  encounter_type: data.encounter_type

};



const newEncounter = {
  date_time: data.date_time,
   encounter_type: data.encounter_type} ;

patient.encounters.push(newEncounter);
return res.status(201).json({message:'Encounter started succesfully'});
gjkf

app.listen(3000,
  ()=> {console.log('server is running on port ${3000}');n});