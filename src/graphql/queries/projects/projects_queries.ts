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
  category(where: {id: "6baf2e36-d894-4932-bcce-d8448ce9ee9b"}){
    name
    prizesCount
    prizes{
      id
      name
      project{
        id
        name
        website
      }
    }
  }
}
`;


export const GET_SILVER_PRICES = gql `
query {
  category(where: {id: "78c589e4-6007-4d83-aa6c-3b8b0609ce1c"}){
    name
    prizesCount
    prizes{
      id
      name
      project{
        id
        name
        website
      }
    }
  }
}
`;

export const GET_BRONZE_PRICES = gql `
query {
  category(where: {id: "f8fc187d-abfb-4906-b423-aec510e14d2d"}){
    name
    prizesCount
    prizes{
      id
      name
      project{
        id
        name
        website
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





