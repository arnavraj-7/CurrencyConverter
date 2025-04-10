import { useEffect, useState } from "react";
import "./input.css";
import InputBox from "./InputBox";
import useCurrencyConverter from "./hooks/CurrencyConverter";

function App() {
      let [amount,setAmount]=useState(0)
      let [ConvertedAmount,setConvertedAmount]=useState(0)
      let [From,setFrom]=useState("INR")
      let [To,setTo]=useState("USD")
      const exchangeRates = useCurrencyConverter(From);
      const currencyOptions = Object.keys(exchangeRates || {});

    function convert() {
      if (exchangeRates && exchangeRates[To]) {
          setConvertedAmount(amount * exchangeRates[To]);
      } else {
          setConvertedAmount(0); // Handle invalid case
      }
  }
  useEffect(convert,[amount])

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-black/80 bg-[url(./assets/bg.jpg)] drop"
    >    <div class="absolute inset-0 bg-black opacity-70"></div>

        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={currencyOptions}
                            onCurrencyChange={(From) => setFrom(From)}
                            selectCurrency={From}
                            onAmountChange={(amount) => {setAmount(amount)}}
                        />
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={ConvertedAmount}
                            currencyOptions={currencyOptions}
                            onCurrencyChange={(To) => setTo(To)}
                            selectCurrency={To}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 cursor-pointer hover:bg-blue-800 transition duration-200 ease-in-out rounded-lg">
                        Convert {From.toUpperCase()} to {To.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>

  );

}

export default App;
