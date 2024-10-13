import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface IValue {
    description: string;
}

const validationSchema = Yup.object({
    description: Yup.string()
        .required("Description is required")
        .min(10, "Description should be at least 10 characters")
});

export const NewBookForm: React.FC = () => {
    const ipcRenderer = (window as any).ipcRenderer

    const initialValues: IValue = {
        description: ''
    };

    const onSubmit = (values: IValue) => {
        console.log('value', values);
        ipcRenderer.send('submit:NewBookForm', values);
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <Field name="description" id="description" type="text" />
                    <ErrorMessage name="description"/>
                    <button type="submit">Save</button>
                </Form>
            </Formik>
        </div>
    );
};
