import {action, computed, observable} from 'mobx';

export class Counter {
  @observable count: number = 0

  @action increase() {
    this.count += 1;
  }

  @computed get double() {
    return this.count * 2;
  }

}
