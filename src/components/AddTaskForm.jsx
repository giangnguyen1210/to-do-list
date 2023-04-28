const AddTaskForm = ({ toDo, newTask, addTask, setNewTask, removeAll }) => {
    return (
        <>
            {/* add to do  */}
            <div className='row'>
                <div className='col'>
                    <input
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className='form-control form-control-lg'
                    />
                </div>
                <div className='col-auto'>
                    <button
                        className='btn btn-lg btn-success'
                        onClick={addTask}
                    >
                        Add task
                    </button>
                </div>
                {toDo && toDo.length ? (<>
                    <div className='col-auto'>
                        <button
                            className='btn btn-lg btn-success'
                            onClick={removeAll}
                        >
                            Remove All
                        </button>
                    </div>
                    </>) : (<></>)}

            </div>
            <br />
        </>
    )
}

export default AddTaskForm;