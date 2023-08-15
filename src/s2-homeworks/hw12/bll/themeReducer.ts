const initState: InitialStateType = {
    themeId: 1
}

export const themeReducer = (state = initState, action: ChangeThemeIdActionType): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.themeId}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', themeId: id } as const) // fix any

type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID'
    themeId: number
}
type InitialStateType = {
    themeId: number
}
