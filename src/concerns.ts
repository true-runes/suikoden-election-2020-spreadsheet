// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ll: Function = (argument: any): void => {
  console.log(argument)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAllSheetNames: Function = (): string[] => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const allSheets = spreadsheet.getSheets()

  return allSheets.map((sheet) => sheet.getName())
}
