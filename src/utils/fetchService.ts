const checkStatus = function <T>(response: Response): Promise<T> {
  if (response.status >= 200 && response.status < 300) {
    return response.json() as Promise<T>;
  } else {
    var error = new Error(response.statusText);
    throw error;
  }
};

/**
 * Gets the URL then checks the status and finally gives you the parsed JSON
 */
export const getJson = <T>(url: string): Promise<T> => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  return fetch(url, {
    method: 'GET',
    headers,
  }).then<T>((response: Response) => checkStatus(response));
};