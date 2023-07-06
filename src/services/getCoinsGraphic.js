export default async function getCoinsGraphic(url) {
    let response = await fetch(url);
    let returnApi = await response.json();
    const lista = [];
    returnApi.forEach((element) => {
        lista.push(Number.parseFloat(element['high']));
    });
    return lista.reverse();
}