import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {appReducer} from "./redusers/app-reducer";
import {authReducer} from "./redusers/auth-reduser";


const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,

})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector



// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
