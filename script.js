console.log("1: starting up");

// fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
//   .then(response => response.json())
//   .then(data => {
//     console.log("3: got price data", data.bitcoin.usd)

//     let btcPrice = document.getElementById("btc-price")
//     btcPrice.innerHTML = data.bitcoin.usd

// });

// fetchCoinPrice("bitcoin")

console.log("2: script keeps running"); 

function fetchCoinPrice(coinId){
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`)
    .then(response => response.json())
    .then(data => {
        console.log(data[coinId].usd)
        
        let newEl = document.createElement("p")
        
        newEl.textContent = `${coinId} price: ${data[coinId].usd}`

        document.getElementById("watchlist").appendChild(newEl)
    })
}

fetchCoinPrice("bitcoin")
fetchCoinPrice("ethereum")

