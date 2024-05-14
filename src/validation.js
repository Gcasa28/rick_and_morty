export default function validation(input) {
    const errors = {}
    const regexPassword = /^(?=.*\d).{6,10}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!input.email.length) errors.email = "Ingrese su email"
    else{
        if(!regexEmail.test(input.email)) errors.email = "Debe ingresar un email"
        
        if(input.email.length > 35) errors.email = "Menor a 35 caracteres"
    }
    
    
    if (!input.password.length) errors.password = "Ingrese su email"
    if(!regexPassword.test(input.password)) errors.password = 'Debe tener al menos un numero'
    if(input.password.length < 6) errors.password = "Al menos 6 caracteres"
    if(input.password.length > 10) errors.password = "No mas de 10 caracteres"

    return errors
}

// console.log(validation({
//     email:"hola@mail.com",
//     password:"perdido1"
// }));