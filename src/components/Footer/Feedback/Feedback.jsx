import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./Feedback.module.css";

export const Feedback = () => {
  return (
    <div>
      <h3>Get in touch</h3>
      <Formik
      // initialValues={initialValues}
      // validationSchema={schema}
      //   onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label htmlFor="name" className={s.label}>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label htmlFor="number" className={s.label}>
            Phone number
            <Field type="tel" name="number" />
            <ErrorMessage name="number" component="div" />
          </label>
          <label htmlFor="email" className={s.label}>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label htmlFor="message" className={s.label}>
            Message
            <Field type="text" name="message" />
            <ErrorMessage name="message" component="div" />
          </label>
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
};
