const getAge = (birthdate: Date): number => {
    return Math.abs(new Date(Date.now() - birthdate.getTime()).getUTCFullYear() - 1970);
}

export default getAge;