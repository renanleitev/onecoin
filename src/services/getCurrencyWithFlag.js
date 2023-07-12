import getFlagEmoji from "./getFlagEmoji";
import {currencies, flags} from "../constants";

export default function getCurrencyWithFlag(){
    // Definindo um array com as flags (bandeiras) de cada país
    const emojiFlags = [];
    // Percorrendo o array de siglas de cada país e adicionando cada flag ao array de emojiFlags
    flags.forEach((flag) => {
        emojiFlags.push(getFlagEmoji(flag));
    });
    // Definindo um array final, para receber as flags e as siglas de 03 letras
    const currenciesWithFlag = [];
    for (i = 0; i < currencies.length; i++) {
        // Corrigindo as flags para casos que não são países
        switch(currencies[i]){
            // Bitcoin
            case 'BTC':
                currenciesWithFlag.push('\u{20BF}' + " " + currencies[i]);
                break;
            // Euro
            case 'EUR':
                currenciesWithFlag.push('\u{020AC}' + " " + currencies[i]);
                break;
            // Etherium
            case 'ETH':
                currenciesWithFlag.push('\u{039E}' + " " + currencies[i]);
                break;
            // Criptomoeda XRP
            case 'XRP':
                currenciesWithFlag.push('\u{2715}' + " " + currencies[i]);
                break;
            // Litecoin
            case 'LTC':
                currenciesWithFlag.push('\u{0141}' + " " + currencies[i]);
                break;
            // Dogecoin
            case 'DOGE':
                currenciesWithFlag.push('\u{00D0}' + " " + currencies[i]);
                break;
            // Dólar do Caribe Oriental
            case 'XCD':
                currenciesWithFlag.push('\u{0024}' + " " + currencies[i]);
                break;
            // Brent Spot
            case 'XBR':
                currenciesWithFlag.push('\u{0024}' + " " + currencies[i]);
                break;
            // Prata
            case 'XAG':
                currenciesWithFlag.push('\u{0024}' + " " + currencies[i]);
                break;
            // Dólar de Barbados
            case 'BBD':
                currenciesWithFlag.push('\u{0024}' + " " + currencies[i]);
                break;
            // Marco Conversível
            case 'BAM':
                currenciesWithFlag.push('\u{0024}' + " " + currencies[i]);
                break;
            // Franco CFA Central
            case 'XAF':
                currenciesWithFlag.push('\u{20A3}' + " " + currencies[i]);
                break;
            // Franco CFA Ocidental
            case 'XOF':
                currenciesWithFlag.push('\u{20A3}' + " " + currencies[i]);
                break;
            // Franco CFP
            case 'XPF':
                currenciesWithFlag.push('\u{20A3}' + " " + currencies[i]);
                break;
            // Reserva Internacional de Recursos
            case 'SDR':
                currenciesWithFlag.push('\u{0024}' + " " + currencies[i]);
                break;
            // Guilder das Antilhas
            case 'ANG':
                currenciesWithFlag.push('\u{0192}' + " " + currencies[i]);
                break;
            default:
                currenciesWithFlag.push(emojiFlags[i] + " " + currencies[i]);
                break;
        }
    }
    return currenciesWithFlag;
}