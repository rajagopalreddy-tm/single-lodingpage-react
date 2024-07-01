import React from 'react';
import faviconImage from '../image/favicon-96x96.png';
import empImage from '../image/Employees.jpg';
import adminImage from '../image/admin.jpg';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="container text-center py-5">
      <img src={faviconImage} alt="GIGA App" className="img-fluid mb-4" style={{ maxWidth: '400px' }} /> {/* Use the imported image */}
      <h1 className="display-4 mb-3">Welcome to GIGA App</h1>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae malesuada nulla. Vivamus consequat nibh a libero varius, in rutrum metus malesuada. Nullam dignissim aliquam purus sit amet dapibus.</p>
      <p className="lead">Integer nec semper purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur commodo ipsum et sapien consectetur, nec placerat risus aliquet.</p>
      <div className='row'>
          <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card" style={{ width: '18rem' }}>
      <img src={empImage} className="card-img-top" alt="EmpImg" style={{ marginRight: '200px' }} />
      <div className="card-body">
        <h5 className="card-title">Employee</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/employee" className="btn btn-primary">Employee Home</Link>
      </div>
      </div>
    </div>
    <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card" style={{ width: '18rem' }}>
      <img src={adminImage} className="card-img-top" alt="EmpImg" style={{ marginRight: '200px' }} />
      <div className="card-body">
        <h5 className="card-title">Admin</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/admin" className="btn btn-primary">Admin Home</Link>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}
