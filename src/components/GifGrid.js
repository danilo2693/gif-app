import { useFetchGifs } from '../hooks/useFetchGifs';
import { Row, Col } from 'react-bootstrap';
import { Gif } from './Gif';
export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  return (
    <>
      <h3 className="text-info">{category}</h3>
      {loading ? (
        <div className="animate__animated animate__flash">
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <p className="text-center">Loading...</p>
        </div>
      ) : (
        <Row className="animate__animated animate__fadeIn">
          {images.map((gif) => (
            <Col key={gif.id} md={4}>
              <Gif {...gif} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
