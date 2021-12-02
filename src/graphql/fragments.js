import { gql } from 'apollo-boost'

export const USER_INFO = gql`
  fragment userInfo on User {
    _id
    name
    username
    email
    img
    about
    createdAt
    updatedAt
  }
`

export const CREATE_JOB_SEEKER = gql`
  fragment newSeeker on User {
    username
    useremail
    userphone
    companyName
    title
    location
  }
`

// export const NEWS_LETTER = gql`
//   fragment newsLetter on NewsLetter {
//     name
//     email
//   }
// `

export const CONTACT_DATA = gql`
  fragment userContact on Contact {
    name
    email
    phone
    message
  }
`

// const ADD_CONTACT = gql`
//   mutation NewContact(
//     $name: String!
//     $email: String!
//     $phone: String!
//     $message: String!
//   ) {
//     newContact(
//       input: { name: $name, email: $email, phone: $phone, message: $message }
//     ) {
//       name
//       email
//       phone
//       message
//     }
//   }
// `

export const POST_DATA = gql`
  fragment postData on Post {
    _id
    img
    description
    venue
    hours
    employerName
    email
    phone
    companyName
    title
    jobType
  }
`
