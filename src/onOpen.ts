// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onOpen: Function = (): void => {
  SpreadsheetApp.getActiveSpreadsheet().addMenu('幻水総選挙', [
    { name: 'シート順ソート', functionName: 'sortSheetsByJapanese' },
    { name: 'シートID取得', functionName: 'getEachSheetId' },
  ])
}
