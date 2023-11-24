const api = import.meta.env.VITE_API_BASE_URL;

export const browseApi = async (request) => {
  const url = new URL(request.request.url);
  const { params } = request;
  const endpoint = url.pathname.split("/");
  const response = await fetch(
    `${api}/${endpoint[1]}?page=${params.pagenumber}`
  );
  const data = await response.json();
  return data;
};
