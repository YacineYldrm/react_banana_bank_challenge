import { useState } from 'react';
import './Calculator.scss'

const Calculator = () => {

    const [value, setValue] = useState("");
    const [debited, setDebited] = useState("");
    const [paidIn, setPaidIn] = useState("");
    const [bankBalance, setBankBalance] = useState("");

    console.log(debited);

    const deposit = () =>
    {
        if(Number(value) <= 5000 && Number(value) > 0 && (Number(bankBalance) + Number(paidIn)) <=10000)
        {
            setBankBalance(Number(bankBalance) + Number(value));
            setPaidIn(Number(paidIn) + Number(value));
            setValue("");
        }
        else if(Number(value) > 5000)
        {
            window.alert("Maximalbetrag pro Einzahlung: 5.000€");
            setValue("");
        }
        else if(Number(value) + Number(paidIn) > 10000)
        {
            window.alert("Das Tageslimit für Einzahlungen beträgt 10.000€. Bitte wenden Sie sich an Ihre*n Berater*in.");
            setValue("");
        }
        else
        {
            window.alert("Bitte einen höhren Betrag als 0.00€ eingeben");
            setValue("");
        }
    }  

    const debit = () =>
    {
        if(Number(value) <= Number(bankBalance) && Number(value) <= 5000 && (Number(debited) + Number(value)) <= 5000 && Number(value) > 0)
        {
            setBankBalance(bankBalance - value);
            setDebited(Number(debited) + Number(value));
            setValue("");
        }
        else if (Number(value) > Number(bankBalance))
        {
            window.alert(`Verfügbarer Betrag: ${Number(bankBalance).toFixed(2)}€`);
            setValue("");
        }
        else if (Number(value) > 5000 || (Number(debited) + Number(value)) > 5000)
        {
            window.alert('Das Tageslimit für Abbuchungen beträgt 5.000€. Bitte wenden Sie sich an Ihre*n Berater*in.')
        }
        else
        {
            window.alert("Bitte einen höhren Betrag als 0.00€ eingeben");
            setValue("");
        }
    }

    const getUserInput = (input) =>
    {
        if (Number(input.target.value) >= 1) {
            setValue(Number(input.target.value));
        }
        else
        {
            setValue("");
        }
    }

    return ( 
        <section className="calculator_wrapper">
            <h2>Mein Girokonto</h2>
            <p>{Number(bankBalance).toFixed(2)}€</p>
            <input 
            type="number"
            name=''
            id='user_input'
            placeholder="Batrag in €"
            onChange={getUserInput}
            value={value}/>
            <div>
                <button onClick={deposit} >Einzahlen</button>
                <button onClick={debit}>Abbuchen</button>
            </div>
        </section>
    );
}

export default Calculator;