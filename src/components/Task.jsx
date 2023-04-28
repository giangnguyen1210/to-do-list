import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

const Task = ({toDo, markDone, setUpdateData, deleteTask}) =>{
    return (
        <>
         {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map(
          (task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className='col taskBg'>
                  <div className={task.status ? 'done' : ''}>
                    <span className='taskNumber'>{index + 1}</span>
                    <span className='taskText'>{task.title}</span>
                  </div>
                  <div className='iconsWrap'>
                    <span
                      title='completed / not completed'
                      onClick={(e) => markDone(task.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    </span>

                    {task.status ? null : <span
                      title='update'
                      onClick={() => setUpdateData({
                        id: task.id,
                        title: task.title,
                        status: task.status
                      })}
                    >
                      <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    </span>}

                    <span
                      title='delete'
                      onClick={() => deleteTask(task.id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    </span>
                  </div>
                </div>
              </React.Fragment>
            )
          }
        )}
        </>
    )
}

export default Task;