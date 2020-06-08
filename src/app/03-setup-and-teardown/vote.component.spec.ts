import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

  let component: VoteComponent;

  // set up
  beforeEach(() => {
    component = new VoteComponent();
  });

  beforeAll(() => { });

  // tear down -> clean up code.
  afterEach(() => { })

  afterAll(() => { });

  it('should increment totalVotes when upVoted', () => {
    // Arrange.
    // let component = new VoteComponent();

    // Act.
    component.upVote();

    // Assertion.
    expect(component.totalVotes).toBe(1);

  });

  it('should decrement totalVotes when downVoted', () => {
    // Arrange.
    // let component = new VoteComponent();

    // Act.
    component.downVote();

    // Assertion.
    expect(component.totalVotes).toBe(-1);
  });
});