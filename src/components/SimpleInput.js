import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredNam, setEnterdName] = useState('');
  const nameInputChangeHandler = (event) => {
    setEnterdName(event.target.value);
  }
  const formSubmitHandler = (event) => {

  }

  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
