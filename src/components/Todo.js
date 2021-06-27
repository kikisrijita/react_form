import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMusic } from '../actions/index'
import '../components/todo.css';
import Table from '../components/Table';




const Todo = () => {

    let initials = {
        "movieName":"",
        "title":"",
        "length":"",
        "singer":""
    }
    const [movieDetails, setMovieDetails] = useState(initials)
    const list = useSelector((state) => state.todoReducer.musicList);
    const dispatch = useDispatch()

    const onHandleChange = (e) => {
        e.preventDefault();
        setMovieDetails({... movieDetails,[e.target.name]  : e.target.value})
        console.log(e.target.value);
    }
 
    console.log(movieDetails);

    return (
        <>
        <div className="main-div">
           <div className="child-div">
             <figure>
               <figcaption>ADD YOUR MUSIC LIST HERE 🥰🎸</figcaption>
             </figure>
   
             <div className="addItems">
               <label htmlFor="Movie Name"></label> <input placeholder="add name" type="text" name="movieName" value={movieDetails.movieName} onChange={onHandleChange}/> 
               <label htmlFor="Song Title"></label> <input placeholder="add title" type="text" name="title" value={movieDetails.title} onChange={onHandleChange}/> 
               <label htmlFor="Song Length"></label> <input placeholder="add length" type="text" name="length" value={movieDetails.length} onChange={onHandleChange} /> 
               <label htmlFor="Singer"></label> <input placeholder="add singer" type="text" name="singer" value={movieDetails.singer} onChange={onHandleChange} /> 
             </div>
   
             <button className="todo-btn" onClick={() => dispatch(addMusic(movieDetails),setMovieDetails(initials))} >Add Item</button>
             <Table list={list}/>
           </div>
        </div> 
       </>
    )
}

export default Todo
