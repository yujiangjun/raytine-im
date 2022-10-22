import type { Response } from "@/types/response";
import { httpService } from "../base";
import type { LoginUser, AccountToken } from "@/types/login";
export function Login(param: LoginUser): Promise<Response<AccountToken>> {
  return httpService.post(`/account/login`, param);
}
