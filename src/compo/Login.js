import React from 'react';

export default function Login() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
      <div style={{ border: '1px solid #ccc', padding: '40px', borderRadius: '10px', maxWidth: '600px' }}>
        <form>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label><br/>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label><br/>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}
