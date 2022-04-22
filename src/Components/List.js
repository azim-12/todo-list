import React , {useContext} from 'react'
// import { useState, useEffect } from 'react'
import ListItem from './ListItem';
import todoContext from './todoContext';


export default function List(props) {
    
    let propItems = useContext(todoContext);

    let dragStart = e => {
        e.dataTransfer.setData('item_id', e.target.id);
    }

    let dropOver = e => {
        e.preventDefault();
    }

    let dragOver = e => {
        e.stopPropagation();
    }

    let dropDelete = (e) => {
        e.preventDefault();
        const item_id = e.dataTransfer.getData('item_id')

        let newItems = propItems.items.filter((ele) => {
            return Number(item_id) !== ele.id
        });

        propItems.setItems(newItems);
    }

    let drop = (e) => {
        let drop_itemid = e.dataTransfer.getData('item_id');
      
        let newItems = propItems.items.map((ele)=> {
            if (ele.id ===Number(drop_itemid)){
                ele.category = e.target.previousElementSibling.children[0].innerHTML; 
                return ele
            }else{
                return ele
            }
        }
        )
        propItems.setItems(newItems)
    }

    return (

        <div className='text-center'>
            <header>
                <div className='header-div' >
                    <div className="task-container container" >
                        <div style={{ marginBottom: '20px' }}>
                            {propItems.images ? <>
                                <img src={propItems.images} alt="" style={{ width: '100px' }} />
                            </> : <>
                                <p className='no-img-text'> No Image selected </p>
                            </>
                            }
                        </div>
                        <form className='my-3' onSubmit={propItems.handleSubmit}>
                            <div className="d-flex align-items-center justify-content-center">

                                <input
                                    className='task-input my-3'
                                    type="text"
                                    placeholder='Enter Task'
                                    value={propItems.input}
                                    onChange={propItems.handleChange}
                                />
                                <input
                                    className='task-input-file my-3'
                                    type="file"
                                    id="image"
                                    onChange={(e) => propItems.handleImageChange(e)}
                                />

                                <select className="form-select" aria-label="Default select example" style={{ width: "120px" }}>
                                    {
                                        propItems.category.map((val, index) => {
                                            return (
                                                <option key={index + 1} value={val}>{val}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <label htmlFor="image" className='btn-2 my-2'>Upload Image </label>
                            <button className='task-btn my-2' type="submit">Create Task </button>
                        </form>
                    </div>
                </div>
            </header>

            <ListItem />

        </div>
    )
}
