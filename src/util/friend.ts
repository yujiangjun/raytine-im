import type Friend from '@/data/friend';
import loginPng from '@/assets/OIP-C.jpg'
let getFriends = function():Array<Friend> {
    let result:Array<Friend> = []
    for (let index = 0; index < 10; index++) {
        result.push({
            userId:''+index,
            userName:'张三'+index,
            avator:loginPng,
            status:1

        })
        
    }
    return result
}

export {getFriends}