import Dexie from 'dexie'

const db = new Dexie('WalletProtector')

db.version(1).stores({ categories: '++id,name,createdAt,updatedAt' })
db.version(1).stores({ costs: '++id,categoryId,cost,createdAt,updatedAt' })

export default db
