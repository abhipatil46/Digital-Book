import React from 'react'
import './css/style.css'
const Contact = () => {
  return (
    <div className='container mb-3'>
      <section>
        <div className="text-center">
          <h2>Contact Us</h2>
          <div className="main_line "></div>
          {/* from start here */}
          <div className="main_from d-flex m-3">
            <div className="from_start col-md-6">
              <form method="post" id="form1" className=" needs-validation">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required name="name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" required name="email" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-control" id="" name="subject" required />
                </div>
                <div className="form-floating">
                  <textarea className="form-control" style={{ height: '100px' }} name="message" required></textarea>
                  <label htmlFor="floatingTextarea2">Message</label>
                </div>
                <div className="mx-auto mt-4 mb-5">
                  <button className="btn btn-success" type="submit" name="submit">Send Message</button>
                </div>
              </form>
            </div>

            {/* contact info start */}
            <div className='contactinfo col-md-6 m-3 '>
              <h4>Contact Info</h4><br />
              <h5>Address</h5><br />
              <p>203,Mit College, Aurangabad, Maharashtra,India</p>
              <br />
              <h5>Phone</h5>
              <p style={{ color: '#fd5d52' }}>91+ 9561966060</p><br />
              <h5>Email Address</h5>
              <p style={{ color: '#fd5d52' }}>sagarchavan644441@gmail.com</p><br />

            </div>

          </div>
        </div>
      </section>

      <div className='m-5'><br/></div>
  

    </div>
  )
}

export default Contact