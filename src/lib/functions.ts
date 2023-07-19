export function url(path: string, url: string) {
  return new URL(path, url).href;
}
