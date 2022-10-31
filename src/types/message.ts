export interface MessageData {
  msgId?: string;
  cat: number;
  type: number;
  sendTime: string;
  messageType: number;
  dict: number;
  content: string;
  sendUserId: string;
  sendUserName: string;
  sendAvatar: string;
  targetId: string;
  targetName: string;
  targetAvatar: string;
}
export interface UnReadUserCountVo {
  sendUserId: string;
  count: number;
}
export interface UnReadCountVo {
  total: number;
  userCountList: UnReadUserCountVo[];
}
