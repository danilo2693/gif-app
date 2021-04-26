import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { useState } from 'react';

const AddCategory = ({ setCategories }) => {
  const maxCharacters = 2;
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => setInputValue(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length > maxCharacters) {
      setCategories(inputValue);
      setInputValue('');
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" value={inputValue} onChange={handleInputChange} placeholder="Search GIFs..." autoComplete="off" />
      </Form.Group>
    </Form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
