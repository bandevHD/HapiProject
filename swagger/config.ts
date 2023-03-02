import * as Hapi from '@hapi/hapi';
import inert from '@hapi/inert';
import * as HapiSwagger from 'hapi-swagger';
import Vision from '@hapi/vision';

// code omitted for brevity

const swaggerOptions: HapiSwagger.RegisterOptions = {
    info: {
        title: 'Test API Documentation'
    }
};

export const plugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
    {
        plugin: inert
    },
    {
        plugin: Vision
    },
    {
        plugin: HapiSwagger,
        options: swaggerOptions
    }
];