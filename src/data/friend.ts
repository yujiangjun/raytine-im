class Friend {
  userId: string;
  userName: string;
  avator: string;
  status: number;

  constructor(
    userId: string,
    userName: string,
    avator: string,
    status: number
  ) {
    this.userId = userId;
    this.userName = userName;
    (this.avator = avator), (this.status = status);
  }
}

export default Friend;
