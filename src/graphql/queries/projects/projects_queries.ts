import { gql } from '@apollo/client'


export const GET_PROJECTS = gql`
    query projects{
      projects{
        id
        offersCount
        requirementsCount
        name
        website
        createdAt
        prizes{
          id
          name
        }
        module{
          name
          programme{
            name
          }
          institution{
            name
            country{
              name
            }
          }
        }
        entrepreneur{
          id
          name
        }
        offers{
          name
        }
        requirements{
          name
        }
      }
    }
`;

export const GET_PRICES = gql`
query {
    prizes{
      id
    	name
      project{
        id
        name
      }
    }
}
`;

export const GET_PRICES_DETAILS = gql `
query prize($where: PrizeWhereUniqueInput!) {
  prize(where: $where){
    id
    name
    project{
      id
      name
    }
  }
}
`;

export const GET_GOLD_PRICES = gql `
query {
  prize (where: {id: "c9e19033-551b-4428-9384-dc4966524d54"}) {
    id
    name
    projectCount
    project {
      id
      name
      website
      requirementsCount
      offersCount
      entrepreneur{
        name
      }
      module{
        name
        institution {
          name
          country{
            name
          }
        }
      }
    }
  }
}
`;


export const GET_SILVER_PRICES = gql `
query {
  prize (where: {id: "911616f7-bd0f-4c17-a7e6-e4c8e0e82ced"}) {
    id
    name
    projectCount
    project {
      id
      name
      website
      requirementsCount
      offersCount
      entrepreneur{
        name
      }
      module{
        name
        institution {
          name
          country{
            name
          }
        }
      }
    }
  }
}
`;

export const GET_BRONZE_PRICES = gql `
query {
  prize (where: {id: "aed43bf1-6690-481c-8ae0-17c648a1f40a"}) {
    id
    name
    projectCount
    project {
      id
      name
      website
      requirementsCount
      offersCount
      entrepreneur{
        name
      }
      module{
        name
        institution {
          name
          country{
            name
          }
        }
      }
    }
  }
}
`;






