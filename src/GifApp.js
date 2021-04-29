import { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { Container } from 'react-bootstrap';

const GifApp = () => {
  const [categories, setCategories] = useState(['Kimetsu no Yaiba']);
  const handleAdd = (newCategory) => {
    const startPosition = 0;
    const isTheSameCategory = (category) => category === newCategory;
    const categoryFound = categories.find(isTheSameCategory);
    if (categoryFound) {
      const indexFoundCategory = categories.findIndex(isTheSameCategory);
      moveInArray(categories, indexFoundCategory, startPosition);
      setCategories([...categories]);
    } else {
      setCategories([newCategory, ...categories]);
    }
  };

  const moveInArray = function (array, from, to) {
    const item = array.splice(from, 1);
    array.splice(to, 0, item[0]);
  };

  return (
    <>
      <Container>
        <h1 className="text-primary mb-3">GifApp</h1>
        <AddCategory setCategories={handleAdd} />
        {categories.map((category) => (
          <div key={category}>
            <GifGrid category={category} />
            <hr className="m-5"></hr>
          </div>
        ))}
      </Container>
    </>
  );
};

export default GifApp;
