export default function CustomPaging(i: number, currentSlideIndex: number) {
  return (
    <div
      className={`size-2 rounded-full ${i === currentSlideIndex ? 'bg-rose-500' : 'bg-gray-200'}`}
    />
  )
}
