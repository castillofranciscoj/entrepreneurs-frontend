import { gql } from '@apollo/client'


export const GET_PROJECTS_COUNT = gql`
query projects {
  projectsCount
}
`;

export type Project = {
  projectsCount: string
}