import React, {useState} from 'react'
import { useForm } from 'react-hook-form';

export default function ContactForm() {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [submitted, setSubmit] = useState(false);

    const onSubmit = (data) => {
        if (data.fullName !== '' && data.email !== '' && data.message !== '') {
            setSubmit(true);
        }
    }

    return (
        <>
            {
                submitted ? (
                    <div>
                        <h1>Thanks for contacting for us!</h1>
                        <p>Our team will review and contact you back shortly!</p>
                        <button onClick={() => setSubmit(false)} type='submit' className='btn btn-primary'>Submit another one</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-sm-6">
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input defaultValue="" {...register("fullName", { required: true})} type="text" className="form-control" id="fullName" />
                                {errors.fullName && <span>This field is required</span>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input defaultValue="" {...register("email", { required: true})} type="email" className="form-control" id="exampleInputEmail1" />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input defaultValue="" {...register("phone  ")} type="text" className="form-control" id="phone" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <input defaultValue="" {...register("message", { required: true})} type="text" className="form-control" id="message" />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div>
                                <button className="btn btn-primary" type='submit'>Send</button>
                            </div>
                        </div>
                    </form>
                )
            }
            
            
        </>
    )
}
