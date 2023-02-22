import s from "./Navigation.module.css" ;
import React from "react";
import { NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <div className={s.navContainer}>
            <NavLink to={"/login"}
                     className={({isActive}) =>
                         isActive ? s.active : undefined
                     }>login</NavLink>

            <NavLink to={"/registration"}
                     className={({isActive}) =>
                         isActive ? s.active : undefined
                     }>registration</NavLink>

            <NavLink to={"/profile"}
                     className={({isActive}) =>
                         isActive ? s.active : undefined
                     }>profile</NavLink>

            <NavLink to={"/404"}
                     className={({isActive}) =>
                         isActive ? s.active : undefined
                     }>404</NavLink>

            <NavLink to={"/changePassword"}
                     className={({isActive}) =>
                         isActive ? s.active : undefined
                     }>changePassword</NavLink>

            <NavLink to={"/createNewPassword"}
                     className={({isActive}) =>
                         isActive ? s.active : undefined
                     }>createNewPassword</NavLink>

            <NavLink to={"/componentsLibrary"}
                     className={({isActive}) =>
                         isActive ? s.active : undefined
                     }>componentsLibrary</NavLink>


        </div>
    )
}