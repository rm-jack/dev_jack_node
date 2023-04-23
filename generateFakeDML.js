const { faker } = require("@faker-js/faker");
// for (let i=0; i <20; i++) {
//     const comp = faker.company.name()
//     const regex = /[\s-']+/g;
//     console.log(`('${comp}', 'https://spatial.io}', '${faker.lorem.lines()}', '${faker.lorem.lines(1)}'),`)
// }

let res = [];
for (let i = 0; i < 10; i++) {
  const comp = faker.company.name();
  const regex = /[\s-']+/g;
  res.push(
    `('${comp.replace(regex, "")}', 'https://spatial.io', '${faker.lorem.lines(
      1
    )}','${faker.lorem.lines(2)}')`
  );
}
console.log("INSERT INTO PORTFOLIO"); 
console.log(`(portfolioName, spatialLink, skills, spaceDescription) VALUES`);
res.forEach((each) => {
  console.log(`${each},`, "\n");
});
