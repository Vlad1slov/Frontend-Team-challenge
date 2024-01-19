import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import s from "./Feedback.module.css";

const {
  validName: { checkName, messageName },
  validNum: { checkNum, messageNum },
  validEmail: { checkEmail, messageEmail },
} = {
  validName: {
    checkName: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    messageName: "Name may contain only letters",
  },
  validNum: {
    checkNum: /^\d{10}$/,
    messageNum: "Phone number must be digits",
  },
  validEmail: {
    checkEmail: /^[^@]+@[^@]+\..+$/,
    messageEmail: "email must be a valid email",
  },
};

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(checkName, messageName)
    .required("Name is required"),
  number: yup
    .string()
    .min(10, "number must be 10 digits")
    .max(10, "number must be 10 digits")
    .matches(checkNum, messageNum)
    .required("Number is required"),
  email: yup
    .string()
    .email()
    .matches(checkEmail, messageEmail)
    .required("Email is required"),
  message: yup.string().required(),
});

const initialValues = {
  name: "",
  number: "",
  email: "",
  message: "",
};

export const Feedback = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div className={s.formWrap}>
            <h3 className={s.title}>Get in touch</h3>
            <div className={s.textFields}>
              <div className={s.labelWrap}>
                <label htmlFor="name" className={s.label}>
                  <div className={s.labelText}>Name</div>
                  <div className={s.fieldWrap}>
                    <Field
                      type="text"
                      name="name"
                      className={s.field}
                      placeholder="Enter your name"
                    />
                    <div className={s.line}></div>
                  </div>
                  <ErrorMessage name="name" component="div" />
                </label>
              </div>
              <div className={s.phoneEmailWrap}>
                <div className={`${s.labelWrap} ${s.phoneLabelWrap}`}>
                  <label htmlFor="number" className={s.label}>
                    <div className={s.labelText}>Phone number</div>
                    <div className={s.fieldWrap}>
                      <div className={`${s.fieldWrap} ${s.numberWrap}`}>
                        <div className={s._38}>+38 </div>
                        <Field
                          type="tel"
                          name="number"
                          className={s.field}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className={s.line}></div>
                    </div>
                    <ErrorMessage name="number" component="div" />
                  </label>
                </div>
                <div className={s.labelWrap}>
                  <label htmlFor="email" className={s.label}>
                    <div className={s.labelText}>Email</div>
                    <div className={s.fieldWrap}>
                      <Field
                        type="email"
                        name="email"
                        className={s.field}
                        placeholder="Enter your email"
                      />
                      <div className={s.line}></div>
                    </div>
                    <ErrorMessage name="email" component="div" />
                  </label>
                </div>
              </div>
              <label
                htmlFor="message"
                className={`${s.label} ${s.labelMessage}`}
              >
                <div className={s.labelText}>Message</div>
                <div className={`${s.fieldWrap} ${s.fieldMessage}`}>
                  <Field
                    type="text"
                    name="message"
                    className={s.field}
                    placeholder="Enter your message"
                  />
                  <div className={s.lineMessage}></div>
                </div>
                <ErrorMessage name="message" component="div" />
              </label>
            </div>
          </div>
          <button type="submit" className={s.button}>
            <div className={s.btnText}>Send</div>
          </button>
        </Form>
      </Formik>
    </div>
  );
};
