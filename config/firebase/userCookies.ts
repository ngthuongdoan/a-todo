import { User } from "firebase/auth"
import cookies from "js-cookie"

export const getUserFromCookie = () => {
  const cookie = cookies.get("auth")
  if (!cookie) {
    return
  }
  return JSON.parse(cookie)
}

export const setUserCookie = (user: User | null) => {
  cookies.set("auth", JSON.stringify(user), {
    // firebase id tokens expire in one hour
    // set cookie expiry to match
    expires: 1 / 24,
  })
}

export const removeUserCookie = () => cookies.remove("auth")
