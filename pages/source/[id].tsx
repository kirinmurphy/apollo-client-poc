import React from "react";

import { BrowserBackLink } from "codethings-react-ui";

import { SourceWithBitesProps } from '../../components/bites/types';

import { Layout } from "../../components/page/Layout";
import Query from "../../components/widgets/Query";

import { PageContentWrapper } from "../../styles/globalStyles";
import { SOURCE_WITH_BITES_BY_ID_QUERY } from "../../components/bites/queries/sources";
import { SourceDetail } from "../../components/bites/SourceDetail";

interface SourceQueryReturnProps {
  source: SourceWithBitesProps;
}

interface SourceQueryVariablesProps {
  id: number;
}

interface Props extends SourceQueryVariablesProps {}

export default function Source ({ id }: Props): JSX.Element {
  return (
    <Layout>
      <PageContentWrapper>
        <div>
          <BrowserBackLink />
        </div>

        {/* Page initially renders with no id before re-rendering, why???? */}
        {id && (
          <Query<SourceQueryReturnProps, SourceQueryVariablesProps> 
            query={SOURCE_WITH_BITES_BY_ID_QUERY} 
            variables={{ id }}>

            {({ data }) => {
              const { source } = data;
              return (
                <>
                  <SourceDetail source={source} />
                </>
              );
            }}
          </Query> 
        )}
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
  }
}

interface StaticPathProps {
  paths: string[];
  fallback: boolean;
}

export function getStaticPaths(): StaticPathProps {
  return { paths: [], fallback: true };
}

export function getStaticProps({ params: { id } }
  : StaticProps): StaticPropsReturnProps {
  
  return { props: { id } };
}
