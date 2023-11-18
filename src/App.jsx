import React, {useState} from 'react';
import './App.css';
// Maak alle invoervelden na en zorg dat dit controlled components zijn;
// Zorg ervoor dat wanneer de gebruiker op de versturen-knop klikt, een functie genaamd handleSubmit" wordt aangeroepen die 'Verstuurd!'" +
// " in de console logt. " +
// "Tip 1: zet geen onClick eventlistener op de button, maar een onSubmit event-listener op het " +
// "<form>-element! Deze wordt automatisch getriggerd wanneer er geklikt wordt op een button met type=submit in het formulier. " +
// "Tip 2: Omdat de button in het formulier een submit button is, zal de pagina automatisch herladen wanneer je erop klikt. " +
// "Zorg dat je dit voorkomt. " +
// "Tip: lees dit artikel over preventDefault() in React.
// Probeer nu, in plaats van 'Verstuurd!', alle ingevulde waardes in de console te loggen wanneer de handleSubmit functie wordt aangeroepen.
//     Bonus: Make it look nice! 😍
// Bonus: Snel klaar met deze opdracht en opzoek naar een extra uitdaging? Het is mogelijk (en in de parktijk ook gebruikelijk) om slechts één functie en één state variabele te gebruiken waarmee álle onChange listeners worden afgevangen. Als je hier mee wil experimenteren kun je dit artikel gebruiken als leidraad. Lees het artikel grondig door. De antwoorden voor deze aanpak staan op de branch _ uitwerkingen-bonus_.
function App() {

    const [formName, setFormName] = useState('');
    const [formAge, setFormAge] = useState('');
    const [formComment, setFormComment] = useState('');
    const [formNewsletter, setFormNewsletter] = useState('');

    const [state, setFormState] = useState({
        formName: '',
        formAge: 0,
        formComment: '',
        formNewsletter: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formComment, formNewsletter, formAge, formName);
    }

    function handleFormChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...state,
            [changedFieldName]: newValue,

        });
        console.log(`The value of input ${e.target.name} has just been set to ${e.target.value}`);
    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Gegevens</legend>
                <label htmlFor='name'>Naam</label>
                <input type='text'
                       id='name'
                       name='name'
                       value={state.formName}
                       onChange={handleFormChange}
                       // onChange={(e) => state(e.target.value)}
                />
                <br/>
                <label htmlFor='age'>Leeftijd
                <input type='number'
                       id='age'
                       name='age'
                       value={state.formAge}
                       onChange={handleFormChange}
                       // onChange={(e) => setFormAge(e.target.value)}
                    />
                </label>
                </fieldset>
                <fieldset>
                <legend>Jouw gegevens:</legend>
                <label htmlFor="description">
                    Omschrijving:
                </label><textarea
                id='description'
                name='description'
                value={state.formComment}
                onChange={handleFormChange}
                // onChange={(e) => setFormComment(e.target.value)}
            />
                <input type="checkbox" id="check" name="checkbox" value={state.formNewsletter}
                       onChange={handleFormChange}
                // onChange={(e) => setFormNewsletter(e.target.value)}
                    />
                <button type="submit">Hello</button>
                </fieldset>
            </form>
        </div>
    );
}
export default App;
