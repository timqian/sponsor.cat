import { request } from "graphql-request";
import useSWR from "swr";

const fetcher = (query) =>
  request("https://api.thegraph.com/subgraphs/name/timqian/sponsorcat", query);

export default function userUser({ address }) {
  if (!address) {
    return {
      user: null,
      isLoading: false,
      isError: false,
    };
  }
  console.log(address);
  const { data, error } = useSWR(
    `{
			user(id: "${address}") {
				createdAt
				sponsors(first: 500) {
					sponsor {
						id
					}
					amount
					createdAt
				}
				sponsoring(first: 500) {
					creator {
						id
					}
					amount
					createdAt
				}
			}
		}`,
    fetcher
  );

  return {
    user: data && data.user,
    isLoading: !error && !data,
    isError: error,
  };
}
