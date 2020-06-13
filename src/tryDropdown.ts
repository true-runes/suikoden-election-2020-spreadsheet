// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tryDropdown: Function = (): void => {
  const ss = SpreadsheetApp.getActive()
  const sh = ss.getSheetByName('Z_自由シート_01')
  const vrg = sh.getRange('A1').clear({ validationsOnly: true })
  const dv = SpreadsheetApp.newDataValidation()
    .requireValueInList(['foo', 'bar'].sort(), true)
    .build()
  vrg.setDataValidation(dv)
}
// https://stackoverflow.com/questions/57347606/drop-down-list-from-column-with-comma-separate-data-google-sheets
