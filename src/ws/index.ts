import { getWsUrl } from "@/util/auth";

export default class WSService {
  static instance: WSService | null = null;
  static get Instance() {
    if (!this.instance) {
      this.instance = new WSService();
    }
    return this.instance;
  }
  ws: WebSocket | null = null;
  callBackMapping: Map<string, Function> = new Map();
  connected = false;
  sendRetryCount = 0;
  connectRetryCount = 0;
  connect(userId: number) {
    if (!window.WebSocket) {
      return console.log("unsupport websocket");
    }
    this.ws = new WebSocket(getWsUrl() + "?userId=" + userId);
    this.ws.onopen = () => {
      console.log("ws 服务器连接成功^_^");
      this.connected = true;
      this.connectRetryCount = 0;
    };
    this.ws.onclose = () => {
      console.log("ws 服务器断开连接");
      this.connected = false;
      this.connectRetryCount++;
      setTimeout(() => {
        this.connect(userId);
      }, 500 * this.connectRetryCount);
    };
  }
  // 回调函数注册
  registerCallBack(socketType: string, callBack: Function) {
    this.callBackMapping[socketType] = callBack;
  }
  //
  unRegisterCallBack(socketType: string) {
    this.callBackMapping[socketType] = null;
  }
  send(data: any) {
    if (this.connected) {
      this.sendRetryCount = 0;
      try {
        this.ws?.send(JSON.stringify(data));
      } catch (echo) {
        this.ws?.send(data);
      }
    } else {
      this.sendRetryCount++;
      setTimeout(() => {
        this.sendRetryCount++;
      }, this.sendRetryCount * 500);
    }
  }
}
