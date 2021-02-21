import React, { useState, useEffect, useRef } from 'react';

const initialList = [
    {
        id: 1,
        todo: 'wash the dishes'
    },
    {
        id: 2,
        todo: 'walk the dog'
    }

];

const List = () => {
    const [list, setList] = useState(initialList);
    const [text, setText] = useState('');
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.value = '';
    }, [list])

    const onSubmit = (event) => {
        event.preventDefault();
        setList(prevList => [...prevList, { id: Math.random(), todo: text }]);
    };

    function handleRemove(id) {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
    }

    const renderedList = list.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <span>{item.todo}</span>
                <button type="button" className="btn btn-outline-danger btn-sm pt-0 ms-2" onClick={() => handleRemove(item.id)}>
                    x
                </button>
            </li>
        )
    })

    return (
        <div className="container col-4">
            <form onSubmit={onSubmit}>
                <label className="form-label">What's on your mind today?</label>
                <input ref={inputRef} className="form-control mb-2" type='text' value={text} onChange={(e) => setText(e.target.value)} />
            </form>
            <ul className="list-group ">
                {renderedList}
            </ul>
        </div>
    );
};
export default List;