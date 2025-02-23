import dayjs from 'dayjs'

export const calculateIsProgressing = (startDate: string, endDate: string) => {
  const today = dayjs()
  console.log('현재 시간 (로컬):', today.format())

  const startData = dayjs(startDate, 'YYYY.MM.DD HH:mm')
  const endData = dayjs(endDate, 'YYYY.MM.DD HH:mm')

  return startData.isBefore(today) && endData.isAfter(today)
}
