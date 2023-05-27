"use client";

import React, { useState } from 'react';

const Header = ({title, name}) => 
{
  const [info, setInfo] = useState({
    name: 'nguyen van a',
    tuoi: 18,
    addr: 'hanoi vn'
  })
  
  const handleUpdate = () => {
    setInfo (
      (prev) => {
        return {
          ...prev,
          bio:'you suck at math'
        }
      }
    )
  }

  return (
    <>
      <span>
        {JSON.stringify(info)}
      </span>
      <button onClick = {handleUpdate}>Update</button>
    </>
  );
}

export default function Reservation() {
    return (
      <>
        <Header title = "s" name = "who asked"/>
      </>
    )
  }
  