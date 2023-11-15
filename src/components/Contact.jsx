import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ButtonOne from './Button'

const Contact = () => {
    return (
        <section className='h-screen w-3/4 mx-auto '>

            <div className=' bg-seance-950 px-6 grid grid-cols-2 rounded-xl'>
                <div className='py-10 px-4'>
                    <h2 className='text-2xl text-white mb-10'>Contact Information</h2>
                    <p className='text-2xl text-white'>Diego se la come</p>
                </div>
                <div className='py-10 px-4'>
                    <Box
                        className='bg-slate-100 rounded-xl p-5'
                        component="form">
                        <h2 className="text-center font-semibold text-3xl mb-8 ">CONTACT <span className='text-seance-700'>ME</span></h2>
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
                            <ButtonOne label='Send' />
                        </div>
                    </Box>

                </div>
            </div>
        </section>
    )
}

export default Contact;