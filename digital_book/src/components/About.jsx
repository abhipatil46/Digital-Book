import React from 'react'
import '../App.css'
const About = () => {
  return (
    <div>
      {/* team Mates */}
      <section>

        <div className='container text-center'>
          <h2>About us</h2>
          <div className='main_line'></div>
          {/* team members div start */}
          <div className='m-5 '>
          <h3>Team Members</h3>
          <ul type='none' className='d-flex justify-content-center'>
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