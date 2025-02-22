import { PropsWithChildren } from 'react'
import Header from '../components/Header'

export default function layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
