import { useState } from 'react';
import { Formik, Form as FormikForm, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FormTabs } from '../../tabs/FormTabs/FormTabs';
import { useHistory } from 'react-router';
import { SubmitButton } from '../../buttons/SubmitButton/SubmitButton';
import { FormWrapper } from '../FormWrapper/FormWrapper';
import { Spacer } from '../Spacer/Spacer';
import { InputField } from '../InputField/InputField';
import { CheckboxField } from '../CheckboxField/CheckboxField';

interface FormValuesProps {
  email: string;
  password: string;
  hasAcceptedTerms: boolean;
}

const initialValues = {
  email: '',
  password: '',
  hasAcceptedTerms: false,
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
  hasAcceptedTerms: Yup.boolean().oneOf([true], 'You must accept the terms'),
});

const FormExample = () => {
  const history = useHistory();
  const [isValidatingOnChange, setIsValidatingOnChange] = useState(false);

  const onSubmit = async (
    values: FormValuesProps,
    { setSubmitting, resetForm }: FormikHelpers<FormValuesProps>,
  ) => {
    setSubmitting(true);
    // TODO do something with these values
    await console.log('submitting', values);
    resetForm();
    setSubmitting(false);
    setIsValidatingOnChange(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={isValidatingOnChange}
      validateOnMount={false}>
      {({ handleSubmit }) => (
        <FormikForm
          onSubmit={(event) => {
            setIsValidatingOnChange(true);
            event.preventDefault();
            handleSubmit();
          }}>
          <FormWrapper>
            <FormTabs
              tabs={[
                {
                  label: 'Log In',
                  onClick: () =>
                    history.push('/?path=/story/forms-form-example--default'),
                  isActive: false,
                },
                {
                  label: 'Sign Up',
                  onClick: () =>
                    history.push('/?path=/story/forms-form-example--default'),
                  isActive: true,
                },
              ]}
            />
            <Spacer />
            <InputField name="email" type="email" placeholder="Email Address" />
            <InputField
              name="password"
              type="password"
              placeholder="Password"
            />
            <CheckboxField name="hasAcceptedTerms">
              I have read and agree to the Terms and Conditions
            </CheckboxField>
            <Spacer />
            <SubmitButton fullWidth>Submit</SubmitButton>
          </FormWrapper>
        </FormikForm>
      )}
    </Formik>
  );
};

export { FormExample };
