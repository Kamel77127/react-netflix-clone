import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import React , { useState } from 'react'
import Styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from '../components/Header';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    })

    const handleSignIn = async() => {
     try {
        const {email,password} = formValues;
        // fonction createUserWithEmailAndPassword est importé depuis firebase/auth
        await createUserWithEmailAndPassword(firebaseAuth,email,password)
     } catch (error) {
        console.log(error);
     }
    }
  return (
    <Container showPassword={showPassword}>
    <BackgroundImage />
  

    <div className="content">
    <Header login />
    <div className="body flex column a-center j-center">

            <div className="text flex column">

                    <h1>Films, séries et bien plus en illimité.</h1>
                    <h4>Où que vous soyez. Annulez à tout moment.</h4>
                    <h6>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h6>

            </div>

            <div className="form">

                    <input type="email" placeholder='Adresse email' name='email' 
                    value={formValues.email} 
                    onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})} />
                    {
                        showPassword && (
                            <input type="password" placeholder='Mot de passe' name='password' 
                            value={formValues.password} 
                            onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})}
                            />

                        )
                    }
                    {
                    !showPassword && (
                        <button onClick={() => setShowPassword(true)}>commencer</button>

                        ) 

                    }

            </div>
            <button
            onClick={ handleSignIn }
            >s'inscrire'</button>
            </div>

                </div>
    
    </Container>
  )
}
const Container = Styled.div`
position: relative;
.content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
    width: 100vw;
    display: grid:
    grid-template-column: 15vh 85vh;
    .body {
        gap: 1rem;
     .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
            padding: 0 25rem;
        }
     }
     .form {
        display: grid;
        grid-template-columns: ${({showPassword}) => showPassword ? "1fr 1fr":"2fr 1fr"};
        width: 60%;
        input {
            color: black;
            border:none;
            padding: 1.5rem;
            font-size:1.2rem;
            border:1px solid black;
            &:focus {
             outline: none;
            }
        }
        button {
            padding: .5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
        }
     }
     button { 
        padding: .5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
     }
    }
}


`

export default Signup