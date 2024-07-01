import React from 'react';

export default function Signin() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
    <div style={{ border: '1px solid #ccc', padding: '40px', borderRadius: '10px', maxWidth: '600px' }}>
      <form>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" />
          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-3 pt-0">Gender</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
              <label className="form-check-label" htmlFor="gridRadios1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
              <label className="form-check-label" htmlFor="gridRadios2">
                Female
              </label>
            </div>
          </div>
        </fieldset>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-0">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1">
              I agree to your privacy policy.
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </div>
  </div>
  );
}
