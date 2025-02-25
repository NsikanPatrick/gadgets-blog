import { useEffect, useState } from "react";
import currencyapi from "@everapi/currencyapi-js"; // Import the currencyapi library

const ExchangeRates = () => {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("USD"); // Set default from currency to USD
  const [toCur, setToCur] = useState("NGN"); // Set default to currency to NGN
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const exchangeRate = converted * amount;

  const KEY = "cur_live_kxsPBEsPD5jVzqDOqWypZgEGiCrxNbAzuYHIrcox";

  useEffect(() => {
    const fetchCurrency = async () => {
      setIsLoading(true);
      try {
        const client = new currencyapi(KEY); // Initialize the client *inside* the useEffect

        const response = await client.latest({
          base_currency: fromCur, // Use fromCur as the base
          currencies: toCur, // Use toCur as the target
        });

        // Correct way to access the value:
        const rate = response.data[toCur].value; // Access the 'value' property

        //  Format the output to 3 decimal places
        //  Multiplication here
        const formattedRate = rate.toFixed(3);

        setConverted(formattedRate); // Access the rate correctly
      } catch (error) {
        console.error("Error fetching currency data:", error);
        // Handle the error (e.g., display an error message)
      } finally {
        setIsLoading(false);
      }
    };

    if (fromCur === toCur) {
      return setConverted(amount);
    }

    fetchCurrency();
  }, [amount, fromCur, toCur]);

  return (
    <div className="container page-content">
      <div>
        <input
          type="number" // Use type="number" for better input validation
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          disabled={isLoading}
        />
        <select
          value={fromCur}
          onChange={(e) => setFromCur(e.target.value)}
          disabled={isLoading}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
          <option value="NGN">NGN</option>
          <option value="GHS">GHS</option>
          <option value="XAF">XAF</option>
        </select>
        <select
          value={toCur}
          onChange={(e) => setToCur(e.target.value)}
          disabled={isLoading}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
          <option value="NGN">NGN</option>
          <option value="GHS">GHS</option>
          <option value="XAF">XAF</option>
        </select>
      </div>
      <p>
        {isLoading ? "Loading..." : `${exchangeRate} ${toCur}`}{" "}
        {/* Display loading message */}
      </p>
    </div>
  );
};

export default ExchangeRates;

//QUERY URI: https://api.currencyapi.com/v3/latest?base_currency=USD&currencies=EUR
// PLATFORM: https://app.currencyapi.com/dashboard
// GMAIL LOGIN: nsikanpatrick100@gmail.com

// WHOGOHOST NAMESERVERS: => ns1.host-ww.net   ns2.host-ww.net

// ==== THIS IS THE ORIGINAL WAY TO TO USE THE API ABOVE ====

// import currencyapi from '@everapi/currencyapi-js'

// const App = () => {

//   const client = new currencyapi('cur_live_kxsPBEsPD5jVzqDOqWypZgEGiCrxNbAzuYHIrcox')
//   client.latest({
//       base_currency: 'USD',
//       currencies: 'NGN'
//   }).then(response => {
//       console.log(response)
//   });

// }

// export default App;
// ==== THIS IS THE ORIGINAL WAY TO TO USE THE API ABOVE ====

// FRANKFURT API

// import { useEffect, useState } from "react";

// const App = () => {
//   const [amount, setAmount] = useState(1);
//   const [fromCur, setFromCur] = useState("EUR");
//   const [toCur, setToCur] = useState("USD");
//   const [converted, setConverted] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchCurrency = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch(
//           `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`); // Handle HTTP errors
//         }

//         const data = await response.json();
//         setConverted(data.rates[toCur]);
//       } catch (error) {
//         if (error.name === 'AbortError') {
//           console.log('Fetch aborted'); // Log if the fetch was aborted
//           return; // Important: Exit the function if aborted
//         } else {
//           console.error("Error fetching currency data:", error);
//           // Handle other errors (e.g., display an error message to the user)
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     if(fromCur === toCur) return setConverted(amount) // this happens when someone
//     // for example, mistakenly converts EUR TO EUR

//     fetchCurrency();

//   }, [amount, fromCur, toCur]);

//   return (
//     <div>
//       {/* All the fields should be disabled when the data is still fetching from the
//       Api, so the users will not make mutiple requests as the data is loading */}
//       <input
//         type="text"
//         value={amount}
//         onChange={(e) => setAmount(Number(e.target.value))}
//         disabled={isLoading} //This field will be disabled when isLoading is true
//         // Meaning when the data is still fetching, then the field should be disabled
//       />
//       <select value={fromCur} onChange={(e) => setFromCur(e.target.value)} disabled={isLoading} >
//         <option value="EUR">EUR</option>
//         <option value="USD">USD</option>
//         <option value="CAD">CAD</option>
//         <option value="NGN">NGN</option>
//       </select>
//       <select value={toCur} onChange={(e) => setToCur(e.target.value)} disabled={isLoading} >
//         <option value="EUR">EUR</option>
//         <option value="USD">USD</option>
//         <option value="CAD">CAD</option>
//         <option value="NGN">NGN</option>
//       </select>
//       <p>{converted} {toCur}</p>
//     </div>
//   );
// };

// export default App;
