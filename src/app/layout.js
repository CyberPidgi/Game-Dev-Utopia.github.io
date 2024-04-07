import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SidebarProvider } from '@/contexts/SidebarContextProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `GameDevUtopia - A student-run Game Developers' Club`,
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-slate-900"}>
        <SidebarProvider>

          {/* <div className='w-full bg-gray-900 flex'>
  <div className=''>
  </div>
  <div className='w-screen md:w-[95vw] relative md:left-[4vw]'>
    {children}
  </div>
</div> */}
          <div className='w-full'>
            <div className='w-full bg-slate-900 flex'>
              <Navbar />
              <div className='w-screen md:w-[96.5vw] relative top-[4.5rem] sm:left-[3.5vw]'>
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
