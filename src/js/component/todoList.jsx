import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


function TodoList(prop) {



    const HandleRemoveTask=(index)=>{
        prop.setter(prop.list.filter((e,currentIndex)=>index!=currentIndex)) 
    }

    const list = prop.list.map((e,i)=>{
            return (<ListGroup.Item className='d-flex justify-content-between'>{e} <Button variant="danger" onClick={()=>HandleRemoveTask(i)}><i class="fa-solid fa-trash"></i></Button> </ListGroup.Item>)
        })

  return (
    <ListGroup>
      {list}
    </ListGroup>
  );
}

export default TodoList;