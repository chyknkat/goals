export class ResultModel<T> {
    success: boolean;
    errors: string[];
    data: T;
  
    constructor(success?: boolean, data?: T, errors?: string[]) {
      this.success = success;
      this.data = data;
      this.errors = errors;
    }
  }