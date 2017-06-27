
export const mockResponse = (status: number, statusText: string, response: string) => {
  return new Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
}