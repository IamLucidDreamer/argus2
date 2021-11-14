import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import {
  getUser,
  updateUser,
} from '../../../../../context/actions/authActions/getUserAction';
import axiosInstance from '../../../../../helpers/axiosInstance';
import { Country, State, City } from 'country-state-city';

const ContactDetails = ({ user }) => {
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};
    if (!values.country) {
      errors.country = '*Required';
    }
    if (!values.province) {
      errors.province = '*Required';
    }
    if (!values.streetNumber) {
      errors.streetNumber = '*Required';
    }
    if (!values.city) {
      errors.city = '*Required';
    }
    if (!values.street) {
      errors.street = '*Required';
    }
    if (!values.postalCode) {
      errors.postalCode = '*Required';
    }
    if (!values.suite) {
      errors.suite = '*Required';
    }
    if (!values.homePhone) {
      errors.homePhone = '*Required';
    } else if (values.homePhone > 15 && values.homePhone < 6) {
      errors.homePhone = 'Number should be in range 6-15';
    }
    if (!values.phone) {
      errors.phone = '*Required';
    } else if (values.phone > 15 && values.phone < 6) {
      errors.phone = 'Number should be in range 6-15';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const { getFieldProps, handleSubmit, errors, setValues, setFieldValue } =
    useFormik({
      initialValues: {
        country: '',
        province: '',
        streetNumber: '',
        city: '',
        street: '',
        postalCode: '',
        suite: '',
        homePhone: '',
        phone: '',
        email: '',
      },
      validate,
      onSubmit: async (values, { resetForm }) => {
        dispatch(
          updateUser(
            resetForm,
            values,
            'Contact Details updated',
            user?.name,
            user?._id,
          ),
        );
      },
    });
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    setCountry({ value: null, label: user?.country });
    setState({ value: null, label: user?.province });
    setCity({ value: null, label: user?.city });

    setValues({
      country: user?.country,
      province: user?.province,
      streetNumber: user?.streetNumber,
      city: user?.city,
      street: user?.street,
      postalCode: user?.postalCode,
      suite: user?.suite,
      homePhone: user?.homePhone,
      phone: user?.phone,
      email: user?.email,
    });
  }, [user, setValues]);

  let countryOptions = [];
  let stateOptions = [];
  let cityOptions = [];

  Country?.getAllCountries()?.forEach((element) => {
    countryOptions.push({ value: element?.isoCode, label: element?.name });
  });

  State?.getStatesOfCountry(country?.value)?.forEach((element) => {
    stateOptions.push({ value: element?.isoCode, label: element?.name });
  });

  City?.getCitiesOfState(country?.value, state?.value)?.forEach((element) => {
    cityOptions.push({ value: element?.isoCode, label: element?.name });
  });

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'gray',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      display: 'flex',
      border: 0,
      borderBottom: '2px solid black',
      fontWeight: 100,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    },
  };

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="rounded-lg bg-white mx-4 md:mx-8 my-4 p-2 md:p-4 shadow-button-shadow-2 h-box overflow-y-scroll">
        <div className="flex items-center mb-4">
          <span className="inline-block text-red-1">
            <svg
              className="w-14 h-14"
              s
              viewBox="-32 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h1 className="text-lg text-gray-3 font-bold mx-5">
            Contact Details
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-black font-bold"
        >
          <div className="flex flex-col">
            <label> Country</label>
            <Select
              placeholder="Select Country"
              className=" w-full border-0"
              options={countryOptions}
              styles={customStyles}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: 'lightgray',
                  primary: '#BA0913',
                },
              })}
              value={country}
              onChange={(selectedOption) => {
                setFieldValue('country', selectedOption.label);
                setCountry(selectedOption);
              }}
            />

            {/* <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none "
              {...getFieldProps("country")}
            /> */}
            {errors.country ? (
              <div className="w-full text-xs text-red-400">
                {errors.country}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> State/Province</label>
            <Select
              placeholder="Select State/Province"
              className=" w-full border-0"
              options={stateOptions}
              styles={customStyles}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: 'lightgray',
                  primary: '#BA0913',
                },
              })}
              value={state}
              onChange={(selectedOption) => {
                setFieldValue('province', selectedOption.label);
                setState(selectedOption);
              }}
            />
            {errors.province ? (
              <div className="w-full text-xs text-red-400">
                {errors.province}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> City</label>
            <Select
              placeholder="Select City"
              className=" w-full border-0"
              options={cityOptions}
              styles={customStyles}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: 'lightgray',
                  primary: '#BA0913',
                },
              })}
              value={city}
              onChange={(selectedOption) => {
                setFieldValue('city', selectedOption.label);
                setCity(selectedOption);
              }}
            />
            {errors.city ? (
              <div className="w-full text-xs text-red-400">{errors.city}</div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Street</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none "
              {...getFieldProps('street')}
            />
            {errors.street ? (
              <div className="w-full text-xs text-red-400">{errors.street}</div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Street Number</label>
            <input
              type="number"
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps('streetNumber')}
            />
            {errors.streetNumber ? (
              <div className="w-full text-xs text-red-400">
                {errors.streetNumber}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Suite</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps('suite')}
            />
            {errors.suite ? (
              <div className="w-full text-xs text-red-400">{errors.suite}</div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Postal Code</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none "
              {...getFieldProps('postalCode')}
            />
            {errors.postalCode ? (
              <div className="w-full text-xs text-red-400">
                {errors.postalCode}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Home Phone</label>
            <input
              type="number"
              className="border-b-2 border-black focus:border-red-1 focus:outline-none "
              {...getFieldProps('homePhone')}
            />
            {errors.homePhone ? (
              <div className="w-full text-xs text-red-400">
                {errors.homePhone}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Call Phone</label>
            <input
              type="number"
              className="border-b-2 border-black focus:border-red-1 focus:outline-none "
              {...getFieldProps('phone')}
            />
            {errors.phone ? (
              <div className="w-full text-xs text-red-400">{errors.phone}</div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Email</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps('email')}
            />
            {errors.email ? (
              <div className="w-full text-xs text-red-400">{errors.email}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="mx-auto my-4 w-1/2 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactDetails;
