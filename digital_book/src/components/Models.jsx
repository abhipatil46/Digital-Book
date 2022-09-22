import React from 'react'
import { useState } from 'react'
import '../App.css'
import './css/Models.css'
import { getModelData, SetModelData } from './Models_Data'

const Models = () => {

  let Data = getModelData();
  let [newModel, setNewModel] = useState([...Data])
  let [model, setModel] = useState({});


  let onChangeHandle=(e)=>{
      setModel({...model,[e.target.name]:e.target.value})
      
  }

  
  let addData=()=>{
    setNewModel([...newModel,model])
    console.log(newModel);
  }

  let showData = () => {
    console.log(newModel);
  }
  return (
    <div className='container'>
      <div className="main">
        <div className="content text-center">
          <h1>Upcoming Models</h1>
          <div className='main_line'></div>
          <h5>Those who cannot remember the past are condemned to repeat it</h5>
        </div>
        <div className="models-card">
          <div className="model d-flex flex-wrap p-3 mt-5">

            {
              newModel.map((model) => {
                return <div key={model.hedding} className="card p-2 m-3" style={{ width: '18rem' }}>
                  <div className="card-body border border-2 text-center">
                  <div className='' style={{height:'100px'}}>
                    <h5 className="card-title text-dark">{model.hedding}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{model.date}</h6>
                  </div>
                    <div className='cardLine text-center'></div>
                    <button className='btn btn-outline-danger m-3'> SEE IMAGE</button>
                    <button className='btn btn-outline-danger m-3'> 3D MODEL</button>
                    <button className='btn btn-outline-danger m-3' onClick={showData} > SEE DOCUMENT</button>
                  </div>
                </div>
              })

            }

          </div>

          {/* Model Window */}

          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add new Model</button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label text-dark">Heading:</label>
                      <input type="text" onChange={onChangeHandle} name='hedding' class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label text-dark">Data:</label>
                      <input class="form-control" onChange={onChangeHandle} name='date' id="message-text"></input>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" onClick={addData} class="btn btn-primary">Add</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Models