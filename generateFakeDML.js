import {faker} from '@faker-js/faker'; 

for (let i=0; i <20; i++) {
    const comp = faker.company.name()
    const regex = /[\s-']+/g; 
    console.log(`('${comp}', 'https://spatial.io/${comp.replace(regex, '_')}', '${faker.lorem.lines()}', '${faker.lorem.lines(1)}'),`)
}

