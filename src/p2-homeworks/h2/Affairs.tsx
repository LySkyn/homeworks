import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter:FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
        // alert('all')
    }
    const setHigh = () => {
        props.setFilter('high')
        // alert('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
        // alert('middle')
    }
    const setLow = () => {
        props.setFilter('low')
        // alert('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={s.button}>All</button>
            <button onClick={setHigh} className={s.high}>High</button>
            <button onClick={setMiddle} className={s.middle}>Middle</button>
            <button onClick={setLow} className={s.low}>Low</button>
        </div>
    )
}

export default Affairs
