const isPassword = (password: string): boolean => {
    const length = /^.{8,32}/;
    const uppercase = /[A-Z]/;
    const lower = /[a-z]/;
    const numbers = /[0-9]/;
    const special = /[^A-Za-z0-9]/;
    return length.test(password)
        && uppercase.test(password)
        && lower.test(password)
        && numbers.test(password)
        && special.test(password);
};
export default isPassword;
