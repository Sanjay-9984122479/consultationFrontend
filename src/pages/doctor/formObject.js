import { States } from "../../constant/appConstant";


  export const DoctorFields = [{
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
    type:"option",
    value:"",
    label:"Doctor Type",
     key:"doctorType",
     list:["internal","external"]
  },
  {
    type:"text",
    value:"",
    label:"fees",
     key:"fees"
  },
  {
    type:"text",
    value:"",
    label:"Reg Number",
     key:"regNo"
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
    label:"Experience(in year)",
    key:'experience'
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
    label:"specialization",
    key :'specialization'
  },
  {
    type:"option",
    value:"",
    label:"Availability Days",
    key :'availability',
    list:[4,5,6,7,8,9,10]
  },
  {
    type:"text",
    value:"",
    label:"From Time",
    key:'fromTime',
    placeholder:"9:00"
  },
  {
    type:"text",
    value:"",
    label:"To Time",
     key:"toTime",
     placeholder:"12:00"
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