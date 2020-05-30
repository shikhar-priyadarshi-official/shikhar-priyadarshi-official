export const asyncFetch = async (URL, { METHOD, BODY }, Callbackfn) => {
  let OPTION = OPTIONS(METHOD, BODY);
  try {
    let result = await (await fetch(`${URL}`, OPTION)).json();
    if (result.status) {
      return Callbackfn(null, result); // callbackfn(error, response)
    }
    return Callbackfn(result.message, null); // callbackfn(error, response)
  } catch (error) {
    return Callbackfn(error.message, null); // callbackfn(error, response)
  }
};

const OPTIONS = (METHOD, BODY) => {
  if (METHOD === "GET") {
    return {
      method: `${METHOD}`,
    };
  }
  return {
    method: `${METHOD}`,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(BODY),
  };
};
