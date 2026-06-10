export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // usuń znaki specjalne
    .replace(/[\s-]+/g, "-")      // spacje i -- → -
    .replace(/^-+|-+$/g, "")      // usuń - na końcach
}