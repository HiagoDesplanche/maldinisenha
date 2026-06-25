function generatePassword() {
    const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

    const length =
    document.getElementById("length").value;

    let password = "";

    const random = new Uint32Array(length);
    crypto.getRandomValues(random);

    for(let i=0;i<length;i++){
        password += chars[random[i] % chars.length];
    }

    document.getElementById("password").value = password;
}
