import Header from '@/components/Header'
import './globals.css'
import { Inter,Outfit,Nunito_Sans, Poppins } from 'next/font/google'

const outfit = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}</body>
    </html>
  )
}
