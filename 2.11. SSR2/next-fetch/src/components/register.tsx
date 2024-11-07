"use client"

import { Field, Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup'

const RegisterSchema = Yup.object().shape({
        username : Yup.string().min(6,"password must be 6 characters at minimum").required("Username is required"),
        email : Yup.string().email("invalid email format").required("email id required"),
        password: Yup.string().min(6,"password must be 6 characters at minimum").required("password is required")
})

interface FormValues {
    username: string;
    email: string;
    password: string;
}

function FormRegister () {
    const initialValue: FormValues = {username: '', email: '', password: ''}
    const handleAdd = async (user: FormValues) => {
        try {
            await fetch("http://localhost:2000/user"), {
                method: "POST",
                body: JSON.stringify(user),
            }
            alert ("User successfully added")
        }catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='pt-20 flex justify-center p-16'>
            <div className='bg-slate-200 w-[600px] p-10 rounded-lg'>
                <h1 className='font-bold text-3xl mb-8 text-black'>Register Form</h1>
                <Formik
                    initialValues={initialValue}
                    validationSchema={RegisterSchema}
                    onSubmit={(Values, action) => {
                        handleAdd(Values);
                        action.resetForm()
                    }}
                >
                    {(props: FormikProps<FormValues>) => {
                        const {handleChange, values, touched, errors} = props
                        return (
                            <Form>
                                <div className='flex flex-col pb-3'>
                                    <label 
                                        htmlFor="username"
                                        className="pb-1">Username :</label>
                                    <Field 
                                        className="rounded-md border border-slate-300 bg-slate-100 py-1 px-2" 
                                        type ="text"
                                        name ="username"
                                        onChange = {handleChange}
                                        value={values.username}
                                        placeholder="Username"
                                    />
                                    {touched.username && errors.username ? (
                                        <div className='text-red-500 text-xs'>{errors.username}</div>
                                    ): null}
                                </div>
                                <div className='flex flex-col  pb-3'>
                                    <label 
                                        htmlFor="email"
                                        className="pb-1">Email :</label>
                                    <Field 
                                        className="rounded-md px-2 py-1 border border-slate-300 bg-slate-100" 
                                        type ="email"
                                        name ="email"
                                        onChange = {handleChange}
                                        value={values.email}
                                        placeholder="Email"
                                    />
                                    {touched.email && errors.email ? (
                                        <div className='text-red-500 text-xs'>{errors.email}</div>
                                    ): null}
                                </div>
                                <div className='flex flex-col pb-3'>
                                    <label 
                                        htmlFor="password"
                                        className="pb-1">Password :</label>
                                    <Field 
                                        className="rounded-md py-1 px-2 border border-slate-300 bg-slate-100"
                                        type ="Password"
                                        name ="password"
                                        onChange = {handleChange}
                                        value={values.password}
                                        placeholder="Password"
                                    />
                                    {touched.password && errors.password ? (
                                        <div className='text-red-500 text-xs'>{errors.password}</div>
                                    ): null}
                                </div>
                                <button 
                                type='submit' className='flex justify-center items-center bg-teal-600 h-10 w-full rounded-md text-white mt-11'>
                                    Register
                                </button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default FormRegister