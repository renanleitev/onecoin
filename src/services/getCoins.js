import subtractDaysFromNow from "./subtractDaysFromNow";

export default async function getCoins(url){
    let qtdDays = 0;
    let response = await fetch(url);
    let returnApi = await response.json();
    const lista = [];
    returnApi.forEach((element) => {
      lista.push({
        id: subtractDaysFromNow(qtdDays), 
        value: element['high'],
        info: {
          high:  element['high'],
          low: element['low'],
          varBid: element['varBid'],
          pctChange: element['pctChange'],
          bid: element['bid'], 
          ask: element['ask'],
        }
      });
      qtdDays++;
    });
    return lista.reverse();
}