import { generateShareableExcel } from "./generateShareableExcel";
import * as Sharing from 'expo-sharing';

export const sharedExcel = async (coinList, coin) => {
    const shareableExcelUri = await generateShareableExcel(coinList, coin);
    Sharing.shareAsync(shareableExcelUri, {
      mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Android
      dialogTitle: 'Planilha gerada pelo aplicativo OneCoin', // Android and Web
      UTI: 'com.microsoft.excel.xlsx' // iOS
    }).catch(error => {
      console.error('Error', error);
    }).then(() => {
      console.log('Return from sharing dialog');
    });
  }