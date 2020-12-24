import React from "react";
import { useQuery, DocumentNode } from "@apollo/client";
import { LoadingIcon } from "codethings-react-ui";
import { LooseObject } from "../../types/global";

interface Props<Data, Variables> {
  children: (arg0: { data:Data }) => JSX.Element;
  query: DocumentNode;
  variables?: Variables; 
}

export default function Query<Data, Variables,> (props: Props<Data, Variables>): JSX.Element {

  const { children, query, variables = {} } = props;
  
  const { data, loading, error } = useQuery(query, {
    variables: variables
  });

  if (loading) return <LoadingIcon />;

  if (error) { 
    console.error(error);
    return <p>There was an error returning these results.</p>;
  }
  return children({ data });
}
