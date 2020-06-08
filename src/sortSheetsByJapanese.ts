// 50音順にシートをソートする
// cf. https://qiita.com/chanP_yamazaki/items/01c20108e1fdde2e2fef

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sortSheetsByJapanese = (): void => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const allSheetsList = spreadsheet.getSheets()
  const currentSheet = spreadsheet.getActiveSheet()
  const sortInfo: { sheetList: object; sheetNameList: string[] } = {
    sheetList: {},
    sheetNameList: [],
  }

  try {
    for (let count = 0; count < allSheetsList.length; count++) {
      const sheetName: string = allSheetsList[count].getName()
      // FIXME: 型 'string' の式を使用して型 '{}' にインデックスを付けることはできないため、要素は暗黙的に 'any' 型になります。
      sortInfo['sheetList'][sheetName] = allSheetsList[count]
      sortInfo['sheetNameList'].push(sheetName)
    }

    sortInfo['sheetNameList'].sort((a: string, b: string) => {
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
      // FIXME: 型 'string' の式を使用して型 '{}' にインデックスを付けることはできないため、要素は暗黙的に 'any' 型になります。
      const activeSheet = sortInfo['sheetList'][sheetName]
      activeSheet.activate()

      spreadsheet.moveActiveSheet(setIndex)
      setIndex++
    }

    currentSheet.activate()
    ll('シートの日本語順でのソートが完了しました')
  } catch (e) {
    ll(e.lineNumber + ':' + e)
  }
}
