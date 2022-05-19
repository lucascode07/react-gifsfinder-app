import React, { useState } from 'react'

export const AddSearchValue = ({ setSearchValues }) => {

    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchValues(values => [inputValue, ...values]);
        setInputValue('');
    }


    return (

        <>
            <form onSubmit={handleSubmit}>
                <input
                    className='form__input'
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Search something..."
                />
                <button
                    type='submit'
                    className='form__button'
                >
                    Search
                </button>
            </form>
        </>

    )
}
