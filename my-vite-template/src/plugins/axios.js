import defaultAxios from '@/lib/axios.js'
// import { useAppStore } from '@/store/app-store.js'
// import { useErrorMsg } from '@/store/error-msg-store'
export const install = ({ app, router }) => {
  defaultAxios.interceptors.response.use(res => {
    // // Do something before request is sent
    // if (res.data?.token === '') {
    //   useAppStore().setToken('')
    //   router.replace('/signin')
    // }
    // useErrorMsg().close()
    // if (!res.data.ok) {
    //   useErrorMsg().updateMsgModal(res.data.error)
    // }
    return res
  })
  app.config.globalProperties.$axios = defaultAxios
  app.config.globalProperties.$http = defaultAxios
}
