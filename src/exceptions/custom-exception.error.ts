export class CustomExceptionError {
  constructor(message: string, statusCode: number, file = __dirname) {
    return { message, statusCode, file };
  }
}
