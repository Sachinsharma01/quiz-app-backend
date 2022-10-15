import swaggerJsdoc from "swagger-jsdoc";
const options = {
  apis: ["**/*.ts"],
  basePath: "http:localhost:3000/api",
  swaggerDefinition: {
    info: {
      description: "Quiz App API Document",
      swagger: "3.0",
      title: "Quiz App",
      version: "1.0.0",
    },
  },
};
let specs = swaggerJsdoc(options);

export default specs;
