import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
// import Auth from '@/store/auth'
import Books from '@/store/books'
import Counter from '@/store/counter'

// eslint-disable-next-line import/no-mutable-exports
// let auth: Auth
// eslint-disable-next-line import/no-mutable-exports
let books: Books
// eslint-disable-next-line import/no-mutable-exports
let counter: Counter

const initializeStores = (store: Store<any>): void => {
  // auth = getModule(Auth, store)
  books = getModule(Books, store)
  counter = getModule(Counter, store)
}

export { initializeStores, books, counter }
// export { initializeStores, auth, books }
