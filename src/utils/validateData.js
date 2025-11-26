export default function validateData(name, email, password){
    const nameRes=name!=null?/^[a-zA-Z\u00C0-\u017F]+(?:[ '-][a-zA-Z\u00C0-\u017F]+)*$/.test(name):null;
    const emailRes=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordRes=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]|:;'<>,.?/~`]).{8,}$/.test(password);
    if(name!=null && !nameRes) return "Name is not valid";
    if(!emailRes) return "Email is not valid";
    if(!passwordRes) return "Password is not valid";

    return null;
}