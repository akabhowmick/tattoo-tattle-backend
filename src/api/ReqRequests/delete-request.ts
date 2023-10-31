import { API_CONFIG } from "../config";

export const deleteRequestFromDb = (requestId: number) => {
  return fetch(API_CONFIG.baseURL + "/requests/" + requestId, {
    method: "delete",
  });
};
