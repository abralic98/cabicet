import { useRouter } from 'next/router'

export const useAuth = () => {
  const router = useRouter()

  const logout = () => {
    localStorage.removeItem('chaby-token')
    router.push('/login')
  }

  const getUser = () => {
    return localStorage.getItem('chaby-token')
  }

  return { logout, getUser }
}
