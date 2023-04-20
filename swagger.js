require('dotenv').config(); 
const swaggerJsdoc =require('swagger-jsdoc'); 
const swaggerUi = require('swagger-ui-express');  
const options = {
	swaggerDefinition:{
    	openapi: "3.0.3",
        info:{
        	title: 'API FOR FLING',
            version: '0.0.1',
            description: 'API FOR FLING WITH EXPRESS',
        },
        servers:[
        	{
            	url:`http://localhost:${process.env.SERVER_PORT ? process.env.SERVER_PORT : 8000}`,
            },
       ],
	},
    apis:['./domainData/controller/DomainDataController.js']
};

const specs = swaggerJsdoc(options);

module.exports = {
	swaggerUi,
    specs
}
