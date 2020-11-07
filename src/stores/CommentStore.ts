import { RootStore } from "./index";
import { action, observable, runInAction } from "mobx";
import { IComment } from "../interfaces";
import commentsService from "@services/commentsService";
export default class PostStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable initialised = false;
  @observable comments: IComment[] = [];

  @action sync = async () => {
    const comments = await commentsService.comments();
    runInAction(() => {
      this.comments = comments;
      this.initialised = true;
    });
    console.log(this.initialised);
  };

}
