export const checkValidData = (email, password) => {
    //const isNameValid = /^[A-Za-z][A-Za-z0-9_]{4,20}$/.test(name);
    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    //if (!isNameValid) return "Name should be greter than 5 charactor";
    if (!isValidEmail) return "Email Id is not valid";
    if (!isValidPassword) return "Password is not valid";

    return null;
}