import { useState } from "react";
import InputContainer from "./components/InputContainer"
import useCurrencyInfo from './hooks/useCurrencyInfo.js';

function App() {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  
  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {

    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);

  }

  const convert = () => setConvertedAmount(amount * currencyInfo[toCurrency]);

  const backgroundImageURL = 'https://images.pexels.com/photos/2522676/pexels-photo-2522676.jpeg';
  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: ` url('${backgroundImageURL}') `,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                          
                            <InputContainer
                                label="From"
                                amount={amount}
                                currencyOptions={currencyOptions}
                                onCurrencyChange={(currency) => setFromCurrency(currency)}
                                onAmountChange={(amount)=> setAmount(amount)} 
                                selectCurrency = {fromCurrency}
                            /> 
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputContainer
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={currencyOptions}
                                onCurrencyChange={(currency) => setToCurrency(currency)}
                                onAmountChange={(amount) => setAmount(amount)}
                                selectCurrency = {toCurrency}
                            /> 
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {fromCurrency} to {toCurrency}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
