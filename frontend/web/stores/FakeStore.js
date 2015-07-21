import alt from '../alt';
import FakeActions from '../actions/FakeActions';
class FakeStore {

  constructor() {
    this.locations = [];
    this.bindListeners({
      handleUpdateLocations: FakeActions.UPDATE_LOCATIONS
    });
  }

  handleUpdateLocations(locations) {
    this.locations = locations;
  }

}
export default alt.createStore(FakeStore, 'LocationStore');