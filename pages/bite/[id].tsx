import React from "react";

import { BrowserBackLink } from "codethings-react-ui";

import { BiteSummaryProps } from '../../components/bites/types';

import { BITE_BY_ID } from "../../components/bites/queries/bites";

import { Layout } from "../../components/page/Layout";
import Query from "../../components/widgets/Query";
import { BiteDetail } from "../../components/bites/BiteDetail";
import { PageContentWrapper } from "../../styles/globalStyles";

interface BiteQueryReturnProps {
  bite: BiteSummaryProps;
}

interface BiteQueryVariablesProps {
  id: number;
}

interface Props extends BiteQueryVariablesProps {}

export default function Bite ({ id }: Props): JSX.Element {
  return (
    <Layout>
      <PageContentWrapper>
        <div>
          <BrowserBackLink />
        </div>

        {/* Page initially renders with no id before re-rendering, why???? */}
        {id && (
          <Query<BiteQueryReturnProps, BiteQueryVariablesProps> 
            query={BITE_BY_ID} 
            variables={{ id }}>

            {({ data }) => {
              const { bite } = data;
              return (
                <BiteDetail bite={bite} />
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
