import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ButtonTwo from './buttonTwo';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { IoMdSend  } from 'react-icons/io';

const Contact = () => {
    return (
        <section id='contact' className='h-screen w-3/4 lg:w-2/3 mx-auto scroll-mt-24'>
            <h2 className="text-center font-semibold text-3xl mb-8 dark:text-slate-100 scroll-mt-[100rem]">CONTACT <span className='text-seance-700'>ME</span></h2>

            <div className=' bg-shark-200  px-0 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl'>
                <div className='hidden md:block  py-10 '>
                    <h3 className='text-2xl font-semibold mb-4'>Contact Information</h3>
                    <p className='text-xl mb-16'>If you are interested in collaborating or need my services, do not hesitate to contact me.</p>
                    <div className='flex flex-col'>
                        <div className='flex mb-8'>
                            <FiMail size={30} className='text-seance-800' />
                            <p className='ml-4 text-lg'>raul.slastra@gmail.com</p>
                        </div>
                        <div className='flex mb-8'>
                            <FiPhone size={30} className='text-seance-800' />
                            <p className='ml-4 text-lg'>+52 9933184599</p>
                        </div>
                        <div className='flex'>
                            <FiMapPin  size={30} className='text-seance-800' />
                            <p className='ml-4 text-lg'>Villahermosa, México</p>
                        </div>
                    </div>
                </div>
                <div className='py-10 '>
                    <Box
                        className='bg-slate-100 rounded-xl p-5'
                        component="form">
                        <h3 className="text-center font-semibold text-3xl mb-6" >Send a message</h3>
                        <div >
                            <TextField
                                id='standard-basic'
                                label='Your Name'
                                type='text'
                                variant='standard'
                                fullWidth />
                        </div>
                        <div className='mt-10'>
                            <TextField
                                id='standard-basic'
                                label='Your Email'
                                type='email'
                                variant='standard'
                                fullWidth />
                        </div>
                        <div className='mt-10'>
                            <TextField
                                id='standard-basic'
                                label='Your Message'
                                type='email'
                                variant='standard'
                                fullWidth />
                        </div>
                        <div className='mt-20 grid place-items-end'>
                            <ButtonTwo label='SEND' icon={<IoMdSend/>} />
                        </div>
                    </Box>

                </div>
            </div>
        </section>
    )
}

export default Contact;