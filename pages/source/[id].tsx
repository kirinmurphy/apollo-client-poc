import React from "react";

import { BrowserBackLink } from "codethings-react-ui";

import { SourceWithBitesProps } from '../../components/bites/types';

import { Layout } from "../../components/pageElements/Layout";

import { PageContentWrapper } from "../../components/pageElements/styles-elements";
import { SOURCE_WITH_BITES_BY_ID_QUERY } from "../../components/bites/queries/sources";
import { SourceDetail } from "../../components/bites/SourceDetail";
import request from "graphql-request";
import useSWR from "swr";

interface SourceQueryReturnProps {
  source: SourceWithBitesProps;
}

interface SourceQueryVariablesProps {
  id: number;
}

interface Props extends SourceQueryReturnProps, SourceQueryVariablesProps {}

export default function Source ({ source, id }: Props): JSX.Element {

  const { data, error } = useSWR([SOURCE_WITH_BITES_BY_ID_QUERY, id], sourceFetcher, {
    initialData: source
  })

  console.log('data', data);

  return (
    <Layout>
      <PageContentWrapper>
        <div>
          <BrowserBackLink />
        </div>
        asdf
        {data && <SourceDetail source={data} />}
      </PageContentWrapper>
    </Layout>
  );
}

interface StaticProps {
  params: {
    id: number;
  }
}

interface StaticPropsReturnProps {
  props: {
    id: number;
    source: Promise<any>
  }
}

interface StaticPathProps {
  paths: string[];
  fallback: boolean;
}

export function getStaticPaths(): StaticPathProps {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params: { id } }
  : StaticProps): Promise<StaticPropsReturnProps> {

  const sourceObject = await sourceFetcher(SOURCE_WITH_BITES_BY_ID_QUERY, id);
  const source = sourceObject.source;
  return { props: { id, source } };
}

const sourceFetcher = (query, id) => request(process.env.GRAPHQL_URL, query, { id })
