// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            localStorage.setItem(
                'transactions',
                JSON.stringify(
                    state.transactions.filter(
                        (transaction) => transaction.id !== action.payload
                    )
                )
            );
            return {
                ...state,
                // transactions: state.transactions.filter(
                //     (transaction) => transaction.id !== action.payload
                // ),
                transactions: JSON.parse(localStorage.getItem('transactions')),
            };
        case 'ADD_TRANSACTION':
            localStorage.setItem(
                'transactions',
                JSON.stringify([action.payload, ...state.transactions])
            );
            return {
                ...state,
                transactions: JSON.parse(localStorage.getItem('transactions')),
            };
        default:
            return state;
    }
};
