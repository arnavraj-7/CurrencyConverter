
import React, {useId, useState} from 'react'
import useCurrencyConverter from './hooks/CurrencyConverter';
import Dropdown from './Dropdown';
function InputBox({
   
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    min={0}
                    onChange={(e)=>onAmountChange(e.target.value==""?"":Number(e.target.value))}
                    
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                {/* <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    defaultValue={selectCurrency}
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option className='hover:bg-gray-800' key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select> */}
                <Dropdown options={currencyOptions} already={selectCurrency} CurrencyChange={onCurrencyChange}/>
            </div>
        </div>
    );
}

export default InputBox;
