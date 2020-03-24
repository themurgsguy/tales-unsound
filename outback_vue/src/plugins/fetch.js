import store from '@/store'

let baseUrl

function timeout (msTimeout, promise) {
  let timedOut = false

  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      timedOut = true
      reject(new Error("Connection Timeout"))
    }, msTimeout)
    promise.then(
      (res) => {
        clearTimeout(timeoutId)
        if (!timedOut) {
          resolve(res)
        }
      },
      (err) => {
        clearTimeout(timeoutId)
        if (timedOut) { // já foi rejeitado no setTimeout
          return
        }
        reject(err)
      }
    )
  })
}

export async function $fetch (url, options = {}, msTimeout = 10000) {
  let controller, signal;

  try {
    controller = new AbortController();
    signal = { signal: controller.signal };
  } catch (error) {
    console.error(error);
    controller = null;
    signal = undefined;
  }

  const finalOptions = Object.assign({}, {
    headers: {
      'Content-Type': 'application/json'
    }
  }, signal, options)

  const token = store.getters.token
  if (token !== null) {
    finalOptions.headers.Authorization = `Bearer ${token}`
  }
  try {
    const response = await timeout(msTimeout, fetch(`${baseUrl}${url}`, finalOptions))
    if (response.ok) {
      const data = await response.json()
      return data
    } else if ([401, 403].includes(response.status)) {
      // Se a sessão já não for válida ... fazer logout
      store.dispatch('logout')
    } else {
      const message = await response.text()
      const error = new Error(message)
      error.response = response
      error.status = response.status
      throw error
    }
  } catch (e) {
    if (controller !== null) {
      controller.abort()
    }
    const error = new Error(e.message)
    error.status = 500
    throw error
  }
}

export default {
  install (Vue, options) {
    console.log('Installed!', options)

    // Opções do Plugin
    baseUrl = options.baseUrl

    // Fetch
    Vue.prototype.$fetch = $fetch
  }
}
