import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';
interface SignUp{
    username:string,
    firstName:string,
    lastName:string,
    password:string
}
interface SignIn{
    username:string,
    password:string
}
export async function signIn(data:SignIn){
    try{
     const result=await axios.post('./user/signin',data);
     console.log(result);
     return result;
    }
    catch (error) { 
        console.log(error);
    }
}
export async function signUp(data:SignUp){
    try {
        const result=await axios.post('./user/signup',data);
     console.log(result);
     return result;
    } catch (error) {
        console.log(error);
    }
}