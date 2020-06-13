// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getEachSheetId: Function = (): void => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const allSheets = spreadsheet.getSheets()

  const eachSheetId: Record<string, any>[] = []
  for (let i = 0; i < allSheets.length; i++) {
    eachSheetId[allSheets[i].getName()] = allSheets[i].getSheetId()
  }

  let eachSheetIdForShownText = ''
  for (const [key, value] of Object.entries(eachSheetId)) {
    // ★
    eachSheetIdForShownText += `${key},${value}\n`
  }

  console.log(eachSheetIdForShownText)
  Browser.msgBox(eachSheetIdForShownText)
}
