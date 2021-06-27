import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteMusic } from '../actions/index'


const Table = ({list}) => {
    const dispatch = useDispatch()
    return (
        <>
        <table className="show-item">
             
        <tr>
            <th>NAME</th>
            <th>TITLE</th>
            <th>LENGTH</th>
            <th>SINGER</th>
        </tr>
        
            {list.map((el,index) => {
                return (
                    <tr>
                    <td key={index}>
                    {el.data.movieName}
                    </td>
                    <td key={index}>
                {el.data.title}
                </td>
                <td key={index}>
                {el.data.length}
                </td>
                <td key={index}>
                {el.data.singer}
                </td>
                <i class="fas fa-minus-circle" onClick={() => dispatch(deleteMusic(el.id))}></i>
                </tr>
               
                )
            })}
      
        
 </table>   
        </>
    )
}

export default Table
