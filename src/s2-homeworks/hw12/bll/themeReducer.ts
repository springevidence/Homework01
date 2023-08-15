const initState = {
    themeId: 2,
}

export const themeReducer = (state = initState, action: changeThemeIdActionType): any => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.themeId}
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdActionType => ({ type: 'SET_THEME_ID', themeId: id }) // fix any

type changeThemeIdActionType = {
    type: 'SET_THEME_ID'
    themeId: number
}
