import { gql } from '@apollo/client'


export const GET_PROJECTS = gql`
    query Status($where: StatusWhereUniqueInput!){
      status(where: $where){
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
            category{
              name
            }
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
                flag
              }
            }
          }
          entrepreneur{
            id
            name
          }
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
    entrepreneur{
      name
      email
    }
  }
}
`;


export const GET_PRICES_BY_NAME = gql `
query categories($name:String){
  categories(where:{name:{equals:$name}}){
    name
    prizesCount
    prizes{
      id
      name
      project{
        id
        name
        website
        offersCount
        requirementsCount
        entrepreneur{
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
              flag
            }
          }
        }
      }
    }
  }
}
`;

export const GET_PRICES_BY_ID = gql `
query Category($where: CategoryWhereUniqueInput!) {
  category(where: $where) {
    name
    prizesCount
    prizes{
      id
      name
      project{
        id
        name
        website
        offersCount
        requirementsCount
        entrepreneur{
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
              flag
            }
          }
        }
      }
    }
  }
}
`;

export const CREATE_OFFER = gql `
mutation createOffer($name:String, $offererEmail:String, $offererName:String, $entrepreneurEmail:String, $pid:ID, $rid:ID){
  createOffer(data: { 
    name: $name, 
    offererEmail: $offererEmail,
    offererName: $offererName,
    entrepreneurEmail: $entrepreneurEmail,
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





