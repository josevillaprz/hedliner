/**
 * Fetches music attractions based on a keyword from the API.
 *
 * @param array Images - Array of images to sort through. must have width properties
 * @returns {} Image - The largest images in the array
 */
export function filterBiggestImage(images: Array<any>) {
  return images.reduce((prev, cur) => (prev.width < cur.width ? cur : prev));
}
