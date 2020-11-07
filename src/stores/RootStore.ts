import { AccountStore, PostStore, RouterStore , CommentStore} from "./index";
import { computed } from "mobx";

export default class RootStore {
  public accountStore: AccountStore;
  public postStore: PostStore;
  public commentStore: CommentStore;
  public routerStore: RouterStore;

  constructor(initState?: any) {
    this.accountStore = new AccountStore(this);
    this.commentStore = new CommentStore(this);
    this.postStore = new PostStore(this);
    this.routerStore = new RouterStore(this);

    Promise.all([this.accountStore.sync(), this.postStore.sync(), this.commentStore.sync()]).then();

    console.log(this);
  }

  @computed
  get initialized() {
    return this.accountStore.initialized && this.postStore.initialised && this.commentStore.initialised;
  }
}
