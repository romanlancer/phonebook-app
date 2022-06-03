import { SpinnerDotted } from 'spinners-react';
import { FaRegHandshake } from 'react-icons/fa';

const LoadingScreen = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle ">
      <div className="d-flex align-items-center mb-4">
        <strong className="fs-2">
          Welcome <FaRegHandshake size={50} color={'black'} /> to Contacts app.
          Now loading...
        </strong>
      </div>
      <div className="d-flex justify-content-center">
        {' '}
        <SpinnerDotted size={120} color={'black'} speed={150} />
      </div>
    </div>
  );
};

export default LoadingScreen;
