import { Navbar } from "@/components/navbar"
import { ReactNode } from "hono/jsx"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
