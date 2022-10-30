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

```javascript
{
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
  }
```
<br/>
#### If you dont need some of the parameters, just set it to false.

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


## Output example


    {
        id: 'n5gnd2m6wr6w12dn7yl99dqiok3w8j4o',
        companyName: 'Fadel, Hoeger and MacGyver',
        country: { name: 'Libyan Arab Jamahiriya', code: 'LY' },
        city: 'Lunness',
        street: 'Sycamore Lane',
        houseNumber: 502,
        postCode: 82604,
        phoneNumber: '+81(957) 584-1328',
        email: 'damian@hotmail.com',
        foundingDate: 'Feb. 8, 2007',
        coords: { latitude: -21.64023445281, longitude: -112.47123129941 },
        ceo: 'Ann Kirby',
        webSite: 'https://some-random-website.com',
        numberOfWorkers: 913,
        description: "But, it's still a very strange, abnormally perky, and Tracy Flick-esque (not exactly out of character for the company) for company that's had a streak of bad news. It's hard to imagine another multi-billion dollar company acting this way.",
        slogan: 'Would You Give Someone Your Last Company?',
        logo: 'data:image/png;base64,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'
      }
