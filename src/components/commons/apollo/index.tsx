import {
  ApolloProvider,
  ApolloLink,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { useEffect } from "react";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setAccessToken(accessToken || "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend07.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
