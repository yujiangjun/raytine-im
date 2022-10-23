export interface Session {
  id: number;
  sendId: number;
  sendUserName: string;
  sendUserAvatar: string;
  targetId: number;
  targetName: string;
  targetAvatar: string;
  sessionTime: string;
  msgContent: string;
}
