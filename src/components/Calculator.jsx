import { useState } from 'react';
import './Calculator.scss'

const Calculator = () => {

    const [value, setValue] = useState("");
    const [debited, setDebited] = useState("");
    const [bankBalance, setBankBalance] = useState("");

    console.log(debited);

    const deposit = () =>
    {
        if(Number(value) <= 10000 && Number(value) > 0 && (Number(bankBalance) + Number(value)) <=100000)
        {
            setBankBalance(Number(bankBalance) + Number(value));
            setValue("");
        }
        else if(Number(value) > 10000)
        {
            window.alert("Maximalbetrag pro Einzahlung: 10.000€");
            setValue("");
        }
        else if(Number(value) <= 0)
        {
            window.alert("Bitte einen höhren Betrag als 0.00€ eingeben");
            setValue("");
        }
        else
        {
            window.alert("Das Tageslimit für Einzahlungen beträgt 100.000€. Bitte wenden Sie sich an Ihre*n Berater*in.");
            setValue("");
        }
    }  

    const debit = () =>
    {
        if(Number(value) <= Number(bankBalance) && Number(value) <= 5000 && (Number(debited) + Number(value)) <= 5000)
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
            onChange={(e) => setValue(Number(e.target.value))}
            value={value}/>
            <div>
                <button onClick={deposit} >Einzahlen</button>
                <button onClick={debit}>Abbuchen</button>
            </div>
        </section>
    );
}

export default Calculator;