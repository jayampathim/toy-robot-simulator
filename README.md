# Toy Robot Simulator

## [Description]

- The application is a simulation of a toy robot moving on a square tabletop of dimensions 5 units x 5 units.

## [Prerequisites]

- This is a Node.js application.It is required to have installed below.
    Node.js
    npm/yarn
    typescript

## [Development Setup]

- Make suere to install all the required packages by using npm install or yarn install
- Start the application with `npm start`( if it's yarn you have to use `yarn start`)
- Run test scripts with `npm test`
- Test Driven Development(TDD) with `npm run test:watch`

## [Constraints]

-The toy robot must not fall off the table during movement. This also includes the initial
placement of the toy robot.
- Any move that would cause the robot to fall must be ignored.

## [Unit & Integration Testing]

Unit test have been used to test each one of the actions of application.It can be found at toy-robot-simulator/test.Integration testing can be done across all actions.

## [Deployment]

To deploy the application we can run deploy.sh at the project outside path it will run `npm run build` and create the build folder.

