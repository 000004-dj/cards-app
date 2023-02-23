const initialState = {
    error: "",
    status: "",

}

export const authReducer = (state: any = initialState, action: any) =>{
    switch (action.type) {

        default:
            return state
    }
}

const ActionCreator = () => {
    return {
        type: "SOME-TYPE"
    }
}
export type ActionType = ReturnType<typeof ActionCreator>

