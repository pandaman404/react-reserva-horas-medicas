import ReservarHoraForm from '../components/ReservarHoraForm';

const ReservarHoraPage = () => {
    return (
        <main className='flex-1'>
            <h2 className='bg-neutral relative p-4 text-center text-lg font-semibold uppercase tracking-widest text-white'>
                Reserva de horas
            </h2>
            <div className='container mx-auto my-10 px-3 lg:mb-20 lg:mt-10 xl:px-0'>
                <ReservarHoraForm />
            </div>
        </main>
    );
};

export default ReservarHoraPage;
