// https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageNo=1&pageSize=3
import { http } from "@/utils/https"
import IndexedDB from '@/utils/indexedDB'

const airbnbDB = new IndexedDB('airbnb')
//真实接口数据
export function getRoomList() {
    return http.httpGet('https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageNo=1&pageSize=3', {})
}


//indexedDB数据库mock数据

export async function fetchElephant () {

  await  airbnbDB.openStore('elephant', 'id', ['nose', 'ear'])
 const result= await  airbnbDB.getList('elephant').then(res=>{
    return {code:'000000',
        message:"查询成功",
        result:res,
        success:true
    }

 })
 console.log('dddddddddddvgfff',result)
 return result

    // return http.httpGet('https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageNo=1&pageSize=3', {})
}