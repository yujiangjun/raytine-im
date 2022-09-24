import loginPng from '@/assets/OIP-C.jpg'
class ChatUser {
    avator:string
    mesContent:string
    username: string
    sendTime: string
    constructor(avator:string,mesContent:string,username:string,sendTime:string){
        this.avator=avator
        this.mesContent=mesContent
        this.username=username
        this.sendTime=sendTime
    }

    
}

const fun = function():Array<ChatUser>{
    let chats:Array<ChatUser> = []

    for (let index = 0; index < 10; index++) {
        chats.push({
            avator:loginPng,
            mesContent:'hello'+index,
            username: '张三'+index,
            sendTime: '2020-09-25 00:00:00'
        })
    }
    
    
    return chats
}

export {fun}