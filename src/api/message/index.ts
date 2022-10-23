import type { Response } from "@/types/response";
import { httpService } from "../base";
import type { Session } from "@/types/session";
export function getMySessionList(param: any): Promise<Response<Session[]>> {
  return httpService.get(`/message/session/getMySessionList`, param);
}
