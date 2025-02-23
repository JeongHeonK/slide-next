import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

export const calculateIsProgressing = (start: string, end: string) => {
  const today = dayjs().tz('Asia/Seoul')

  const startDate = dayjs(start, 'YYYY.MM.DD HH:mm').tz('Asia/Seoul')
  const endDate = dayjs(end, 'YYYY.MM.DD HH:mm').tz('Asia/Seoul')

  return startDate.isBefore(today) && endDate.isAfter(today)
}
