import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";

const HTTP_ENDPOINT = "http://localhost:8081/graphql";

const fetchFn: FetchFunction = async (
  request,
  variables,
  cacheConfigupload,
  uploadables
) => {
  let req = null;
  if (uploadables) {
    const formData = new FormData();
    formData.append(
      "operations",
      JSON.stringify({ query: request.text, variables })
    );
    formData.append("map", JSON.stringify({ "1": ["variables.file"] }));
    let i = 1;
    Object.keys(uploadables).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
        formData.append(`${i}`, uploadables[key]);
        i++;
      }
    });
    req = {
      method: "POST",
      body: formData,
    };
  } else {
    req = {
      method: "POST",
      headers: {
        Accept:
          "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
        "Content-Type": "application/json",
        // <-- Additional headers like 'Authorization' would go here
      },
      body: JSON.stringify({
        query: request.text, // <-- The GraphQL document composed by Relay
        variables,
      }),
    };
  }
  const resp = await fetch(HTTP_ENDPOINT, req);
  return await resp.json();
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
  });
}

export const RelayEnvironment = createRelayEnvironment();
