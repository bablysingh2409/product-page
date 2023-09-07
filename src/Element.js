import { useParams } from 'react-router-dom';
import { Items } from './Data/ItemData';

function Element() {
  const { id } = useParams();
  const item = Items.find((item) => item.id === id);

  return (
    <>
      <div>Element</div>
      <h1>{item.title}</h1>
      <br />
      <p>{item.description}</p>
    </>
  );
}

export default Element;
