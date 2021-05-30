import chai from 'chai';

const expect = chai.expect;
chai.should();

import RobotState from '../src/action/RobotState';
import robotFactory from '../src/action/Robot/factory';
import { isValidTimestamp } from '../src/utils/regex';

describe('RobotStateClass Test', function () {
  const robot = robotFactory();
  const state = new RobotState(robot);

  it('Able to get the current state', function () {
    expect(state.getState()).to.deep.equal({
      positions: robot.getPosition(),
      direction: robot.getDirection(),
    });
  });
  
  it('should return a valid timestamp for the creation timestamp of the state', function () {    
    expect(isValidTimestamp(state.getDate())).to.be.true;
  })

  it('Able to throw an error if no robots is being provided', function () {
    expect(() => new RobotState()).to.throw('Please provide a robot');
  });
});
