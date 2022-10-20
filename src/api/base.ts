import type {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosResponse,
} from "axios";
import { getBaseUrl, getToken } from "@/util/auth";
import type { Response } from "@/types/response";
import axios from "axios";
import axiosRetry from "axios-retry";

class HttpService {
  private http!: AxiosInstance;
  constructor() {
    this.http = axios.create({
      baseURL: getBaseUrl(),
      timeout: 60000,
    });
    axiosRetry(this.http, {
      retries: 3,
      shouldResetTimeout: true,
      retryDelay: (retryCount: number) => {
        return retryCount * 1000;
      },
      retryCondition: (error: AxiosError) => {
        if (error.message.includes("timeout")) {
          return true;
        }

        return !error.response || error.response.status !== 401;
      },
    });
    this.addInterceptors(this.http);
  }

  private addInterceptors(http: AxiosInstance) {
    http.interceptors.request.use((config) => {
      const token = getToken();
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      config.validateStatus = (status) => {
        switch (status) {
          case 401:
            console.log("重新登录");
            setTimeout(() => {
              // router.push('/login');
            }, 1000);
            break;
          default:
            console.warn(`status= ${status}`);
            break;
        }
        return status >= 200 && status < 400;
      };
      return config;
    });

    http.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  private async handleErrorWrapper<T>(p: AxiosPromise): Promise<Response<T>> {
    return p
      .then((response) => {
        return response.data;
      })
      .catch((error: AxiosError) => {
        return {
          ...error.response?.data,
        };
      });
  }
}

export const httpService = new HttpService();
