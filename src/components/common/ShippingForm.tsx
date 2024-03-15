'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { countries } from 'country-flag-icons';
import Image from 'next/image';
import { shippingAndContactSchema } from '@/types/types';
import Link from 'next/link';
import { Button } from '../ui/Button';

import {
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input/input';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { z } from 'zod';
import LoadingSpinner from './LoadingSpinner';

type FetchStatus = 'idle' | 'fetching' | 'error';

export default function ShippingAddressForm() {
  type FormData = z.infer<typeof shippingAndContactSchema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedPrefix, setSelectedPrefix] = useState('');
  const [status, setStatus] = useState<FetchStatus>('idle');
  const countriesAll = getCountries();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const phoneNumberWithPrefix = selectedPrefix + data.phoneNumber;
    const dataToSend = {
      ...data,
      phoneNumber: `+${phoneNumberWithPrefix}`,
    };

    const apiUrl = 'API_ENDPOINT';

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend),
    };
    setStatus('fetching');
    fetch(apiUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Response:', data);
        reset();
        setCountry('');
        setPhoneNumber('');
        setSelectedPrefix('');
        setStatus('idle');
      })
      .catch((error) => {
        console.error('There was an error with your fetch request:', error);
        setStatus('error');
      });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPhoneNumber(value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="pt-10">
        <div className="pb-7">
          <h3 className="text-2xl font-medium">Contacts</h3>
        </div>

        <div className="md:flex md:flex-row md:items-center md:gap-7 flex flex-col justify-start gap-5">
          <div>
            <Input
              type="email"
              className={`border ${
                errors.email
                  ? 'border-red-600 placeholder:text-red-600'
                  : 'border-border placeholder:text-gray'
              } rounded-md lg:w-[297px] md:w-[313px] lg:h-[44px] w-full h-[44px] `}
              placeholder="Email"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div className="flex items-center">
            <div>
              <Select
                value={selectedPrefix}
                onValueChange={(value) => setSelectedPrefix(value)}
              >
                <SelectTrigger
                  className={` border ${
                    errors.phoneNumber
                      ? 'border-red-600 placeholder:text-red-600'
                      : 'border-border'
                  } rounded-l-md rounded-r-none w-[60px] h-[44px]`}
                >
                  <SelectValue
                    placeholder={
                      <div>
                        <p
                          className={`${
                            errors.phoneNumber ? 'text-red-600' : ''
                          }`}
                        >
                          +373
                        </p>
                      </div>
                    }
                  >
                    <span>+{selectedPrefix}</span>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="absolute mt-1 w-full max-h-60 overflow-y-auto bg-white border border-border rounded-md shadow-md">
                  {countriesAll.map((country) => (
                    <SelectItem
                      key={country}
                      value={getCountryCallingCode(country)}
                      onSelect={() => {
                        setSelectedPrefix(getCountryCallingCode(country));
                      }}
                    >
                      {`${country} (+${getCountryCallingCode(country)})`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.phoneNumber && <div className="w-full h-6"></div>}
            </div>
            <div className="relative w-full">
              <Input
                type="tel"
                className={`border ${
                  errors.phoneNumber
                    ? 'border-red-600 placeholder:text-red-600'
                    : 'border-border placeholder:text-gray'
                } rounded-r-md rounded-l-none lg:w-[237px] lg:h-[44px] md:w-[253px] md:-ml-0 w-full h-[44px]`}
                placeholder="Phone Number"
                {...register('phoneNumber', { required: true })}
                value={phoneNumber}
                onChange={handlePhoneChange}
              />
              <div className="absololute w-full -ml-14">
                {errors.phoneNumber && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="pb-7">
            <h3 className="text-2xl font-medium">Shipping Address</h3>
          </div>

          <div className="md:flex md:flex-row md:gap-7 flex flex-col gap-5">
            <div>
              <Input
                type="text"
                className={`border ${
                  errors.firstName
                    ? 'border-red-600 placeholder:text-red-600'
                    : 'border-border placeholder:text-gray'
                } rounded-md p-2 lg:w-[297px] md:w-[313px] lg:h-[44px] w-full h-[44px] `}
                placeholder="First Name"
                {...register('firstName', { required: true })}
              />
              {errors.firstName && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <Input
                type="text"
                className={`border ${
                  errors.lastName
                    ? 'border-red-600 placeholder:text-red-600'
                    : 'border-border placeholder:text-gray'
                } rounded-md p-2 lg:w-[297px] md:w-[313px] lg:h-[44px] w-full h-[44px] `}
                placeholder="Last Name"
                {...register('lastName', { required: true })}
              />
              {errors.lastName && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          <div className="relative flex items-center md:py-10 py-5">
            <Select
              onValueChange={(value) => {
                setCountry(value);
              }}
            >
              <SelectTrigger
                className={`border ${
                  errors.country ? 'border-red-600' : 'border-border'
                } rounded-l-md rounded-r-none lg:w-[109px] md:w-[104px] lg:h-[44px] w-[104px] h-[44px] p-2 m-0 appearance-none pl-9 flex items-center justify-between`}
              >
                <SelectValue
                  className="flex items-center w-full relative"
                  placeholder={
                    <div className="flex items-center justify-between ">
                      <div className="flex items-center justify-start absolute left-4">
                        <div className="flex-shrink-0 mr-2">
                          <Image
                            src="/img/moldova-flag.png"
                            alt="MD"
                            width={20}
                            height={10}
                          />
                        </div>
                        <p
                          className={`text-base ${
                            errors.country ? 'text-red-600' : 'text-gray'
                          }`}
                        >
                          MD
                        </p>
                      </div>
                      <ChevronDownIcon
                        className={`h-6 w-6 ml-10 ${
                          errors.country ? 'text-red-600' : 'text-gray'
                        }`}
                      />
                    </div>
                  }
                />
              </SelectTrigger>

              <SelectContent className="absolute mt-1 w-[calc(100% - 2rem)] max-h-60 overflow-y-auto bg-white border border-border rounded-md shadow-md">
                {countries.map((country, index) => (
                  <SelectItem key={index} value={country}>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-2">
                        <Image
                          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
                          alt={country}
                          width={20}
                          height={10}
                          priority
                        />
                      </div>
                      <span>{country}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              type="text"
              className={`border border-border p-2 rounded-r-md rounded-l-none lg:w-[512px] lg:h-[44px] md:w-[550px] md:[44px] w-full h-[44px] md:-mr-5 lg:-mr-0 ${
                errors.country ? 'border-red-600 placeholder:text-red-600' : ''
              }`}
              placeholder="Country"
              {...register('country', { required: true })}
              value={country}
            />
            {errors.country && (
              <span className="text-red-600 absolute inset-0 top-16 right-0 flex items-center pr-2">
                This field is required
              </span>
            )}
          </div>
          <div className="md:flex md:flex-row md:gap-7 flex flex-col gap-5 md:pb-10 pb-5">
            <div>
              <Input
                type="text"
                className={`border ${
                  errors.city
                    ? 'border-red-600 placeholder:text-red-600'
                    : 'border-border placeholder:text-gray'
                } rounded-md p-2 lg:w-[297px] md:w-[313px] lg:h-[44px] w-full h-[44px] `}
                placeholder="City"
                {...register('city', { required: true })}
              />
              {errors.city && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <Input
                type="text"
                className={`border ${
                  errors.postalCode
                    ? 'border-red-600 placeholder:text-red-600'
                    : 'border-border placeholder:text-gray'
                } rounded-md p-2 lg:w-[297px] md:w-[313px] lg:h-[44px] w-full h-[44px] `}
                placeholder="Postal Code"
                {...register('postalCode', { required: true })}
              />
              {errors.postalCode && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>
          <div className="md:flex md:flex-row md:gap-7 flex flex-col gap-5">
            <div>
              <Input
                type="text"
                className={`border ${
                  errors.apartment
                    ? 'border-red-600 placeholder:text-red-600'
                    : 'border-border placeholder:text-gray'
                } rounded-md p-2 lg:w-[297px] md:w-[313px] lg:h-[44px] w-full h-[44px] `}
                placeholder="Apartment, Suite, etc."
                {...register('apartment', { required: true })}
              />
              {errors.apartment && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <Input
                type="text"
                className={`border ${
                  errors.address
                    ? 'border-red-600 placeholder:text-red-600'
                    : 'border-border placeholder:text-gray'
                } rounded-md p-2 lg:w-[297px] md:w-[313px] lg:h-[44px] ww-full h-[44px] `}
                placeholder="Address"
                {...register('address', { required: true })}
              />
              {errors.address && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end lg:mr-20 gap-10 pt-10 md:-mr-3 mr-2">
            <Link href="/cart" className="font-medium text-base">
              Return to cart
            </Link>
            <Button
              type="submit"
              className={`w-[161px] h-[44px] text-base font-medium ${
                status === 'error' ? 'text-red-500' : 'text-pure-white'
              }`}
              disabled={status === 'fetching'}
              variant={status === 'error' ? 'destructive' : 'default'}
            >
              {status === 'idle' && <div>Add to Cart</div>}
              {status === 'fetching' && (
                <div className="flex gap-2 items-center">
                  <LoadingSpinner /> Adding to cart
                </div>
              )}
              {status === 'error' && <div>Something Wrong</div>}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
