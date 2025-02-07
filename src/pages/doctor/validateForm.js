const validationRules = {
    experience: { required: true },
    availability:{required:true},
    name: { required: true, minLength: 3 },
    mobile: { required: true, pattern: /^[6-9]\d{9}$/ }, // Indian mobile number validation
    profile: { required: true, pattern: /^http?:\/\/.+\.(jpg|jpeg|png|gif)$/ }, // Image URL validation
    age: { required: true, pattern: /^\d+$/, min: 1, max: 120 },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    specialization: { required: true },
    fromTime: { required: true, pattern: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/ }, // Time format HH:mm
    toTime: { required: true, pattern: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/ },
    slots: { required: true, minLength: 1 }, // At least one slot should be present
    password: { required: true, minLength: 8 },
  };
  
  const validateForm = (data) => {
    let errors = {};
  
    for (let field in validationRules) {
      let rule = validationRules[field];
      let value = data[field];
  
      if (rule.required && (!value || (Array.isArray(value) && value.length === 0))) {
        errors[field] = `${field} is required`;
        continue;
      }
  
      if (rule.minLength && value.length < rule.minLength) {
        errors[field] = `${field} must be at least ${rule.minLength} characters`;
      }
  
      if (rule.maxLength && value.length > rule.maxLength) {
        errors[field] = `${field} must be at most ${rule.maxLength} characters`;
      }
  
      if (rule.min && Number(value) < rule.min) {
        errors[field] = `${field} must be at least ${rule.min}`;
      }
  
      if (rule.max && Number(value) > rule.max) {
        errors[field] = `${field} must be at most ${rule.max}`;
      }
  
      if (rule.pattern && !rule.pattern.test(value)) {
        errors[field] = `${field} is not valid`;
      }
    }
  
    return errors;
  };
  
  export default validateForm;
  