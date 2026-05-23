export const storeUrl =
  process.env.NEXT_PUBLIC_STORE_URL ||
  (process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:5173/'
    : '/LAB_REPOSICION_STW/store/')
