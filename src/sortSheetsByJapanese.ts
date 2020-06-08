// 50音順にシートをソートする
// cf. https://qiita.com/chanP_yamazaki/items/01c20108e1fdde2e2fef

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sortSheetsByJapanese = (): void => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const allSheetsList = spreadsheet.getSheets()
  const currentSheet = spreadsheet.getActiveSheet()
  const sortInfo = {
    sheetList: {},
    sheetNameList: [],
  }

  try {
    for (let count = 0; count < allSheetsList.length; count++) {
      const sheetName = allSheetsList[count].getName()
      sortInfo['sheetList'][sheetName] = allSheetsList[count]
      sortInfo['sheetNameList'].push(sheetName)
    }

    sortInfo['sheetNameList'].sort((a, b) => {
      a = a.toString().toLowerCase()
      b = b.toString().toLowerCase()

      if (a < b) return -1
      if (a > b) return 1
      return 0
    })

    let setIndex = 1
    for (
      let sheetCount = 0;
      sheetCount < sortInfo['sheetNameList'].length;
      sheetCount++
    ) {
      const sheetName = sortInfo['sheetNameList'][sheetCount]
      const activeSheet = sortInfo['sheetList'][sheetName]
      activeSheet.activate()

      spreadsheet.moveActiveSheet(setIndex)
      setIndex++
    }

    currentSheet.activate()
    Browser.msgBox('ソートが終了しました。ページを更新してください。')
  } catch (e) {
    Browser.msgBox(e.lineNumber + ':' + e)
  }
}
