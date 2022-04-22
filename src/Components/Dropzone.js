import React , {useContext} from 'react'
import todoContext from './todoContext';

export default function Dropzone({...props}) {
    let propItems = useContext(todoContext);


    return (
        <>
            <div
                id={props.id}
                className='dropzone align-items-center justify-content-center d-flex'
                onDrop={(e)=>props.dropDelete(e)}
                onDragOver={props.dropOver}
                style={
                    {
                        height: "65px",
                        width: "250px",
                        border: "2px dotted black"
                    }
                }
            >
               <p className='m-0'>Drop & Delete.</p> 
            </div>
        </>
    )
}
