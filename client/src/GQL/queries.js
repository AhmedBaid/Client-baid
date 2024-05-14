import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
query Articles {
    articles {
      nom
      dateentre
      quantite
      reference
      sousFamille {
        nom
      }
      um
      c_famille {
        nom
      }
    }
  }
`;
