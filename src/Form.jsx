import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import './App.css';

const Form = () => {

    const {handleSubmit, formState: { errors }, register} = useForm();
    const handleFormSubmit = (data) => {
        console.log(data);
    }

    console.log('ERRORS', errors);
    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <fieldset>
                <legend>Gegevens</legend>
                <label htmlFor="details-name">
                    Naam:
                    <input type="text"
                           id="details-name"
                           name="name"
                           {...register("name", {
                               required: {
                                   value: true,
                                   message: "Naam is verplicht"
                               },
                               minLength: {
                                   value: 3,
                                   message: 'Naam moet minimaal 3 karakters hebben'
                               }
                           })
                           }
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </label>
                <label htmlFor="age">
                    Leeftijd:
                    <input type="text"
                           id="detail-age"
                           {...register("age", {
                               max: {
                                   value: 80,
                                   message: "Je mag maximaal 80 jaar oud zijn"
                               }

                           })}
                    />
                    {errors.age && <p>{errors.age.message}</p>}
                </label>
            </fieldset>
            <fieldset>
                <legend>Jouw review</legend>
                <label htmlFor="description">
                    <input type="textarea" id="description"
                           {...register("description", {
                               maxLength: {
                                   value: 50,
                                   message: "Uw opmerking is te lang"
                               }
                           })} rows={"4"} cols={"40"} placeholder={"Wat vond je van het recept?"}
                    />
                    {errors.description && <p>{errors.description.message}</p>}
                </label>
                <label htmlFor="checkbox">
                    <input type="checkbox"/> Ik schrijf me in voor de nieuwsbrief</label>
                <button type="submit">Ik schrijf me in voor de nieuwsbrief</button>
            </fieldset>
        </form>
    )
}

export default Form;
