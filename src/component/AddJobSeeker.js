import { gql } from 'apollo-boost'

export const ADD_JOBSEEKER = gql`
  mutation AddJobSeeker(
    $username: String!
    $useremail: String!
    $userphone: String!
    $companyName: String!
    $title: String!
    $location: String!
  ) {
    newJobSeeker(
      input: {
        username: $username
        useremail: $useremail
        userphone: $userphone
        title: $title
        companyName: $companyName
        location: $location
      }
    ) {
      username
      useremail
      userphone
      companyName
      title
      location
    }
  }
`
