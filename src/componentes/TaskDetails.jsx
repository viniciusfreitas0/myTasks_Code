import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from './button';

import './TaskDetails.css'
const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = () =>{
      navigate('/');
    }
    return ( 
        <>
        <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>Voltar</Button>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>testanto para ver como meu primeiro programa react esta ficando, fazendo no momento
                    uma lista de tarefas com react e por enquanto esta de boa.
                </p>
            </div>
        </div>
        </>
     );
}
 
export default TaskDetails;