import { useCallback, useState } from 'react';
import { debounce, omit } from 'lodash';
import { IUseForm } from '../interfaces/IUseForm';

const useForm = (callback: any) => {
  //Form values
  const [values, setValues] = useState({});
  //Errors
  const [errors, setErrors] = useState<IUseForm>({ name: '', email: '', password: '' });
  const [isError, setIsError] = useState(false);

  const validate = useCallback(
    debounce((event: any, name: string, value: any) => {
      //A function to validate each input values

      switch (name) {
        case 'name':
          if (value.length <= 4) {
            // we will set the error state

            setErrors({
              ...errors,
              name: '* Username atleast have 5 letters',
            });
            setIsError(true);
          } else {
            // set the error state empty or remove the error for username input
            setIsError(false);
            //omit function removes/omits the value from given object and returns a new object
            let newObj = omit(errors, 'name');
            setErrors(newObj);
          }
          break;

        case 'email':
          if (
            !new RegExp(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            ).test(value)
          ) {
            setErrors({
              ...errors,
              email: '* Enter a valid email address',
            });
            setIsError(true);
          } else {
            setIsError(false);
            let newObj = omit(errors, 'email');
            setErrors(newObj);
          }
          break;

        case 'password':
          if (!new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)) {
            setErrors({
              ...errors,
              password:
                '* Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers',
            });
            setIsError(true);
          } else {
            setIsError(false);
            let newObj = omit(errors, 'password');
            setErrors(newObj);
          }
          break;

        default:
          break;
      }
    }, 400),
    [values],
  );

  //A method to handle form inputs
  const handleChange = (event: any) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    //Let's set these values in state
    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      alert('There is an Error!');
    }
  };

  return {
    values,
    errors,
    isError,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
