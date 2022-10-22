export interface MessageData {
  msgId?: string;
  cat: number;
  type: number;
  sendTime: Date;
  messageType: number;
  dict: number;
  content: string;
  sendUserId: string;
  targetId: string;
  targetName: string;
  targetAvatar: string;
}
