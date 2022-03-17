import React, { useState } from 'react';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    return (
        <>
            <h3>Add new Transaction</h3>
            <form>
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
