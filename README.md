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

{
   &emsp; id: true,
   &emsp; companyName: true,
   &emsp; country: true,
   &emsp; city: true,
   &emsp; street: true,
   &emsp; houseNumber: true,
   &emsp; postCode: true,
   &emsp; phoneNumber: true,
   &emsp; email: true,
   &emsp; foundingDate: true,
   &emsp; coords: true,
   &emsp; ceo: true,
   &emsp; webSite: true,
   &emsp; numberOfWorkers: true,
   &emsp; description: true,
   &emsp; slogan: true,
   &emsp; logo: true,
  }


If you dont need some of the parameters, just set it to false.

**getRandomCompanies(10, { logo: false, phoneNumber: false })**
*The output wont contain logo and phone number of the companies.*

## Parameters

The function accepts two parameters, amount (number) and settings (object);

By default **getRandomCompanies()** returns **10 companies** (array) with all settings on;

    id: true, (string)
    companyName: true, (string)
    country: true, (string)
    city: true, (string)
    street: true, (string)
    houseNumber: true, (number)
    postCode: true, (number)
    phoneNumber: true, (string)
    email: true, (string)
    foundingDate: true, (string)
    coords: true, (numbers)
    ceo: true, (string)
    webSite: true, (string)
    numberOfWorkers: true, (number)
    description: true, (string)
    slogan: true, (string)
    logo: true, (string/png:base64)
