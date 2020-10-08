import React from "react";
import styled from "styled-components";

import { BrowserBackLink } from "codethings-react-ui";

import { BITE_BY_ID } from "../../components/bites/queries/bites";

import { Layout } from "../../components/page/Layout";
import Query from "../../components/widgets/Query";
import { BiteDetail } from "../../components/bites/BiteDetail";
import { PageContentWrapper } from "../../styles/globalCss";

interface Props {
  id: number;
}

export default function Bites (props: Props): JSX.Element {
  return (
    <Layout>
      <PageContentWrapper>
        <div>
          <BrowserBackLink />
        </div>

        {/* Page initially renders with no id before re-rendering, why???? */}
        {props.id && (
          <Query query={BITE_BY_ID} variables={{ id: props.id }}>
            {({ data }) => {
              const { bite } = data;
              return (
                <BiteDetailWrapper>
                  <BiteDetail bite={bite} />
                </BiteDetailWrapper>
              );
            }}
          </Query> 
        )}
      </PageContentWrapper>
    </Layout>
  );
}

const BiteDetailWrapper = styled.div`
`;

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
