import React from "react";
import {Route, Routes} from "react-router-dom";
import {Login} from "../Login/Login";
import {Registration} from "../Registration/Registration";
import {Profile} from "../Profile/Profile";
import {NotFoundPage} from "../NotFoundPage/NotFoundPage";
import {ChangePasswordPage} from "../ChangePassword/ChangePasswordPage";
import {CreateNewPasswordPage} from "../CreateNewPassword/CreateNewPasswordPage";
import {ComponentsLibraryPage} from "../ComponentsLibraryPage/ComponentsLibraryPage";
import s from './Main.module.css'

export const Main = () => {
    return (
        <div className={s.main}>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/404" element={<NotFoundPage/>}/>
                <Route path="/changePassword" element={<ChangePasswordPage/>}/>
                <Route path="/createNewPassword" element={<CreateNewPasswordPage/>}/>
                <Route path="/componentsLibrary" element={<ComponentsLibraryPage/>}/>
            </Routes>
        </div>
    )
}

