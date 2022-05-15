import { observable, makeObservable, action } from 'mobx';

const store = observable({
    memberName : sessionStorage.getItem("memberName") || '',
    memeberType : sessionStorage.getItem("memeberType") || '',
    accessToken : sessionStorage.getItem('access_token') || '',
    refreshToken : sessionStorage.getItem("refresh_token") || '',
    memberId : sessionStorage.getItem('memberId') || '',

  setUserInfo(data) {
    this.memberName = data.memberName;
    this.memeberType = data.memeberType;
    this.accessToken = data.accessToken;
    this.refreshToken = data.refreshToken;
    this.memberId = data.memberId;
    console.log("스토어 데이터", data)
  },

  logOut() {
    this.memberName = null;
    this.memeberType = null;
    this.accessToken = null;
    this.refreshToken = null;
    this.memberId = null;
  }
});

// makeObservable(store, {
//   memberName : observable,
//   memeberType : observable,
//   accessToken : observable,
//   refreshToken : observable,
//   memberId : observable,
//   setUserInfo: action,
// });

export { store };