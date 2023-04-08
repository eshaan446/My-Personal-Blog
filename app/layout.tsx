import './globals.css'
import Navbar from './components/Navbar'
import MyProfile from './components/MyProfile'

export const metadata = {
  title: "Eshaan's Blog",
  description: 'Generated by Eshaan Pandey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        <Navbar/>
        <MyProfile/>
        {children}
      </body>
    </html>
  )
}
