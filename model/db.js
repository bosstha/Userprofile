const mongoose= require('mongoose');


// mongoose object
const userSchema = new mongoose.Schema({
  Fullname:{
    type: 'string',
    unique: true,
    required: true,
    trim: true
  },
  Email:{
    type: 'string',
    unique: true,
    required: true,
    trim: true
  },
  Age:{
    type: 'number',
    unique: true,
    required: true,
    trim: true
  },
  DOB:{
    type: 'string',
    unique: true,
    required: true,
    trim: true
  },
Height :{
  type: 'number',
  unique: true,
  required:true,
  trim: true
},  
income:{
  type: 'number',
  unique: true,
  required:true,
  trim: true
},
monthly_cost:{
  type: 'number',
  unique: true,
  required:true,
  trim: true
}
});
module.exports= mongoose.model('User', userSchema);
 