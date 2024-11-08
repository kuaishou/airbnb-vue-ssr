

export default class DB {
    private dbName: string//数据库名称
    constructor(dbName: string) {
        this.dbName = dbName
    }

    //打开数据库
    public openStore(storeName: string, keyPath: string) {
        const request = window.indexedDB.open(this.dbName, 1)

        request.onsuccess = (event) => {
            console.log('数据库打开成功', event)
        }
        request.onerror = (error) => {
            console.log('数据库打开失败', error)
        }
        request.onupgradeneeded = (event) => {
            console.log('数据库升级成功', event)
            const { result }: any = event.target
            const store = result.createObjectStore(storeName, {
                autoIncrement: true,
                keyPath
            })
            store.transaction.oncomplete = (e: any) => {
                console.log('创建对象仓库里成功', e)
            }
        }
    }
}
