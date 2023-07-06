export default function getUrl(coin, qtdDias){
   //URL  GET API
    return `https://economia.awesomeapi.com.br/json/daily/${coin}/${qtdDias}`; 
}
