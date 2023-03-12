import { gql } from '@apollo/client'


export const GET_PRODUCTS = gql`
  query products {
    products{
      id
      name
      sofyId
      leanIxId
      productOwner {
        name
      }
      productGroup {
        name
      }
    }
  }
`;

export type Product = {
  id: string
  name: String
  sofyId: String
  leanIxId: String
  username: String
  productOwner: ProductOwner
  productGroup: ProductGroup
}

export type ProductOwner = {
  name: String
}

export type ProductGroup = {
  name: String
}