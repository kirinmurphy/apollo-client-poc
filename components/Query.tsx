import React from "react";
import { useQuery, DocumentNode } from "@apollo/react-hooks";
import { LoadingIcon } from "codethings-react-ui";

interface Props {
  children: (arg0: { data:any }) => JSX.Element;
  query: DocumentNode;
  id: string;
}

export default function Query ({ children, query, id }: Props): JSX.Element {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  });

  console.log('data', data);
  if (loading) return <LoadingIcon />;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
}
