import React from 'react'

export default function Export() {

        let list = localStorage.getItem('lists');
        
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(list);

  return (
    <div>
        <h2>
            Download your ToDo list data
        </h2>

        <a href={dataStr} download="todo.json" style={{backgroundColor: 'black'}}>Download Data</a>
    </div>
  )
}
