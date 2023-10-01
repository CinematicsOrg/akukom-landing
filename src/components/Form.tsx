import { Formik } from 'formik';
import { useRef, useState } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const scriptUrl = import.meta.env.VITE_SCRIPT_URL;

interface FormProps {
  fieldName: string;
  inputType?: string;
  buttonName: string;
  inputPlaceholder?: string;
  bottomText?: string;
}

const Form = ({
  buttonName,
  fieldName,
  inputType,
  inputPlaceholder,
  bottomText,
}: FormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formSubmitSuccess, setFormSubmitSuccess] = useState<boolean>(false);
  const [formSubmitError, setFormSubmitError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const formRef = useRef(null);
  const initialState = {
    [fieldName]: '',
  };

  const validate = (values: typeof initialState) => {
    const errors: {
      [key: string]: string;
    } = {};

    if (!values[fieldName]) {
      errors[fieldName] = 'Required';
    } else if (
      values[fieldName] === 'email' &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values[fieldName])
    ) {
      errors[fieldName] = 'Invalid email address';
    }

    return errors;
  };

  const handleDisable = (
    values: typeof initialState,
    isSubmitting: boolean
  ) => {
    return isSubmitting || values[fieldName]?.length === 0;
  };

  return (
    <div>
      <Formik
        initialValues={initialState}
        validate={validate}
        onSubmit={async (_, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          setFormSubmitSuccess(false);
          setFormSubmitError(false);
          setError('');
          setLoading(true);

          fetch(scriptUrl, {
            method: 'POST',
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            body: new FormData(formRef.current!),
          })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .then((_) => {
              console.log('SUCCESSFULLY SUBMITTED');
              setLoading(false);
              setSubmitting(false);
              setFormSubmitSuccess(true);
              resetForm({ values: initialState });
            })
            .catch((err) => {
              setLoading(false);
              setSubmitting(false);
              setFormSubmitError(true);
              setError(err.message);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
          // setFieldValue,
        }) => (
          <div className="">
            <span className="text-[red] text-xs lg:text-sm">
              {errors[fieldName] && touched[fieldName] && errors[fieldName]}
            </span>
            <form
              className="w-full flex justify-between text-sm/4 md:text-base/6"
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <div className="mr-2 flex items-center w-full">
                <input
                  type={`${inputType ? inputType : 'text'}`}
                  name={fieldName}
                  value={values[fieldName]}
                  placeholder={`${
                    inputPlaceholder ? inputPlaceholder : 'Enter your email'
                  }`}
                  className="w-full pl-2 py-3 border border-gray-400 rounded-lg overflow-hidden"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <button
                disabled={handleDisable(values, isSubmitting)}
                type={'submit'}
                className={`flex items-center hover:shadow-lg hover:cursor-pointer justify-center bg-green-700 hover:bg-green-400 text-white rounded-lg py-3 px-3 font-medium whitespace-nowrap transition duration-300 ${
                  handleDisable(values, isSubmitting)
                    ? 'bg-gray-300 hover:bg-gray-300'
                    : ''
                }`}
              >
                {buttonName}
              </button>
            </form>
            {bottomText ? (
              <div className="text-green-700 text-xs/4 md:text-base/5 mt-1">
                {bottomText}
              </div>
            ) : null}
          </div>
        )}
      </Formik>
      {loading ? (
        <div className="flex justify-center pt-[60px]">
          <FadeLoader
            color={'#e64d15'}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : formSubmitSuccess ? (
        <div className="md:text-[36px] text-center pt-[60px]">
          The form was sent successfully
        </div>
      ) : formSubmitError ? (
        <div className="md:text-[36px] text-center pt-[60px]">
          {error === 'Failed to fetch' ? 'Network Error' : error}
        </div>
      ) : null}
    </div>
  );
};

export default Form;
