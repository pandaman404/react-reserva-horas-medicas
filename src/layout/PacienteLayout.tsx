import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PacienteLayout = () => {
    return (
        <section className='flex min-h-screen flex-col justify-between'>
            <Header />
            <Outlet />
            <Footer />
        </section>
    );
};

export default PacienteLayout;
