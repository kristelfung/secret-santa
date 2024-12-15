import { AES, enc } from 'crypto-js'

const ENCRYPTION_KEY = 'sample-key'

export function encryptString(value: string): string {
  return AES.encrypt(value, ENCRYPTION_KEY).toString()
}

export function decryptString(encryptedValue: string): string | null {
  try {
    return AES.decrypt(encryptedValue, ENCRYPTION_KEY).toString(enc.Utf8)
  } catch (error) {
    return null
  }
}
