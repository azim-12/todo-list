import { useState, useEffect } from "react";
import { getLocaleItems } from '../Utils/helper';
import todoContext from "./todoContext";

const TodoState = (props) => {

    const state = {
        "name" : "azim",
        "technology" : "react"
    }
    
    const [items, setItems] = useState(getLocaleItems());
    const [images, setImages] = useState(null)
    const [category, setCategory] = useState(['General', 'Home', 'Work', 'Important']);
    const [input, setInput] = useState('');

    let handleChange = (e) => {
        setInput(e.target.value);
    }
    
    let handleImageChange = (e, id = null) => {
        var FR = new FileReader();
        console.log(FR);
        let targetElement = e.target;

        if (id === null) {
            FR.addEventListener("load", function (e) {
            setImages(e.target.result);
            });
            FR.readAsDataURL(e.target.files[0]);
        } else {
            FR.addEventListener("load", function (e) {
            targetElement.nextElementSibling.children[0].src = e.target.result;

            let editItem = items.map((val) => {
                if (val.id === id) {
                return {
                    id: val.id,
                    name: val.name,
                    readonly: false,
                    fav: val.fav,
                    img: e.target.result,
                    category: val.category
                };
                } else {
                return val;
                }
            });
            setItems(editItem)
            });
            FR.readAsDataURL(e.target.files[0]);
        }
    }
    
      let handleSubmit = (e) => {
        e.preventDefault();
        if (input !== '') {
          const inputData = {
            id: Date.now(),
            name: input,
            readonly: true,
            fav: false,
            img: images,
            category: e.target.querySelector('.form-select').value
          }
          setItems([...items, inputData])
          setInput('')
          e.target.querySelector('.task-input-file').value = "";
          setImages(null)
        }
      }
    
      let editItem = (id, e) => {
        let editItem = items.map((val) => {
          if (val.id === id) {
            return {
              id: val.id,
              name: val.name,
              readonly: false,
              fav: val.fav,
              img: val.img,
              category: val.category
            };
          } else {
            return val;
          }
        });
        document.querySelector(`#list${id}`).focus()
        setItems(editItem);
    
        // e.target.closest('.items').querySelector('.todo-item');
      }
    
      let deleteItem = (index, e) => {
        e.target.closest('.items').classList.add('animated');
        let newItems = items.filter((ele) => index !== ele.id);
        setTimeout(() => {
          e.target.closest('.items').classList.remove('animated');
          setItems(newItems);
        }, 800)
    
      }
    
      let eraseAll = () => {
    
        checkList();
        setItems([])
      }
    
      let todoItemEditHandler = (e, id) => {
        let editedItem = items.map((val) => {
          if (val.id === id) {
            return {
              id: val.id,
              name: e.target.value,
              readonly: false,
              fav: val.fav,
              img: val.img,
              category: val.category
            };
          } else {
            return val;
          }
        });
        setItems(editedItem)
      }
    
      let todoSubmitHandler = (id, e) => {
        let editedItem = items.map(val => {
          if (val.id === id) {
            return {
              id: val.id,
              name: val.name,
              readonly: true,
              fav: val.fav,
              img: val.img,
              category: val.category
            }
          } else {
            return val;
          }
        })
        setItems(editedItem)
      }
    
      let addFav = (id, e, favourite) => {
        let editedItem = items.map(val => {
          if (val.id === id) {
            return {
              id: val.id,
              name: val.name,
              readonly: true,
              fav: !favourite,
              img: val.img,
              category: val.category
            }
          } else {
            return val;
          }
        })
        setItems(editedItem)
      }
    
      useEffect(() => {
        // checkList();
        localStorage.setItem('lists', JSON.stringify(items));
      }, [items])
    
    
      let checkList = () => {
        if (items.length === 0) {
          document.querySelector('.items-remove-all').classList.add('hidden')
        } else {
          document.querySelector('.items-remove-all').classList.remove('hidden')
        }
      }
    
      let changeText = (e) => {
        if (e.target.checked === true) {
          e.target.nextElementSibling.style.textDecoration = 'line-through';
          e.target.closest('.items').classList.add('bg-checked');
          e.target.nextSibling.classList.add('bg-checked');
        } else {
          e.target.nextElementSibling.style.textDecoration = 'none';
          e.target.closest('.items').classList.remove('bg-checked');
          e.target.nextSibling.classList.remove('bg-checked');
        }
      }

    return(
        <todoContext.Provider value={{
            state, 
            category,
            items,
            setItems,
            input,
            setInput,
            handleChange,
            handleSubmit,
            editItem,
            deleteItem,
            eraseAll,
            todoItemEditHandler,
            todoSubmitHandler,
            addFav,
            handleImageChange,
            checkList,
            changeText,
            images
        }}>{props.children}</todoContext.Provider>
    )
}

export default TodoState;