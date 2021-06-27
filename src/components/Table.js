import React from 'react'

const Table = ({list}) => {
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
                </tr>
                )
            })}
      
        
 </table>   
        </>
    )
}

export default Table
