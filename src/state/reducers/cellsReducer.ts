import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Cell } from "../cell";

interface CellsState {
    loading: boolean,
    error: string | null,
    order: string[],
    data: {
        [key: string]: Cell
    }
}

const initialState: CellsState = {
    loading: false,
    error: null,
    order: [],
    data: {}
}

const reducer = (state: CellsState = initialState, action: Action): CellsState => {
    switch (action.type) {
        case ActionType.UPDATE_CELL:
            const { id, content } = action.payload;
            return {
                ...state,
                data: {
                    ...state.data,
                    [id]: {
                        ...state.data[id],
                        content
                    }
                }
            }

        case ActionType.DELETE_CELL:
            delete state.data[action.payload];
            state.order = state.order.filter(id => id !== action.payload);
            return state;

        case ActionType.MOVE_CELL:
            const { direction } = action.payload;
            const index = state.order.findIndex(id => id === action.payload.id);
            const targetIndex = direction === 'up' ? index - 1 : index + 1;
            if (targetIndex < 0 || targetIndex > state.order.length - 1) {
                return state;
            }
            state.order[index] = state.order[targetIndex];
            state.order[targetIndex] = action.payload.id;
            return state;

        case ActionType.INSERT_CELL_BEFORE:
            const cell: Cell = {
                id: randomId(),
                type: action.payload.type,
                content: ''
            }
            state.data[cell.id] = cell;
            return state;
        default:
            return state;
    }
}

export default reducer;

function randomId() {
    return Math.random().toString(36).substr(2, 5);
}