import * as yup from 'yup';
let schema = yup.object().shape({
    title: yup.string().min(2).max(255).required('What is your title? need help?😏'),
    image: yup.mixed().required('You must choose a picture to upload!😱'),
    tags: yup.mixed().notRequired()
});
export default  schema;