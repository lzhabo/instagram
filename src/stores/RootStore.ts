import { AccountStore, RouterStore } from "./index";
import { computed } from "mobx";

export default class RootStore {
  public accountStore: AccountStore;
  public routerStore: RouterStore;

  constructor(initState?: any) {
    this.accountStore = new AccountStore(this);
    this.routerStore = new RouterStore(this);

    Promise.all([this.accountStore.sync()]).then();

    console.log(this);
  }

  @computed
  get initialized() {
    return this.accountStore.initialized;
  }
}
