export class ValidationErrorNotFoundException extends Error {
  public constructor(message: string) {
    super(message);
  }
}
