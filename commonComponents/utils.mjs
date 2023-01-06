import contentsJson from '../resources/contents.json' assert { type: "json" };

export const entryForSlug = (entrySlug) => contentsJson.find(({ slug }) => slug === entrySlug);

export const navigationsForSlug = (entrySlug) => {
  const pageNum = contentsJson.findIndex(({ slug }) => slug === entrySlug);
  if (pageNum === -1) {
    return { prev: null, next: null };
  }

  if (pageNum === 0) {
    return { prev: null, next: contentsJson[pageNum + 1] };
  }

  if (pageNum === contentsJson.length - 1) {
    return { prev: contentsJson[pageNum - 1], next: null };
  }

  return { prev: contentsJson[pageNum - 1], next: contentsJson[pageNum + 1] };
};
