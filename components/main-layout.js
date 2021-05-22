import MainHeader from './main-header'
import MainFooter from './main-footer'
import Header2 from './header2';

export default function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
      <div className="main-layout__main">{children}</div>
      <MainFooter />
    </>
  )
}
 