import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function Donations() {
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.userDetail)
    const fundacion = useSelector((state)=> state)

    useEffect(() => {
        dispatch()
    }, [])

    return (
        <div>
            <ul>
                <h2>fundacion</h2>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}