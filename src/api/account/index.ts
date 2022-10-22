import type { Response } from "@/types/response";
import { httpService } from "../base";
import type { Account } from "@/types/friends";
export function getUserInfo(params: any): Promise<Response<Account>> {
  return httpService.get(`/account/user/getUserInfo`, params);
}
