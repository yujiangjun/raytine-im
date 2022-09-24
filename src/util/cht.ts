import type Mes from "@/data/mes";
import loginPng from "@/assets/OIP-C.jpg";

const getDemoMes = function (): Array<Mes> {
  const result: Array<Mes> = [];
  for (let index = 0; index < 100; index++) {
    result.push({
      sendId: "1",
      reciveId: "2",
      sendTime: "2020-09-20 11:11:11",
      mesDict: index % 2 == 0 ? 0 : 1,
      mesType: 1,
      sendName: "张三",
      reciveName: "李四",
      sendAvator: loginPng,
      reciveAvator: loginPng,
      content: "hello world",
    });
  }
  return result;
};
export { getDemoMes };
