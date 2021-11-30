import { gql } from 'apollo-boost'

export const ADD_NEW_JOBS = gql`
  mutation AddJobs(
    $title: String!
    $employerName: String!
    $companyName: String!
    $email: String!
    $phone: String!
    $venue: String!
    $img: String!
    $jobType: String!
    $description: String!
    $hours: String!
  ) {
    newPost(
      input: {
        title: $title
        description: $description
        phone: $phone
        venue: $venue
        employerName: $employerName
        companyName: $companyName
        email: $email
        img: $img
        hours: $hours
        jobType: $jobType
      }
    ) {
      title
      employerName
      companyName
      email
      phone
      venue
      img
      jobType
      description
      hours
    }
  }
`
