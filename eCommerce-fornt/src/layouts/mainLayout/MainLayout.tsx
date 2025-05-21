import Footer from '@components/common/Footer/Footer'
import Header from '@components/common/Heder/Header'
import styles from './styles.module.css'
import {Container} from 'react-bootstrap' 
import { Outlet } from 'react-router-dom';

const { container, wrapper } = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
        <Header />
        <div className={wrapper}>
          <Outlet />
        </div>
        <Footer />
    </Container>
  )
}

export default MainLayout