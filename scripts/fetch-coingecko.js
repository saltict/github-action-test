import fetch from 'node-fetch';
import fs from 'fs/promises';

async function fetchCoinGeckoData() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en', {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Save the data to price.json
    await fs.writeFile('data/price.json', JSON.stringify(data, null, 2));

    console.log(`Fetched and saved data for the top 100 cryptocurrencies to price.json.`);
  } catch (error) {
    console.error('Error fetching data from CoinGecko:', error.message);
  }
}

fetchCoinGeckoData();