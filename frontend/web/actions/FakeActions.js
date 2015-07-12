import alt from '../alt';

class FakeActions {
  updateLocations(locations) {
    this.dispatch(locations);
  }
}

export default alt.createActions(FakeActions);