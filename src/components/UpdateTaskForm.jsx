const UpdateTaskForm = ({updateData,changeTask,updateTask,cancelUpdate} )=>{
    return (
        <>
         {/* update to do  */}
         <div className='row'>
            <div className='col'>
              <input
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
                className='form-control form-control-lg'
              />
            </div>
            <div className='col-auto'>
              <button
                onClick={updateTask}
                className='btn btn-lg btn-success mr-20'
              >Update</button>
              <button 
                className='btn btn-lg btn-warning'
                onClick={cancelUpdate}
              >Cancel</button>
            </div>
          </div>
          <br />
          </>
    )
}

export default UpdateTaskForm;