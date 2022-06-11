import { EUserActions } from "../constants/user.constants";
import { IAction } from "../interfaces/action.interface";
import { IAggregatedUser } from "../interfaces/aggregated-user.interface";

interface IUserReducer {
    aggregatedUser?: IAggregatedUser,
    balance?: number,
}

const initialState : IUserReducer = {
    aggregatedUser: undefined,
    balance: undefined,
};

const userReducer = (state:IUserReducer = initialState, action:IAction) : IUserReducer => {
    switch(action.type) {
        case EUserActions.SET_AGGREGATED_USER: 
            return { ...state,  aggregatedUser: action.payload };
        default: return state; 
    }
}

export type{ IUserReducer };
export { userReducer}