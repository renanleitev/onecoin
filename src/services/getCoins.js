import subtractDaysFromNow from "./subtractDaysFromNow";

export default async function getCoins(url, days){
    let qtdDays = 0;
    let response = await fetch(url);
    let returnApi = await response.json();
    const lista = [];
    returnApi.forEach((element) => {
      lista.push({id: subtractDaysFromNow(qtdDays), value: element['high']});
      qtdDays++;
    });
    return lista.reverse();
}