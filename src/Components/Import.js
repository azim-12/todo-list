import { React, useState, useContext} from 'react'
import PreviewItems from './PreviewItems';
import todoContext from './todoContext';
// import Dropzone from './Dropzone';


export default function Import({ items, setItems, ...props }) {

    let propItems = useContext(todoContext);

    const [newList, setnewList] = useState();

    const importChange = (e) => {
        let FR = new FileReader();

        FR.addEventListener("load", function (e) {
            setnewList(JSON.parse(e.target.result))
        });
        FR.readAsText(e.target.files[0]);
        let msgDiv = document.querySelector('.success-msg');
        msgDiv.innerText = "Your Data is imported successfully";
    }

    const submitImpData = (e) => {
        e.preventDefault();
        
        let id_arr = [];
        if (propItems.items) propItems.items.map((ele) => id_arr.push(ele.id));
        
        newList.forEach(ele => {
            if (!(id_arr.includes(ele.id))) propItems.items.push(ele);
        });

        propItems.setItems([... propItems.items])
        window.location.href = '/';
    }

    return (
        <div>
            <form onSubmit={submitImpData}>
                <h2 className='success-msg'>
                    Import your ToDo list data
                </h2>

                <input
                    className='task-input-file my-3'
                    type="file"
                    id="imported-file"
                    onChange={(e) => importChange(e)}
                    style={{ display: "block" }}
                />
                <button type="submit">submit {propItems.name} </button>
            </form>
            <PreviewItems/>
        </div>
    )
}
