import dayjs from 'dayjs'

export const calculateIsProgressing = (startDate: string, endDate: string) => {
  const today = dayjs()

  const startData = dayjs(startDate, 'YYYY.MM.DD HH:mm')
  const endData = dayjs(endDate, 'YYYY.MM.DD HH:mm')

  return startData.isBefore(today) && endData.isAfter(today)
}
