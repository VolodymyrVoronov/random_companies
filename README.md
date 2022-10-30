## What is it?

Package for generating mock data for companies. 

## Installation

Run `npm i random_companies` or `yarn add random_companies`

## Use

import getRandomCompanies from "random_companies";

**const data = getRandomCompanies(10, {})**

The first argument is amunt of companies, that will be generated and given back in array.
**10** by default;
<br/>

The second argument is settings for data to be generated.
**{}** by default, it means all parameters are on (true) and will be generated and added to array.

`{
    id: true,
    companyName: true,
    country: true,
    city: true,
    street: true,
    houseNumber: true, (number)
    postCode: true, (number)
    phoneNumber: true,
    email: true,
    foundingDate: true,
    coords: true, (numbers)
    ceo: true,
    webSite: true,
    numberOfWorkers: true, (number)
    description: true,
    slogan: true,
    logo: true,
  }`


If you dont need some of the parameters, just set it to false.

**getRandomCompanies(10, { logo: false, phoneNumber: false })**
*The output wont contain logo and phone number of the companies.*

## Parameters

The function accepts two parameters, amount (number) and settings (object).

By default **getRandomCompanies()** returns **10 companies** (array) with all settings on.

    id (string)
    companyName (string)
    country (string)
    city (string)
    street (string)
    houseNumber (number)
    postCode (number)
    phoneNumbe (string)
    emai (string)
    foundingDate (string)
    coords (numbers)
    ceo (string)
    webSite (string)
    numberOfWorkers (number)
    description (string)
    slogan (string)
    logo (string/png:base64)
