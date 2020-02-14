class JWTAuth {
  setToken = (jwt: string) => {
    localStorage.setItem("jwt", jwt)
  }
  addHeader = (fetchParams: any) => {
    const headers = Object.assign(fetchParams.headers || {}, { 'Authorization': "Bearer " + localStorage.getItem("jwt") })
    return Object.assign(fetchParams, { headers: headers })
  }
  isLoggedIn = () => {
    return localStorage.getItem("jwt") != null
  }
}

let auth = new JWTAuth()
export default function Auth() { return auth }
