import axios from "axios";
import { DatasourceBase } from "./base";

export class APIDatasource<T> implements DatasourceBase<T> {
  private static instance: APIDatasource<any>;
  static config: {
    apiBasePath: string;
  };
  private axiosInstance: axios.AxiosStatic = axios;

  static getInstance<T>() {
    if (!this.instance) {
      this.instance = new APIDatasource<T>();
    }
    return this.instance;
  }

  private constructor() {}

  async get(id: T, config: { apiBase: string }): Promise<object> {
    const response = await this.axiosInstance.get(`${config.apiBase}/${id}`);
    return response.data;
  }

  async create(data: object, config: { apiBase: string }): Promise<object> {
    const response = await this.axiosInstance.post(`${config.apiBase}`, data);
    return response.data;
  }
  async update(id: T, data: object, config: { apiBase: string }): Promise<void> {
    const response = await this.axiosInstance.put(`${config.apiBase}`, {
      ...data,
      id
    });
    return response.data;
  }
  async delete(id: T, config: { apiBase: string }): Promise<void> {
    const response = await this.axiosInstance.delete(`${config.apiBase}/${id}`);
    return response.data;
  }
}
