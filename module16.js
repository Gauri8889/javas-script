// export const name = "khushi";
// export const age = 20;

// type of export - nemed export , default export(only one thing can be exprted)

const name = "khushi";
const age = 20;
const data = () => {
    let firstName = "ankita"
    let lastName ="gauri";

    return firstName + " "+ lastName;
};

const message = ()=> {
    console.log("hello");
};

export{ name, age, message };
export default data;


