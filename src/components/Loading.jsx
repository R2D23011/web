import { Spinner } from "react-bootstrap";


const Loading = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <Spinner style={{ width: '3rem', height: '3rem' }} />
  </div>
);

export default Loading;