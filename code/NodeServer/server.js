 
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const  http = require('http');
const  methods = require('methods');
const  session = require('express-session');
const  cors = require('cors');
const  passport = require('passport');
const  errorhandler = require('errorhandler');
const  mongoose = require('mongoose');

const faker = require('faker');

var isProduction = process.env.NODE_ENV === 'production';
const app = express();
app.use(cors());
// Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
//app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));
app.use(session({ secret: 'zinderud', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));
if (!isProduction) {
  app.use(errorhandler());
}

if(isProduction){
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/zinderud');
  mongoose.set('debug', true);
}

require('./models/User');
require('./config/passport');

app.use(require('./routes'));

app.use(cookieParser());

var guidGenerator = function() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", " GET, PUT, POST, DELETE");
  next();
});

 
  var doctors = [
      
      { 
            Id: guidGenerator(), 
                Name:     faker.random.words(),
                        Address:     faker.random.words(),
                        Available:       faker.random.boolean(),
                },
  
      { 
            Id: guidGenerator(), 
                Name:     faker.random.words(),
                        Address:     faker.random.words(),
                        Available:       faker.random.boolean(),
                },
  
      { 
            Id: guidGenerator(), 
                Name:     faker.random.words(),
                        Address:     faker.random.words(),
                        Available:       faker.random.boolean(),
                },
  
      { 
            Id: guidGenerator(), 
                Name:     faker.random.words(),
                        Address:     faker.random.words(),
                        Available:       faker.random.boolean(),
                },
  
      { 
            Id: guidGenerator(), 
                Name:     faker.random.words(),
                        Address:     faker.random.words(),
                        Available:       faker.random.boolean(),
                },
  
  ];

app.get('/api/doctors', function (req, res) {  
  res.json({data: doctors})
})

app.get('/api/doctors/:id', function (req, res) {    
  res.json({data: doctors.find((e) => e.Id === req.params.id)})
})

app.post('/api/doctors', function (req, res) {  
  var doctor = req.body;
  doctor.Id = guidGenerator();
  doctors.push(doctor);

  res.json(doctor)
})

app.put('/api/doctors/:id', function (req, res) {   
  var doctor = doctors.find((e) => e.Id === req.params.id);
  doctor.Name = req.body.Name;
  doctor.Address = req.body.Address;
  doctor.Available = req.body.Available;
  res.json(doctor);
})

app.delete('/api/doctors/:id', function (req, res) {  
  doctors = doctors.filter((e) => e.Id !== req.params.id); 

  res.json({id: req.params.id})
})
  var programUsers = [
      
      { 
            Id: guidGenerator(), 
                tc:     faker.random.words(),
                        Name:     faker.random.words(),
                        last_name:     faker.random.words(),
                        gander:     faker.random.words(),
                        birth_at:     faker.random.words(),
                        bio:     faker.random.words(),
                    DoctorId: doctors[0].Id,
    
 
                  },
  
      { 
            Id: guidGenerator(), 
                tc:     faker.random.words(),
                        Name:     faker.random.words(),
                        last_name:     faker.random.words(),
                        gander:     faker.random.words(),
                        birth_at:     faker.random.words(),
                        bio:     faker.random.words(),
                    DoctorId: doctors[1].Id,
    
 
                  },
  
      { 
            Id: guidGenerator(), 
                tc:     faker.random.words(),
                        Name:     faker.random.words(),
                        last_name:     faker.random.words(),
                        gander:     faker.random.words(),
                        birth_at:     faker.random.words(),
                        bio:     faker.random.words(),
                    DoctorId: doctors[2].Id,
    
 
                  },
  
      { 
            Id: guidGenerator(), 
                tc:     faker.random.words(),
                        Name:     faker.random.words(),
                        last_name:     faker.random.words(),
                        gander:     faker.random.words(),
                        birth_at:     faker.random.words(),
                        bio:     faker.random.words(),
                    DoctorId: doctors[3].Id,
    
 
                  },
  
      { 
            Id: guidGenerator(), 
                tc:     faker.random.words(),
                        Name:     faker.random.words(),
                        last_name:     faker.random.words(),
                        gander:     faker.random.words(),
                        birth_at:     faker.random.words(),
                        bio:     faker.random.words(),
                    DoctorId: doctors[4].Id,
    
 
                  },
  
  ];

app.get('/api/programUsers', function (req, res) {  
  res.json({data: programUsers})
})

app.get('/api/programUsers/:id', function (req, res) {    
  res.json({data: programUsers.find((e) => e.Id === req.params.id)})
})

app.post('/api/programUsers', function (req, res) {  
  var programUser = req.body;
  programUser.Id = guidGenerator();
  programUsers.push(programUser);

  res.json(programUser)
})

app.put('/api/programUsers/:id', function (req, res) {   
  var programUser = programUsers.find((e) => e.Id === req.params.id);
  programUser.tc = req.body.tc;
  programUser.Name = req.body.Name;
  programUser.last_name = req.body.last_name;
  programUser.gander = req.body.gander;
  programUser.birth_at = req.body.birth_at;
  programUser.bio = req.body.bio;
  programUser.DoctorId = req.body.DoctorId;
  res.json(programUser);
})

app.delete('/api/programUsers/:id', function (req, res) {  
  programUsers = programUsers.filter((e) => e.Id !== req.params.id); 

  res.json({id: req.params.id})
})
  var patients = [
      
      { 
            Id: guidGenerator(), 
                Name:     faker.random.words(),
                        Address:     faker.random.words(),
                        Age:         faker.random.number(),
                    History:     faker.random.words(),
                    DoctorId: doctors[0].Id,
    
 
                    ProgramUserId: programUsers[0].Id,
    
 
                  },
  
      { 
            Id: guidGenerator(), 
                Name:     faker.random.words(),
                        Address:     faker.random.words(),
                        Age:         faker.random.number(),
                    History:     faker.random.words(),
                    DoctorId: doctors[1].Id,
    
 
                    ProgramUserId: programUsers[1].Id,
    
 
                  },
  
      { 
            Id: guidGenerator(), 
                Name:     faker.random.words(),
                        Address:     faker.random.words(),
                        Age:         faker.random.number(),
                    History:     faker.random.words(),
                    DoctorId: doctors[2].Id,
    
 
                    ProgramUserId: programUsers[2].Id,
    
 
                  },
  
      { 
            Id: guidGenerator(), 
                Name:     faker.random.words(),
                        Address:     faker.random.words(),
                        Age:         faker.random.number(),
                    History:     faker.random.words(),
                    DoctorId: doctors[3].Id,
    
 
                    ProgramUserId: programUsers[3].Id,
    
 
                  },
  
      { 
            Id: guidGenerator(), 
                Name:     faker.random.words(),
                        Address:     faker.random.words(),
                        Age:         faker.random.number(),
                    History:     faker.random.words(),
                    DoctorId: doctors[4].Id,
    
 
                    ProgramUserId: programUsers[4].Id,
    
 
                  },
  
  ];

app.get('/api/patients', function (req, res) {  
  res.json({data: patients})
})

app.get('/api/patients/:id', function (req, res) {    
  res.json({data: patients.find((e) => e.Id === req.params.id)})
})

app.post('/api/patients', function (req, res) {  
  var patient = req.body;
  patient.Id = guidGenerator();
  patients.push(patient);

  res.json(patient)
})

app.put('/api/patients/:id', function (req, res) {   
  var patient = patients.find((e) => e.Id === req.params.id);
  patient.Name = req.body.Name;
  patient.Address = req.body.Address;
  patient.Age = req.body.Age;
  patient.History = req.body.History;
  patient.DoctorId = req.body.DoctorId;
  patient.ProgramUserId = req.body.ProgramUserId;
  res.json(patient);
})

app.delete('/api/patients/:id', function (req, res) {  
  patients = patients.filter((e) => e.Id !== req.params.id); 

  res.json({id: req.params.id})
})
  var addresses = [
      
      { 
            Id: guidGenerator(), 
                phone:     faker.random.words(),
                        email:     faker.random.words(),
                        web:     faker.random.words(),
                        gander:     faker.random.words(),
                        birth_at:     faker.random.words(),
                        Addresss:     faker.random.words(),
                  },
  
      { 
            Id: guidGenerator(), 
                phone:     faker.random.words(),
                        email:     faker.random.words(),
                        web:     faker.random.words(),
                        gander:     faker.random.words(),
                        birth_at:     faker.random.words(),
                        Addresss:     faker.random.words(),
                  },
  
      { 
            Id: guidGenerator(), 
                phone:     faker.random.words(),
                        email:     faker.random.words(),
                        web:     faker.random.words(),
                        gander:     faker.random.words(),
                        birth_at:     faker.random.words(),
                        Addresss:     faker.random.words(),
                  },
  
      { 
            Id: guidGenerator(), 
                phone:     faker.random.words(),
                        email:     faker.random.words(),
                        web:     faker.random.words(),
                        gander:     faker.random.words(),
                        birth_at:     faker.random.words(),
                        Addresss:     faker.random.words(),
                  },
  
      { 
            Id: guidGenerator(), 
                phone:     faker.random.words(),
                        email:     faker.random.words(),
                        web:     faker.random.words(),
                        gander:     faker.random.words(),
                        birth_at:     faker.random.words(),
                        Addresss:     faker.random.words(),
                  },
  
  ];

app.get('/api/addresses', function (req, res) {  
  res.json({data: addresses})
})

app.get('/api/addresses/:id', function (req, res) {    
  res.json({data: addresses.find((e) => e.Id === req.params.id)})
})

app.post('/api/addresses', function (req, res) {  
  var address = req.body;
  address.Id = guidGenerator();
  addresses.push(address);

  res.json(address)
})

app.put('/api/addresses/:id', function (req, res) {   
  var address = addresses.find((e) => e.Id === req.params.id);
  address.phone = req.body.phone;
  address.email = req.body.email;
  address.web = req.body.web;
  address.gander = req.body.gander;
  address.birth_at = req.body.birth_at;
  address.Addresss = req.body.Addresss;
  res.json(address);
})

app.delete('/api/addresses/:id', function (req, res) {  
  addresses = addresses.filter((e) => e.Id !== req.params.id); 

  res.json({id: req.params.id})
})

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});
app.listen(3000, function () {
  console.log('zinderud node server listening on port 3000!')
})