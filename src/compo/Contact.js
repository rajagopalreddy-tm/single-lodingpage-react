import React from 'react'

export default function Contact() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
            <div style={{ border: '1px solid #ccc', padding: '40px', borderRadius: '10px', maxWidth: '600px' }}>

        <form>
            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Reason</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
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
        <button type="submit" className="btn btn-primary">Let's talk</button>
        </form>
    </div>
    </div>
  )
}
