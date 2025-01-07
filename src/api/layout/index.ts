
import IndexedDB from '@/utils/indexedDB'
import { ElLoading } from 'element-plus'
import airbnbDB from '../../db'
// const airbnbDB = new IndexedDB('airbnb')


//indexedDB数据库mock数据

export async function saveLanguageApi(lang:any) {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })

    await airbnbDB.openStore('language', 'id', ['name'])
    const result = await airbnbDB.getItem('language', 1).then(res => {
        return {
            code: '000000',
            message: "操作成功",
            result: res,
            success: true
        }
    })
    const { success } = result
    let obj = {}
    if (success) {//存在则更新数据
        obj = { name: lang, id: 1 }
    } else {//数据不存在，新增数据
        obj = { name: lang, id: 1 }
    }
    console.log('ddddddddddddddddss')
    const resultLang = await airbnbDB.updateItem('language', obj).then(res => {
        setTimeout(() => {
            loading.close()
          }, 2000)
        return {
            code: '000000',
            message: "操作成功",
            result: res,
            success: true
        }
    })
    console.log('resultLang', resultLang)
    return resultLang

}


export async function fetchLanguageApi() {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })

    await airbnbDB.openStore('language', 'id', ['name'])
    const result = await airbnbDB.getItem('language', 1).then((res:any) => {
        setTimeout(() => {
            loading.close()
          }, 2000)
        return {
            code: '000000',
            message: "操作成功",
            result: res,
            success: true
        }
    })
    return result
}