import ExcelJS from 'exceljs';
import * as FileSystem from 'expo-file-system';
import { Buffer as NodeBuffer } from 'buffer';
// Retorna uma uri que pode ser compartilhada
export const generateShareableExcel = async (coinsList, coin) => {
    // Informações do arquivo 
    const now = new Date();
    // Nome do arquivo, com o nome da moeda e a data atual, substituindo '/' por '-' na data
    const fileName = `OneCoin-${coin}-${now.toLocaleDateString().replaceAll('/', '-')}.xlsx`;
    const fileUri = FileSystem.cacheDirectory + fileName;
    async function createExcelFile() {
        const workbook = new ExcelJS.Workbook();
        workbook.creator = 'Renan Leite Vieira';
        workbook.created = now;
        workbook.modified = now;
        // Nome da planilha
        const worksheet = workbook.addWorksheet('OneCoin', {});
        // Definindo as colunas da planilha
        worksheet.columns = [
          { header: 'Moeda', key: 'moeda', width: 10 },
          { header: 'Data', key: 'data', width: 12 },
          { header: 'Valor', key: 'valor', width: 10, }
        ];
        // Para cada moeda, adiciona uma linha com os dados
        coinsList.forEach((item) => {
          worksheet.addRow({ moeda: coin, data: item.id, valor: item.value });
        });
        // Estilo da primeira linha da planilha
        worksheet.getRow(1).font = {
          size: 16, bold: true
        };
        try {
          const buffer = await workbook.xlsx.writeBuffer();
          const nodeBuffer = NodeBuffer.from(buffer);
          const bufferStr = nodeBuffer.toString('base64');
          await FileSystem.writeAsStringAsync(fileUri, bufferStr, {
            encoding: FileSystem.EncodingType.Base64
          });
          return fileUri;
        } catch (error) {
          console.log('Error creating/writing to Excel file:', error);
          throw error;
        }
    }
    const excelFile = await createExcelFile();
    return excelFile;
}