import React, {useContext} from 'react'
import todoContext from './todoContext';


export default function PreviewItems({...props}) {
    
    let propItems = useContext(todoContext);
    
    return (
        <div>
            <div className="show-items container mt-3">
                <div className="row">
                    {
                        propItems.category.map((val, index) => {
                            return (
                                <div
                                    className="col-md-3 my-3 px-1"
                                    key={index}
                                >
                                    <div className="border border-secondary px-2">
                                        <div className="heading">
                                            <h2 className='fs-4'>{val}</h2>
                                        </div>
                                        <div className="body" onDrop={(e) => propItems.drop(e)} onDragOver={propItems.dropOver} style={{ paddingBottom: '30px' }}>
                                            {
                                                propItems.items && propItems.items.length > 0 ?
                                                    propItems.items.map((ele, index) => (
                                                        ele.category === val ?
                                                            <div className="items"
                                                                key={ele.id}
                                                                draggable
                                                                id={ele.id}
                                                                onDragStart={propItems.dragStart}
                                                                onDragOver={propItems.dragOver}
                                                                style={{ cursor: 'grab' }}
                                                            >
                                                                <div className='d-flex list-item-wrapper'>
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id={ele.id}
                                                                        value="option1"
                                                                        onChange={propItems.changeText} />
                                                                    {ele.img ? <>
                                                                        <input
                                                                            className='task-update task-update-file d-none'
                                                                            type={`${!ele.readonly ? 'file' : 'hidden'}`}
                                                                            name="UserImages"
                                                                            id={`img${ele.id}`}
                                                                            onChange={(e) => propItems.handleImageChange(e, ele.id)}
                                                                        />
                                                                        <label htmlFor={`img${ele.id}`}>
                                                                            <img src={ele.img} alt="" srcSet="" width="50px" height="50px" />
                                                                        </label>
                                                                    </> : <></>}
                                                                    <input
                                                                        className={`items-text form-check-label todo-item ms-2 me-3 ${!ele.readonly ? 'border-edit' : ''}`}
                                                                        id={'list' + ele.id}
                                                                        type="text"
                                                                        style={{ cursor: 'grab' }}
                                                                        value={ele.name}
                                                                        readOnly={ele.readonly}
                                                                        onChange={(e) => { propItems.todoItemEditHandler(e, ele.id) }} />
                                                                    <button className={`btn check-btn icons-button ${!ele.readonly ? 'd-block' : 'd-none'}`} onClick={(e) => { propItems.todoSubmitHandler(ele.id, e) }}>
                                                                        <i className="fa-solid fa-circle-check"></i>
                                                                    </button>
                                                                </div>
                                                                <div className='d-flex icons-container' style={{ cursor: 'pointer' }}>
                                                                    <i className='far fa-edit items-icon' title='edit-item' onClick={(e) => propItems.editItem(ele.id, e)}></i>
                                                                    <i className='far fa-trash-alt items-icon' title='delete-item' onClick={(e) => propItems.deleteItem(ele.id, e)}></i>
                                                                    <i className={`fa-${!ele.fav ? 'regular' : 'solid'} fa-star items-icon`} onClick={(e) => propItems.addFav(ele.id, e, ele.fav)}></i>
                                                                </div>
                                                            </div> : ''
                                                    )) : <a className='empty-text' href='/'>Add your fav here</a>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="reset text-center d-flex " >
{/* 
                    <Dropzone
                        items={propItems.items}
                        setItems={propItems.setItems}
                        deleteItem={propItems.deleteItem}
                        dragStart={propItems.dragStart}
                        dropOver={propItems.dropOver}
                        dropDelete={propItems.dropDelete}
                        drop={propItems.drop}
                    /> */}


                    <button type="reset" className={`btn-danger m-auto items-remove-all ${!propItems.showfav ? 'd-block' : propItems.items && propItems.items.some((val) => val.fav === true) ? 'd-block' : 'd-none'}`} onClick={propItems.eraseAll}>Erase All</button>
                </div>
            </div>
        </div>
    )
}
