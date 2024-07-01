import React from 'react'
import empImage from '../image/Employees.jpg';
import adminImage from '../image/admin.jpg';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div>
      <h1>Hello Admin</h1>
      <div className='row'>
          <div class="col-sm-4 mb-3 mb-sm-0">
          <div className="card" style={{ width: '18rem' }}>
      <img src={empImage} className="card-img-top" alt="EmpImg" style={{ marginRight: '200px' }} />
      <div className="card-body">
        <h5 className="card-title">Admin Login</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/login" className="btn btn-primary">Admin Login</Link>
      </div>
      </div>
    </div>
    <div class="col-sm-4 mb-3 mb-sm-0">
          <div className="card" style={{ width: '18rem' }}>
      <img src={empImage} className="card-img-top" alt="EmpImg" style={{ marginRight: '200px' }} />
      <div className="card-body">
        <h5 className="card-title">Employee List</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/emplist" className="btn btn-primary">Employee List</Link>
      </div>
      </div>
    </div>
    <div class="col-sm-4 mb-3 mb-sm-0">
    <div className="card" style={{ width: '18rem' }}>
      <img src={adminImage} className="card-img-top" alt="EmpImg" style={{ marginRight: '200px' }} />
      <div className="card-body">
        <h5 className="card-title">Add Employee</h5>
        <p className="card-text">Some quick example text to build the card title and make the bulk of the card's content.</p>
        <Link to="/signin" className="btn btn-primary">Add Employee</Link>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}
