export interface AuthState {
  loading: boolean
  error: any
}

export interface CredentialsState {
  accessToken: string
  refreshToken: string
  expiresIn: number
  refreshExpiresIn: number
  refreshTokenExpDate: string
  tokenType: string
  sessionState: string
  scope: string
}
