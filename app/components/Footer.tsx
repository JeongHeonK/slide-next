export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-sm text-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between px-4 md:flex-row">
        <div>
          <h2 className="text-lg font-bold">FE 김정헌</h2>
          <p className="mt-1">Frontend Engineer</p>
          <p className="mt-2 text-gray-400">
            © 2025 김정헌. All rights reserved.
          </p>
        </div>
        <ul className="mt-4 md:mt-0">
          <li>
            <a href="/terms" className="hover:underline">
              이용약관
            </a>
          </li>
          <li>
            <a href="/privacy" className="hover:underline">
              개인정보처리방침
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              고객센터
            </a>
          </li>
        </ul>
        <div className="mt-4 md:mt-0">
          <p className="font-bold">고객센터</p>
          <p className="text-gray-400">kdrlawjdgjs@gmail.com</p>
          <p className="text-gray-400">운영시간: 09:00 - 18:00</p>
        </div>
      </div>
    </footer>
  )
}
