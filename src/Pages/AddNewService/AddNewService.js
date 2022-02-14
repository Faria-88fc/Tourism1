import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewService.css'

const AddNewService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{ 
        console.log(data)
        axios.post('https://serene-taiga-16616.herokuapp.com/packages', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('your info added successfully');
                reset();
            }
        })
    };
    return (
        <div className='service-form1'>
            <h1>Enter service information</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder='name' />
            <textarea className='des' {...register("description")} placeholder='add description' />
            <input {...register("img")} placeholder='image url' />
            <input type='number' {...register("price")} placeholder='price'/>
            <input className='submit1' type="submit" value='Add Service' />
        </form>
        </div>
    );
};

export default AddNewService;