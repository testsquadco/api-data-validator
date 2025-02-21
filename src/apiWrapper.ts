import axios, { AxiosResponse } from 'axios';

export class ApiWrapper {
  async getRequest<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get(url);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async postRequest<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async putRequest<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.put(url, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async deleteRequest<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.delete(url);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): Error {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return new Error(`Request failed with status ${error.response.status}: ${error.response.statusText}`);
      }
      if (error.request) {
        return new Error('Server is sleeping ZZzzz...');
      }
    }
    return new Error('Oops! something went wrong');
  }
} 