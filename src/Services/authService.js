export const handleLogin = (e,email,password,role) =>{
    e.preventDefault()
    try {
        if(!role || !email || !password){
            return alert("Please provide all the fields.");
        }
        console.log("login -> ",e,email,password,role);
    } catch(error) {
        console.log(error);
    }
};

export const handleRegister = (e,name,role,email,password,organisationName,hospitalName,address,phone) =>{
    e.preventDefault()
    try {
        console.log("Register -> ",e,name,role,email,password,organisationName,hospitalName,address,phone);
    } catch(error){
        console.log(error);
    }
}