import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getLatestAggregationSheetSuffixNumber: Function = (): number => {
  const allSheetNames: string[] = getAllSheetNames()
  const allAggregationSheetNames: string[] = allSheetNames.filter(
    (sheetName) => sheetName.indexOf(prefixSheetName()) === 0,
  )
  const latestAggregationSheetName: string = allAggregationSheetNames
    .sort()
    .slice(-1)[0]
  const latestAggregationSheetNumber = Number(
    latestAggregationSheetName.replace(prefixSheetName(), ''),
  )

  return latestAggregationSheetNumber
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const nextAggregationSheetSuffixNumberByString: Function = (): string => {
  const nextAggregationSheetSuffixNumberByString: string = (
    '00' +
    (getLatestAggregationSheetSuffixNumber() + 1)
  ).slice(-2)

  return nextAggregationSheetSuffixNumberByString
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const nextAggregationSheetName: Function = (): string => {
  const nextAggregationSheetName = `${prefixSheetName()}${nextAggregationSheetSuffixNumberByString()}`

  return nextAggregationSheetName
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const writeInitialContents: Function = (): void => {
  const spreadsheet: Spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const currentSheet = spreadsheet.getActiveSheet()
  const aggregationSheetColumnNames: string[] = columnNames()

  const varValues = [aggregationSheetColumnNames]
  const lastColumnNumber = varValues[0].length
  const lastRowNumber = varValues.length

  const startRowNumberForInitialWriting = 1
  const startColumnNumberForInitialWriting = 1
  currentSheet
    .getRange(
      startRowNumberForInitialWriting,
      startColumnNumberForInitialWriting,
      lastRowNumber,
      lastColumnNumber,
    )
    .setValues(varValues)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addAggregationSheet: Function = (): void => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  spreadsheet.insertSheet(nextAggregationSheetName())
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addAggregationSheetAndSort: Function = (): void => {
  addAggregationSheet()
  sortSheetsByJapanese()
}
