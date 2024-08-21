import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import emailjs from 'emailjs-com';

export default Tarif;

function Tarif(){
    const tarif=[
        {id:"Site portfolio", price:"300€"},
        {id:"Spécifique - Sur devis", price:"300€/jour"},
        {id:"Site vitrine", price:"500€"},
    ]

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        success: false,
        error: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, subject, message } = formState;

        if (name && email && subject && message) {
            emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_USER_ID
            ).then((result) => {
                setFormState({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    success: true,
                    error: false
                });
            }, (error) => {
                setFormState({
                    ...formState,
                    success: false,
                    error: true
                });
            });
        } else {
            setFormState({
                ...formState,
                success: false,
                error: true
            });
        }
    };

    return(
        <section className='flex flex-col w-full p-10 lg:px-32 justify-center bg-indigo-100' id="Tarifs">
            <div className='px-8 lg:px-32 flex flex-col'>
                <h2
                    className='text-2xl md:text-3xl lg:text-4xl text-indigo-500 font-bold text-center mb-8'
                    data-aos="fade-up"
                >
                    Tarifs prestations
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
                    {tarif.map((option, index) => (
                        <div
                            key={index}
                            className='bg-white p-6 rounded-lg shadow-md  text-center'
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <h3 className='text-xl font-bold text-indigo-500 mb-2'>{option.id}</h3>
                            <p className='text-lg text-slate-700'>{option.price}</p>
                        </div>
                    ))}
                </div>

                <div
                    className='bg-white py-6 px-9 rounded-lg shadow-md '
                    data-aos="fade-up"
                >
                    <h3 className='text-xl text-slate-700 mb-4 text-center text-menu'>Contactez-moi</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='flex gap-8 h-full'>
                            <div className='w-1/2 flex flex-col gap-4'>
                                <div className='flex-grow'>
                                    <label htmlFor='name' className='block text-slate-700 mb-2'>Nom</label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={formState.name}
                                        onChange={handleChange}
                                        className='w-full p-2 border border-gray-300 rounded bg-white'
                                        required
                                    />
                                </div>
                                <div className='flex-grow'>
                                    <label htmlFor='email' className='block text-slate-700 mb-2'>Email</label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={formState.email}
                                        onChange={handleChange}
                                        className='w-full p-2 border border-gray-300 rounded bg-white'
                                        required
                                    />
                                </div>
                                <div className='flex-grow'>
                                    <label htmlFor='subject' className='block text-slate-700 mb-2'>Objet</label>
                                    <input
                                        type='text'
                                        id='subject'
                                        name='subject'
                                        value={formState.subject}
                                        onChange={handleChange}
                                        className='w-full p-2 border border-gray-300 rounded bg-white'
                                        required
                                    />
                                </div>
                            </div>
                            <div className='w-1/2 flex flex-col'>
                                <label htmlFor='message' className='block text-slate-700 mb-2'>Message</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formState.message}
                                    onChange={handleChange}
                                    className='w-full p-2 border border-gray-300 rounded flex-grow bg-white'
                                    required
                                />
                            </div>
                        </div>
                        <div className='text-center pt-9'>
                            <button
                                type='submit'
                                className='bg-amber-400 hover:bg-indigo-300 text-black px-4 py-2 rounded shadow-md shadow-md transition delay-75'
                            >
                                Envoyer
                            </button>
                        </div>
                        {formState.success && <p className='text-green-500 text-center mt-4'>Votre message a été envoyé avec succès !</p>}
                        {formState.error && <p className='text-red-500 text-center mt-4'>Veuillez remplir tous les champs.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};