export class RouteParamNotFoundException extends Error {
  public constructor(paramName: string) {
    const message: string = `The ${paramName} param not found in the path.`;

    super(message);
  }
}
