import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const [enteredNam, setEnterdName] = useState('');
  const nameInputRef = useRef()
  const nameInputChangeHandler = (event) => {
    setEnterdName(event.target.value);
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredNam);
    const enterdValue = nameInputRef.current.value;
    console.log(enterdValue);

  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} ref={nameInputRef} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
