export function getAssetUrl(path: string): string {
  return new URL(path, import.meta.url).href;
}