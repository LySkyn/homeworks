import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
      props.deleteAffairCallback(props.affair._id)
        // alert('delete '+ props.affair._id)
    }
    return (
        <div className={s.affair}>
            <div className={s.item}>{props.affair.name + ' '}</div>
            <div className={s.item}>{props.affair.priority}</div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
