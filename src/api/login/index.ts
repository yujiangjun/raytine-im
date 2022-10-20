import type { Response } from "@/types/response";
import { httpService } from "../base";
import type { LoginUser } from "@/types/login";
export function Login(param: LoginUser): Promise<Response<string>> {
  return httpService.post(`/account/login`, param);
}
