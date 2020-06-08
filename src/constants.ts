// eslint-disable-next-line @typescript-eslint/no-unused-vars
const columnNames: Function = (): string[] => {
  const columnNames = [
    'ツイート日時',
    'ツイートID',
    'ユーザー名',
    'ユーザーID',
    'ツイート本文',
    'キャラ1',
    'キャラ2',
    'キャラ3',
    '票数',
    '合計',
    '要レビュー',
    '備考',
    '二次チェック済',
  ]

  return columnNames
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prefixSheetName: Function = (): string => {
  return 'G_集計用_'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ll: Function = (argument: any): void => {
  console.log(argument)
}
