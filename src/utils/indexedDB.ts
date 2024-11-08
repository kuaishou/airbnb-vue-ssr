
export default class DB {
    private dbName: string//数据库名称
    private db: any//数据库对象
    constructor(dbName: string) {
        this.dbName = dbName
    }

    //打开数据库
    public openStore(storeName: string, keyPath: string, indexs?: Array<string>) {
        const request = window.indexedDB.open(this.dbName, 1)
        return new Promise((resolve, reject) => {
            request.onsuccess = (event: any) => {
                this.db = event.target.result
                console.log('数据库打开成功', event)
                resolve(true)
            }


            request.onerror = (error) => {
                console.log('数据库打开失败', error)
                reject(reject)
            }

            request.onupgradeneeded = (event) => {
                console.log('数据库升级成功', event)
                const { result }: any = event.target

                //建表
                const store = result.createObjectStore(storeName, {
                    autoIncrement: true,
                    keyPath
                })

                //添加字段
                indexs?.map((v: string) => {
                    store.createIndex(v, v, { unque: false })
                })

                store.transaction.oncomplete = (e: any) => {
                    console.log('创建对象仓库里成功', e)
                }
            }
        })

    }




    //数据库的增删改查

    //新增/修改数据库数据
    updateItem(storeName: string, data: any) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.put({
            ...data,
            updateTime: new Date().getTime()
        })
        return new Promise((resolve, reject) => {
            request.onsuccess = (event: any) => {
                console.log('数据写入成功', event)
                resolve(event)
            }

            request.onerror = (error: any) => {
                console.log('数据写入失败', error)
                reject(error)
            }
        })

    }

    //删除数据库数据
    deleteItem(storeName: string, key: number | string) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.delete(key)
        return new Promise((resolve, reject) => {
            request.onsuccess = (event: any) => {
                console.log('删除数据写入成功', event)
                resolve(event)
            }

            request.onerror = (error: any) => {
                console.log('删除数据写入失败', error)
                reject(error)
            }
        })

    }

    //查询数据库数据
    getList(storeName: string) {
        const store = this.db.transaction([storeName]).objectStore(storeName)
        const request = store.getAll()
        return new Promise((resolve, reject) => {
            request.onsuccess = (event: any) => {
                console.log('查询数据成功', event)
                resolve(event.target.result)
            }

            request.onerror = (error: any) => {
                console.log('查询数据失败', error)
                reject(error)
            }
        })

    }

    //查询某一条数据库数据
    getItem(storeName: string, key: string | number) {
        const store = this.db.transaction([storeName]).objectStore(storeName)
        const request = store.get(key)
        return new Promise((resolve, reject) => {
            request.onsuccess = (event: any) => {
                console.log('查询某一条数据成功', event)
                resolve(event.target.result)
            }

            request.onerror = (error: any) => {
                console.log('查询某一条数据失败', error)
                reject(error)
            }
        })

    }
}
