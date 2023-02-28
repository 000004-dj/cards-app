import React from "react";
import {Route, Routes} from "react-router-dom";
import {Login} from "../Login/Login";
import {Registration} from "../Registration/Registration";
import {Profile} from "../Profile/Profile";
import {NotFoundPage} from "../NotFoundPage/NotFoundPage";
import {CreatePasswordPage} from "../CreatePasswordPage/CreatePasswordPage";
import {ComponentsLibraryPage} from "../ComponentsLibraryPage/ComponentsLibraryPage";
import s from './Main.module.scss'
import {ChangePasswordPage} from "../ChangePassword/ChangePasswordPage";

export const Main = () => {
    return (
        <div className={s.main}>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/404" element={<NotFoundPage/>}/>
                <Route path="/changePassword" element={<CreatePasswordPage/>}/>
                <Route path="/createNewPassword" element={<ChangePasswordPage/>}/>
                <Route path="/componentsLibrary" element={<ComponentsLibraryPage/>}/>
            </Routes>
        </div>
    )
}

