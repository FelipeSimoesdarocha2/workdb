// React
import { useState, useEffect } from 'react';

// Models
import { ContactDTO } from 'models';

// Api
import { useCreateContact } from 'api/contact';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslation from 'i18n';

// Yup
import * as yup from 'yup';

export const useContact = () => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = useTranslation();
  const { mutateAsync } = useCreateContact();

  const initialValues: ContactDTO = {
    name: '',
    phone: '',
    email: '',
    company: '',
    mensage: '',
  };

  const onSubmit = async () => {
    setLoading(true);

    const dataRequest: ContactDTO = {
      name: formik.values.name,
      phone: formik.values.phone,
      email: formik.values.email,
      company: formik.values.company,
      mensage: formik.values.mensage,
    };

    const response = await mutateAsync(dataRequest);

    if (response.status === 200) {
      const responseData = await response.json();
      setLoading(false);
    } else {
      const data = await response.json();
    }
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email('email-invalid').required('email-required'),
  });

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit,
  });

  useEffect(() => {
    if (!formik.values.name || !formik.values.email) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formik.values]);

  return {
    t,
    formik,
    loading,
    disabled,
    onSubmit,
  };
};
