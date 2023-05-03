import React from 'react'
//import bgImg from '../assets/logors.gif';
import { useForm } from "react-hook-form";

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>ADANBAGH ATTEBDENCE MANAGEMENT SYSTEM</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <button className='btn'>Sign In</button>
                </form>

            </div>
        </div>
    </section>
  )
}