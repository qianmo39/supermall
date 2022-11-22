import { request } from "./request";

export function getCategory() {
  return request({
    url: "/category",
  });
}

export function getSubcategory(mailKey) {
  return request({
    url: "/subcategory",
    param: { mailKey },
  });
}
