import { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { Container } from 'react-bootstrap';

const GifApp = () => {
  const [categories, setCategories] = useState(['Kimetsu no Yaiba']);
  const handleAdd = (newCategory) => {
    setCategories([newCategory, ...categories]);
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
