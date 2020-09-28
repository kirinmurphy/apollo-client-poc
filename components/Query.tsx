import React from "react";
import { useQuery, DocumentNode } from "@apollo/react-hooks";
import { LoadingIcon } from "codethings-react-ui";
import { LooseObject } from "../types/global";



interface Props {
  children: (arg0: { data:any }) => JSX.Element;
  query: DocumentNode;
  variables?: LooseObject; 
}

export default function Query (props: Props): JSX.Element {

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
