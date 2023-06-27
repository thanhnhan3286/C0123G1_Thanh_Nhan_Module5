import React, {useEffect, useState} from "react";

import * as todoAppService from "../service/TodoAppService"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css'
import {toast, ToastContainer} from "react-toastify";

export function TodoAppCreate() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const result = await todoAppService.findAll()
            setTodos(result)
        }
        fetchApi()
    }, [])
    return (
        <>
            <div className="text-center mt-5">
                <h1 className="text-body-tertiary">Todo List</h1>
                <div className="mt-3">
                    <Formik
                        initialValues={{
                            id: '',
                            title: ''
                        }}
                        validationSchema={Yup.object({
                            title: Yup.string()
                                .required('Không được để trống')
                        })}
                        onSubmit={(value, {setSubmitting,resetForm}) => {
                            const create = async () => {
                                setSubmitting(false)
                                await todoAppService.save(value)
                                const result = await todoAppService.findAll()
                                setTodos(result)
                                toast(`Đã thêm mới!!!`);
                                resetForm();

                            }
                            create();
                        }
                        }
                    >
                        {
                            ({isSubmitting}) => (
                                <Form>
                                    <Field type='text' name='title'/>
                                    <ErrorMessage name='title' component='span' className='err'/>
                                    {
                                        isSubmitting ? "Loadding..." :
                                            <button type='submit' className='btn btn-primary'>Submit</button>
                                    }

                                </Form>
                            )
                        }
                    </Formik>
                    <table className="m-auto mt-2">
                        <thead>
                        <tr>
                            <th>Todo
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.id}>
                                <td>
                                    {todo.title}
                                </td>
                            </tr>
                        ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}