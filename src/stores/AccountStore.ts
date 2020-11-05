import { RootStore } from "./index";
import { action, computed, observable, runInAction } from "mobx";
import usersService from "@services/usersService";
import { IUser } from "../interfaces";

export default class AccountStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable initialized = false;
  @observable users: IUser[] = [];

  @action sync = async () => {
    const users = await usersService.users();
    runInAction(() => {
      this.users = users;
      this.initialized = true;
    });
  };

  @computed get activeUser(): IUser | undefined {
    return this.users[0] ?? undefined;
  }
}
