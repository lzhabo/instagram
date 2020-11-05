import { RootStore } from "./index";
import { action, computed, observable, runInAction } from "mobx";
import { IPost, IUser } from "../interfaces";
import postsService from "@services/postsService";

export default class PostStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable initialised = false;
  @observable posts: IPost[] = [];

  @action sync = async () => {
    const posts = await postsService.posts();
    runInAction(() => {
      this.posts = posts;
      this.initialised = true;
    });
    console.log(this.initialised);
  };

}
