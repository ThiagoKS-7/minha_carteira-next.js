import {useState} from 'react';
import {Pet} from '../../@types/User'

export function useIndex() {
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