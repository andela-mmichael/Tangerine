import { ActionReducer, Action } from '@ngrx/store';
import { TangerineFormSession } from '../models/tangerine-form-session';

export function tangerineFormSessionReducer(state, action: Action) {
    console.log(action.type);
    switch (action.type) {
        case 'TANGERINE_FORM_SESSION_START':
            const newSession = new TangerineFormSession();
            newSession.formId = action.payload.formId;
            return Object.assign({}, state, newSession);
        case 'TANGERINE_FORM_CARD_CHANGE':
            const newState = Object.assign({}, state);
            Object.assign(newState.model, action.payload.model);
            return newState;
        default:
            return state;

    }
};
