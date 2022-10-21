// import type Friend from "@/data/friend";
// import loginPng from "@/assets/OIP-C.jpg";
import { getMineFriends } from "@/api/friend";
import type { Account } from "@/types/friends";
const getFriends = async function (): Promise<Account[]> {
  const resp = await getMineFriends();
  return resp.data;
};

export { getFriends };
