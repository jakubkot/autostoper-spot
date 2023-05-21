export function ngrxActionName(source: string, command: string): string {
  return `[${source.toUpperCase()}] ${command}`;
}
