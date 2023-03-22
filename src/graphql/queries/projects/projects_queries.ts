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
  prize (where: {id: "f328c539-2906-479c-8524-e10a90370669"}) {
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
  prize (where: {id: "70d2d678-d0b7-4181-bbfe-78357e307e69"}) {
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
  prize (where: {id: "fe85797f-a602-4e0b-b52f-50d964934326"}) {
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





