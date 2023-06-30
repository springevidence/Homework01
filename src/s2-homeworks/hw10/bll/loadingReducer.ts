export type StateType = {
    isLoading: boolean
}
type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}
type ActionType = LoadingActionType

const initState = {
    isLoading: false,
}
export const loadingReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':
            return {...state, isLoading: action.isLoading }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
