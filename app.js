const express= require('express');
const app= express();

app.listen (3000)
const employees =require('./db/employees');
app.get('/', (req,res) => {
  res.send('Hello Employees!');

});

app.get('/employees', (req,res) => {
  res.json(employees);
});

app.get ('/employees/random', (req,res) => {
  const index= Math.floor(Math.random() * employees.length);
  res.json(employees[index]);
});

app.get ('/employees/:id', (req,res) => {
  const id= Number(req.params.id);
  const employee = employees.find(emp => emp.id ===id);

  if (!employee) {
    return res.status(404).send('Employee not found');
  }

  res.json(employee);
})

module.exports= app;