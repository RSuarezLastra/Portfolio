import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ButtonTwo from './buttonTwo';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { IoMdSend } from 'react-icons/io';
import { motion } from 'framer-motion';

const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/enviar-correo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify(form),
            });
            if (response.ok) {
                console.log('Correo electrónico enviado con éxito');
                e.target.reset();
            } else {
                console.error('Error al enviar el correo electrónico');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    }

    return (
        <motion.section
            id='contact'
            className='h-screen w-3/4 lg:w-2/3 mx-auto scroll-mt-24'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <h2 className="text-center font-semibold text-3xl sm:text-5xl mb-8 dark:text-slate-100">CONTACT <span className='text-seance-700'>ME</span></h2>

            <div className=' bg-shark-100 dark:bg-neutral-900  px-0 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl'>
                <div className='hidden md:block  py-10 '>
                    <h3 className='text-2xl font-semibold mb-4 dark:text-white'>Contact Information</h3>
                    <p className='text-xl mb-16 dark:text-white'>If you are interested in collaborating or need my services, do not hesitate to contact me.</p>
                    <div className='flex flex-col'>
                        <div className='flex mb-8'>
                            <FiMail size={30} className='text-seance-800 ' />
                            <p className='ml-4 text-lg dark:text-white'>raul.slastra@gmail.com</p>
                        </div>
                        <div className='flex mb-8'>
                            <FiPhone size={30} className='text-seance-800' />
                            <p className='ml-4 text-lg dark:text-white'>+52 9933184599</p>
                        </div>
                        <div className='flex'>
                            <FiMapPin size={30} className='text-seance-800' />
                            <p className='ml-4 text-lg dark:text-white'>Villahermosa, México</p>
                        </div>
                    </div>
                </div>
                <div className='py-10 '>
                    <Box
                        id="contact-form"
                        onSubmit={handleSubmit}
                        className='bg-slate-50 rounded-xl p-5 dark:bg-neutral-300'
                        component="form">
                        <h3 className="text-center font-semibold text-3xl mb-6" >Send a message</h3>
                        <div >
                            <TextField
                                id='name'
                                name='name'
                                label='Your Name'
                                type='text'
                                variant='standard'
                                fullWidth
                                required
                                onChange={handleChange} />
                        </div>
                        <div className='mt-10'>
                            <TextField
                                id='email'
                                name='email'
                                label='Your Email'
                                type='email'
                                variant='standard'
                                fullWidth
                                required
                                onChange={handleChange} />
                        </div>
                        <div className='mt-10'>
                            <TextField
                                id='message'
                                name='message'
                                label='Your Message'
                                type='text'
                                variant='standard'
                                fullWidth
                                multiline
                                required
                                onChange={handleChange} />
                        </div>
                        <div className='mt-20 grid place-items-end'>
                            <ButtonTwo label='SEND' icon={<IoMdSend />} />
                        </div>
                    </Box>

                </div>
            </div>
        </motion.section>
    )
}

export default Contact;