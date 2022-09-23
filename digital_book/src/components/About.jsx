import React from 'react'
import './css/style.css'
const About = () => {
  return (
    <div id='return_maindiv'>
      {/* team Mates */}
      <section>

        <div className='container text-center' >
          <h2>About us</h2>
          <div className='main_line'></div>
          <div className='text-center m-5'>
            <h6>This project has been developed by civil Engineering student 
              taking the initiative to simplify the design work in steel structure.
            </h6>
          </div>
          {/* team members div start */}
          <div >
          <h3>Team Members</h3>
          <div className='main_line'></div>
         
          <ul type='none' className='d-flex justify-content-center m-3'>
          <h4><span class="badge bg-secondary m-3 ">Sagar Chavan</span></h4>
          <h4><span class="badge bg-secondary m-3">Sejal Patil</span></h4>
          <h4><span class="badge bg-secondary m-3">Janvi Rajguru</span></h4>
          <h4><span class="badge bg-secondary m-3">Shubham Kadu</span></h4>
          </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About