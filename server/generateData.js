var faker = require('faker');

var database = { Menu: [] };

for (var i = 1; i <= 100; i++) {
  database.Menu.push({
    UID: i,
    MenuID: faker.datatype.uuid(),
    MenuName: faker.company.companyName(),
    CreatedBy: faker.name.firstName(),
    CreatedDt: faker.datatype.datetime(),
    ModifiedBy: faker.name.lastName(),
    ModifiedDt: faker.datatype.datetime()
  });
}

console.log(JSON.stringify(database));
