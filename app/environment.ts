import { Environment, Network, RecordSource, Store } from "relay-runtime";

const fetchFn = async (request: any, variables: any) => {
  const response = await fetch("http://100.65.23.69:3280/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });
  return await response.json();
};

export const environment = new Environment({
  network: Network.create(fetchFn),
  store: new Store(new RecordSource()),
});
