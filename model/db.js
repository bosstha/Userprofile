const mongoose= require('mongoose');


// mongoose object
const userSchema = new mongoose.Schema({
  // firstName: String,
  // lastName: String,
  // dob: String
  Fullname:{
    type: 'string',
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
    required: true,
    trim: true
  },
  DOB:{
    type: 'string',
    required: true,
    trim: true
  },
Height :{
  type: 'number',
  required:true,
  trim: true
},  
income:{
  type: 'number',
  required:true,
  trim: true
},
monthly_cost:{
  type: 'number',
  required:true,
  trim: true
}
});
module.exports= mongoose.model('customers', userSchema);
 