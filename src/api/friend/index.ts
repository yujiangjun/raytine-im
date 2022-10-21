import type { Response } from "@/types/response";
import { httpService } from "../base";
import type { Account } from "@/types/friends";
export function getMineFriends(): Promise<Response<Array<Account>>> {
  return httpService.get(`/account/friend/getMyFriends`);
}
