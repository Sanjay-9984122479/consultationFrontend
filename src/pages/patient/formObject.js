import { States } from "../../constant/appConstant";


  export const PatientFields = [{
    type:"text",
    value:"",
    label:"Name",
    key:"name"
  },{
    type:"text",
    value:"",
    label:"Mobile No",
     key:"mobile"
  },
  {
    type:"file",
    value:"",
    label:"profile",
     key:"profile"
  },
  
  {
    type:"date",
    value:"",
    label:"dob",
    key:'dob'
  },
  {
    type:"text",
    value:"",
    label:"age (in year)",
    key:'age'
  },
  {
    type:"option",
    value:"",
    label:"Gender",
    key:'gender',
    list:["Male","Female","Other"]
  },
  {
    type:"option",
    value:"",
    label:"Communication",
    key:'communication',
    list:["Hindi","English","Hindi & English"]
  },
 
  {
    type:"text",
    value:"",
    label:"Email",
    key:'email'
  },
  {
    type:"text",
    value:"",
    label:"Occupation",
    key :'occupation'
  },


  {
    type:"option",
    value:"",
    label:"State",
    key:'state',
    list: Object.keys(States)
  },
  {
    type:"option",
    value:"",
    label:"City",
    key:'city',
    list:[]
  },

  {
    type:"textarea",
    value:"",
    label:"Address",
    key:'address'
  },
  
  {
    type:"password",
    value:"",
    label:"password",
    key:'password'
  },
  {
    type:"password",
    value:"",
    label:"confirm Password",
    key:'confirmPassword'
  },
  ]