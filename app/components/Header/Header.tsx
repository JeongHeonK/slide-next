import { LINKS } from '../../constants'
import Category from './Category'

export default function Header() {
  return (
    <header>
      <ul className="flex w-full flex-nowrap gap-5 overflow-x-scroll bg-rose-300 px-5 py-3">
        {LINKS.map(({ path, name }) => (
          <Category key={path} path={path} name={name} />
        ))}
      </ul>
    </header>
  )
}
