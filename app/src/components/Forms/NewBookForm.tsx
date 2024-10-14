import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "../Common/TextField";

interface IValue {
    title: string;
}

const validationSchema = Yup.object({
    title: Yup.string()
        .required("Title is required")
        .min(3, "Title should be at least 3 characters")
});

export const NewBookForm: React.FC = () => {
    const ipcRenderer = (window as any).ipcRenderer

    const initialValues: IValue = {
        title: ''
    };

    const onSubmit = (values: IValue) => {
        console.log('value', values);
        ipcRenderer.send('submit:NewBookForm', values);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-center text-gray-800 font-inter"> Book Entry Form </h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className="shadow border rounded-xl p-4 my-4 flex flex-col items-center">
                    <Field 
                        name="title" 
                        component={TextField}
                        placeholder="Enter Title of your Book"
                    />
                    <ErrorMessage 
                        name="title"
                        component="span"
                        className="text-red-600 text-sm"
                    />
                    <div className="m-2">
                        <button type="submit" className="btn btn-primary"> Save New Book </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};
