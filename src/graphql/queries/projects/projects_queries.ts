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

export const GET_PROJECT_REQUIREMENTS = gql `
query project($where: ProjectWhereUniqueInput!){
  project(where: $where){
    id
    name
    offersCount
    requirements{
      id
      name
      icon
    }
  }
}
`;


export const GET_GOLD_PRICES = gql `
query {
  prize (where: {id: "a89f600e-33b6-4cad-b2b2-f7b17624cbb6"}) {
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
  prize (where: {id: "c50c847d-9b56-4337-a04a-5223c34c2391"}) {
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
  prize (where: {id: "5d10ca1e-e1c4-44c1-b2fd-64f4f6562dca"}) {
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

export const CREATE_OFFER = gql `
mutation createOffer($name:String, $offererEmail:String, $pid:ID, $rid:ID){
  createOffer(data: { 
    name: $name, 
    offererEmail: $offererEmail,
    project: {
      connect:{
        id:$pid
      }
    }
      requirement: {
      connect:{
        id:$rid
      }
    }
  }) {
    id
    name
  }
}
`;





