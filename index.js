import getUniqueId from "./utils/getUniqueId.js";
import getRandomValueFromArray from "./utils/getRandomValueFromArray.js";
import getRandomNumberMinMax from "./utils/getRandomNumberMinMax.js";
import getRandomCoords from "./utils/getRandomCoords.js";

import companyNames from "./data/companyNames.js";
import countries from "./data/countries.js";
import cities from "./data/cities.js";
import streets from "./data/streets.js";
import emails from "./data/emails.js";
import foundingDates from "./data/foundingDates.js";
import ceos from "./data/ceos.js";
import logos from "./data/logos.js";
import descriptions from "./data/descriptions.js";
import slogans from "./data/slogans.js";

const getRandomCompanies = (amount = 10, settings = {}) => {
  const companies = [];

  const options = {
    id: true,
    companyName: true,
    country: true,
    city: true,
    street: true,
    houseNumber: true,
    postCode: true,
    phoneNumber: true,
    email: true,
    foundingDate: true,
    coords: true,
    ceo: true,
    webSite: true,
    numberOfWorkers: true,
    description: true,
    slogan: true,
    logo: true,

    ...settings,
  };

  if (Object.values(options).every((value) => !value)) {
    return [];
  }

  for (let i = 0; i < amount; i++) {
    const company = {};

    if (options.id) {
      company.id = getUniqueId();
    }

    if (options.companyName) {
      company.companyName = getRandomValueFromArray(companyNames);
    }

    if (options.country) {
      company.country = getRandomValueFromArray(countries);
    }

    if (options.city) {
      company.city = getRandomValueFromArray(cities);
    }

    if (options.street) {
      company.street = getRandomValueFromArray(streets);
    }

    if (options.houseNumber) {
      company.houseNumber = getRandomNumberMinMax(0, 1000);
    }

    if (options.postCode) {
      company.postCode = getRandomNumberMinMax(10000, 99999);
    }

    if (options.phoneNumber) {
      company.phoneNumber = `+${getRandomNumberMinMax(
        1,
        99
      )}(${getRandomNumberMinMax(100, 999)}) ${getRandomNumberMinMax(
        100,
        999
      )}-${getRandomNumberMinMax(1000, 9999)}`;
    }

    if (options.email) {
      company.email = getRandomValueFromArray(emails);
    }

    if (options.foundingDate) {
      company.foundingDate = getRandomValueFromArray(foundingDates);
    }

    if (options.coords) {
      company.coords = {
        latitude: getRandomCoords(180, -180, 11),
        longitude: getRandomCoords(180, -180, 11),
      };
    }

    if (options.ceo) {
      company.ceo = getRandomValueFromArray(ceos);
    }

    if (options.webSite) {
      company.webSite = "https://some-random-website.com";
    }

    if (options.numberOfWorkers) {
      company.numberOfWorkers = getRandomNumberMinMax(2, 9999);
    }

    if (options.description) {
      company.description = getRandomValueFromArray(descriptions);
    }

    if (options.slogan) {
      company.slogan = getRandomValueFromArray(slogans);
    }

    if (options.logo) {
      company.logo = getRandomValueFromArray(logos);
    }

    companies.push(company);
  }

  return companies;
};

export default getRandomCompanies;
