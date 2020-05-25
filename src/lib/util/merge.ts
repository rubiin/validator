export default function merge(obj : any= { }, defaults: { [x: string]: any; }) {
  for (const key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
