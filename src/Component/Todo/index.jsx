import React, { useEffect, useState } from 'react'
// import Listitem from './Listitem';
import './todo_style.css';
import './Listitem/list_style.css';


// Get local storage
const getLocalStorage = () => {
    const list = localStorage.getItem('todoList');
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
}

export default function Todo() {
    const [inputdata, setInputData] = useState();
    const [item, setItem] = useState(getLocalStorage());
    const [isEditItem, setIsEditItem] = useState();
    const [toggleButn, setToggleButn] = useState(false);


    // Handle input
    const inputHandle = (e) => {
        setInputData(e.target.value)
    };


    // add items
    const addItem = () => {
        if (!inputdata) {
            alert('Add the item');
        }else if(inputdata && toggleButn){
            setItem(
                item.map((current)=>{
                    if(current.id === isEditItem){
                        return {...current,name:inputdata};
                    }
                    return current;
                })
            );
            setInputData([]);
            setToggleButn(false);
            setIsEditItem(null);
        }
        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItem([...item, myNewInputData]);
            setInputData("");
        }

    }

    // Edit item
    const editItem = (index) => {
        const itemEdit = item.find((currentItem) => {
            return currentItem.id === index;
        });
        setToggleButn(true);
        setInputData(itemEdit.name);
        setIsEditItem(index);
    }
    // delete items
    const deleteItem = (index) => {
        const updateDate = item.filter((currentData) => {
            return currentData.id !== index;
        });
        setItem(updateDate);
    }

    // Remove All List
    const removeAll = () => {
        setItem([]);
    }

    // Adding local storge List
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(item))
    }, [item])
    return (
        <div className='todo_section'>
            <div className="todo_content">
                <div className="content_box">
                    <header><h2>Todo List</h2></header>
                    <div className="input-btn_box">
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder='✍️ Add item'
                                className='addInput'
                                value={inputdata}
                                onChange={inputHandle}
                            />
                        </div>
                        <div className="add-btn-box">
                            {
                                toggleButn ? (
                                    <button onClick={addItem} >💱</button>

                                ) :
                                    <button onClick={addItem} >➕</button>
                            }

                        </div>
                    </div>
                    {/* our items shoow*/}
                    <div className='listitem_section'>
                        {
                            item.map((current) => {
                                return (
                                    <>
                                        <div className="listitem" key={current.id}>
                                            <h3>{current.name}</h3>
                                            <div className="list-btn">
                                                <span onClick={() => editItem(current.id)}>
                                                    💱
                                                </span>
                                                <span onClick={() => deleteItem(current.id)}>
                                                    ❎
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                    <div className="checklist">
                        <button onClick={removeAll}>CheckList</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
