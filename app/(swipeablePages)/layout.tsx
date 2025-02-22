import { PropsWithChildren } from 'react'
import Header from '../components/Header'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
