import type { MessageData } from "@/types/message";
export function saveMes(targetId: string, message: MessageData) {
  let last: MessageData[];
  if (!localStorage.getItem("message_" + targetId)) {
    last = [];
  } else {
    last = JSON.parse(localStorage.getItem("message_" + targetId) || "");
  }
  last.push(message);
  localStorage.setItem("message_" + targetId, JSON.stringify(last));
}

export function getMes(targetId: string): MessageData[] {
  return JSON.parse(localStorage.getItem("message_" + targetId) || "");
}
