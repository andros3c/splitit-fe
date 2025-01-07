interface Parameter {
    url :string
    payload:object
}
const useRequest = () => {
  const STATION_HOSTNAME = process.env.NEXT_PUBLIC_API_URL;
  const post = async ({url, payload}:Parameter) => {
    try {
      const response = await fetch(`${STATION_HOSTNAME + url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...payload }),
      });
      return await response.json
    } catch (e) {
      throw e;
    }
  };
  return {
    STATION_HOSTNAME,
    post,
  };
};

export default useRequest;
