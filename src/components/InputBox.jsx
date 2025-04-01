import React from 'react'
import { useState } from 'react'
import useCurrencyInfo from '../hooks/useCurrencyinfo'
import Dropdown from './Dropdown';

function InputBox() {

  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setamount] = useState()

  const conversionRate = useCurrencyInfo(fromCurrency, toCurrency)

  return (
    <>
      <div className='h-30 w-150  bg-white/10 border m-5' >

        <h2 className='mt-3 '>FROM</h2>
        <input type="number" placeholder='Enter Value' min={1} className='border-2 p-1.5 mr-4 mt-2' onChange={(e) => { setamount(e.target.value) }} />
        <select className='border-black  w-55 bg-gray-200 text-black p-2 rounded' value={fromCurrency} onChange={(e) => { setFromCurrency(e.target.value) }}>
          <Dropdown />
        </select>
      </div>

      <button onClick={()=>{
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
      }}>⇅</button>

      <div className='h-30 w-150  bg-white/10 border m-5' >

        <h2 className='mt-3'>TO</h2>
        <input type='text' placeholder='Enter Value' min={1} className='border-2 p-1.5 mr-4 mt-2' value={amount && conversionRate ? (amount * conversionRate).toFixed(4) : ('-')} />
        <select className='border-black p-2 w-55 bg-gray-200 text-black  rounded ' value={toCurrency} onChange={(e) => { setToCurrency(e.target.value) }}>
          <Dropdown />
        </select>
      </div>
    </>
  )
}

export default InputBox