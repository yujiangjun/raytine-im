class Mes {
  sendId: string;
  sendName: string;
  sendAvator: string;
  reciveId: string;
  reciveName: string;
  reciveAvator: string;
  sendTime: string;
  mesDict: number;
  mesType: number;
  content: string;
  constructor(
    sendId: string,
    sendName: string,
    reciveId: string,
    reciveName: string,
    sendTime: string,
    mesDict: number,
    mesType: number,
    sendAvator: string,
    reciveAvator: string,
    content: string
  ) {
    this.sendId = sendId;
    this.sendName = sendName;
    this.reciveId = reciveId;
    this.reciveName = reciveName;
    this.sendTime = sendTime;
    this.mesDict = mesDict;
    this.mesType = mesType;
    this.sendAvator = sendAvator;
    this.reciveAvator = reciveAvator;
    this.content = content;
  }
}

export default Mes;
