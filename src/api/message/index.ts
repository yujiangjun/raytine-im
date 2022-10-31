import type { Response } from "@/types/response";
import { httpService } from "../base";
import type { Session } from "@/types/session";
import type { UnReadUserCountVo } from "@/types/message";
export function getMySessionList(param: any): Promise<Response<Session[]>> {
  return httpService.get(`/message/session/getMySessionList`, param);
}
export function getUnReadCountTotal(param: any): Promise<Response<number>> {
  return httpService.get(`/message/message/getMyUnReadCountTotal`, param);
}
export function getUnReadCountList(
  param: any
): Promise<Response<UnReadUserCountVo[]>> {
  return httpService.get(`/message/message/getMyUnReadCountList`, param);
}
