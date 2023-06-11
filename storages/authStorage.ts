import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthResult } from "../api/types";

const key = 'auth';

const authStorage = {
  async get() {
    const rawData = await AsyncStorage.getItem(key);
    if (!rawData) {
      return null;
    }
    try {
      const data: AuthResult = JSON.parse(rawData);
      return data;
    } catch (e) {
      return null;
    }
  },
  set (authResult: AuthResult) {
    return AsyncStorage.setItem(key, JSON.stringify(authResult));
  },
  clear() {
    return AsyncStorage.removeItem(key);
  },
};

// 타입지원을 위해 AyancStorage의 기능들을 한번 추상화한 authStorage라는 객체를 만들어서
// 내보내줬습니다.

export default authStorage;