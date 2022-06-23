import {useState} from 'react';
//import {User} from '../../@types/User'

export function useLogin() {
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    function clearForm() {
        setEmail('');
        setSenha('');
    }

    function submit() {
        console.log(email,senha);
    }


    return (    
        email,
        setEmail,
        senha,
        setSenha,
        clearForm,
        submit,
    )
}