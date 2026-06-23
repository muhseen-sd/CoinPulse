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

 const watchlist = document.getElementById("watchlist")

function fetchCoinPrice(coinId){
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`)
    .then(response => response.json())
    .then(data => {

        // Error handling 
        if(data[coinId] === undefined){
            let errMsg = document.createElement("p")
            errMsg.textContent = `${coinId}: coin not found`
            watchlist.appendChild(errMsg)

            return
        }

        console.log(data[coinId].usd)
                
        let newEl = document.createElement("p")
        
        newEl.textContent = `${coinId} price: ${data[coinId].usd}`  

        watchlist.appendChild(newEl)

        

    })

    .catch(error => {
        let errMsg2 = document.createElement("p")
        errMsg2.textContent = `Something went wrong`
        watchlist.appendChild(errMsg2)
    })
}

fetchCoinPrice("bitcoin")
fetchCoinPrice("ethereum")
fetchCoinPrice("fakecoin123")

