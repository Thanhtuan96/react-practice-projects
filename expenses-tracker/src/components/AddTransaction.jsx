import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);
    return (
        <>
            <h3>Add new Transaction</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addTransaction({
                        id: Math.floor(Math.random() * 100000),
                        text,
                        amount: +amount,
                    });
                    setAmount('');
                    setText('');
                }}
            >
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input
                        type='text'
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                        placeholder='Enter text....'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>
                        Amount
                        <br /> (negative-expense, positive- income)
                    </label>
                    <input
                        type='number'
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        placeholder='Enter amount....'
                    />
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </>
    );
};
