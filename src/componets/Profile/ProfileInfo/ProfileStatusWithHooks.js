import React, { useEffect, useState } from "react"
import Preloader from "../../Common/Preloader/Preloader"
import classes from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    // закинуть функцию которая выполнится когда произойдет отрисовка
    useEffect( () => {
        setStatus(props.status)
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode 
                ?<div>
                    <span onDoubleClick={ activateEditMode }>{status || "No Status"}</span>
                </div>
                :<div>
                    <input 
                        autoFocus={true} 
                        onChange={ onStatusChange } 
                        onBlur={ deactivateEditMode } 
                        value={status} 
                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks

// setState - асинхронная операция
