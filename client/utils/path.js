export default function convertPath(path, locale) {
  if (locale === 'en') return `/en/${path}`.replace(/\/+/g, '/');
  return path.replace(/^\/en/i, '');
}
