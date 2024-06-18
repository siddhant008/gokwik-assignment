export default function validate(value) {
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  let errors = {
    email: '',
    number: ''
  }

  if (value.length) {
    if (isNaN(+value)) {
      if (!validateEmail(value)) {
        errors.email = "Email address is invalid";
      }
    }
    else {
      if(value.length !== 10)
        errors.number = "Number should be of 10 digits."
      else if (!(/^[789]\d{9}$/.test(value)))
        errors.number = "Invalid Number (India)."
    }
  }
  else {
    errors = {}
  }
  return errors;
}
