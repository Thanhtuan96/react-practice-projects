import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';

// set initail state using localStorage
// localStorage.setItem(
//     'transactions',
//     JSON.stringify([
//         { id: 1, text: 'Flower', amount: -20 },
//         { id: 2, text: 'Salary', amount: 300 },
//         { id: 3, text: 'Book', amount: -10 },
//         { id: 4, text: 'Camera', amount: 150 },
//     ])
// );

const initialState = {
    // transactions: [
    //     { id: 1, text: 'Flower', amount: -20 },
    //     { id: 2, text: 'Salary', amount: 300 },
    //     { id: 3, text: 'Book', amount: -10 },
    //     { id: 4, text: 'Camera', amount: 150 },
    // ],
    transactions: JSON.parse(localStorage.getItem('transactions')),
};

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // actions
    function deleteTransaction(id) {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }
    function addTransaction(transaction) {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
