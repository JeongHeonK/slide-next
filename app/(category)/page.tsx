import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex gap-3">
      <Link href="/chart">차트</Link>
      <Link href="/Whook">Whook</Link>
      <Link href="/event">event</Link>
      <Link href="/news">news</Link>
      <Link href="/store">store</Link>
      <Link href="/charge">charge</Link>
    </div>
  )
}
