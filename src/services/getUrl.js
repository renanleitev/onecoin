export default function getUrl(firstCoin, secondCoin, days){
    return `https://economia.awesomeapi.com.br/json/daily/${firstCoin}-${secondCoin}/${days}`; 
}
