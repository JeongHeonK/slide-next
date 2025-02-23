import dbConnect from '../db/dbConnect'
import Chart from '../db/model/Chart'

export const getCharts = async (page: number = 1) => {
  const skipCount = (page - 1) * 7
  try {
    await dbConnect()
    const response = await Chart.find()
      .sort({ rank: 1 })
      .skip(skipCount)
      .limit(8)
    const result = response
      .map((res) => ({
        title: res.title,
        artist: res.artist,
        rank: res.rank,
      }))
      .slice(0, 7)

    let hasNext = false

    if (response.length > 7) {
      hasNext = true
    }

    return { result, hasNext }
  } catch (error) {
    const e = error as Error

    throw new Error(e.message)
  }
}
