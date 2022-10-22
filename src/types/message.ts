export interface MessageData {
  msgId?: string;
  cat: number;
  type: number;
  sendTime: string;
  messageType: number;
  dict: number;
  content: string;
  sendUserId: string;
  targetId: string;
  targetName: string;
  targetAvatar: string;
}
