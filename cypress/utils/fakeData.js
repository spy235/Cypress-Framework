
const { faker } = require("@faker-js/faker");

export function generateUserData() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  return {
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }),
    password: faker.internet.password({ length: 10 }),
    title: 'Mr',
    birth_date: faker.number.int({ min: 1, max: 28 }),
    birth_month: faker.date.month(),
    birth_year: faker.number.int({ min: 1970, max: 2000 }),
    firstname: firstName,
    lastname: lastName,
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: 'India',
    zipcode: faker.location.zipCode('######'),
    state: faker.location.state(),
    city: faker.location.city(),
    mobile_number: faker.phone.number('9#########')
  };
}