import * as yup from 'yup';
let login = yup.object().shape({
    username: yup.string().min(2).max(40).required(),
    password: yup.string().min(8).max(16).required()
});
export default  login;