import MainFooter from './main-footer'
import Header1 from './header1'
import Header2 from './header2'
import Header3 from './header3'
import Header4 from './header4'
import Header5 from './header5'

export default function MainLayout({ children }) {
  return (
    <>
      <Header1 />
      <div className="main-layout__main">{children}</div>
      <MainFooter />
    </>
  )
}
