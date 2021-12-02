import { gql } from 'apollo-boost'
import {
  USER_INFO,
  POST_DATA,
  NEWS_LETTER,
  CONTACT_DATA,
  CREATE_JOB_SEEKER,
} from './fragments'

export const USER_UPDATE = gql`
  mutation userUpdate($input: UserUpdateInput!) {
    userUpdate(input: $input) {
      ...userInfo
    }
  }
  ${USER_INFO}
`

export const USER_CREATE = gql`
  mutation userCreate {
    userCreate {
      username
      email
    }
  }
`

// export const ADD_NEWS = gql`
//   mutation newNews($input: NewsInput!) {
//     newNews(input: $input) {
//       ...newsLetter
//     }
//   }
//   ${NEWS_LETTER}
// `

export const ADD_POST = gql`
  mutation newPost($input: PostInput!) {
    newPost(input: $input) {
      ...postData
    }
  }
  ${POST_DATA}
`

export const ADD_CONTACT = gql`
  mutation NewContact($input: ContactInput!) {
    newContact(input: $input) {
      ...userContact
    }
  }
  ${CONTACT_DATA}
`

export const ADD_JOB_SEEKER = gql`
  mutation AddJobSeeker($input: JobSeekerInput!) {
    newJobSeeker(input: $input) {
      ...newSeeker
    }
  }
  ${CREATE_JOB_SEEKER}
`

// export const POST_CREATE = gql`
//   mutation postCreate($input: PostCreateInput!) {
//     postCreate(input: $input) {
//       ...postData
//     }
//   }
//   ${POST_DATA}
// `

// export const POST_DELETE = gql`
//   mutation postDelete($postId: String!) {
//     postDelete(postId: $postId) {
//       _id
//     }
//   }
// `

// export const POST_UPDATE = gql`
//   mutation postUpdate($input: PostUpdateInput!) {
//     postUpdate(input: $input) {
//       ...postData
//     }
//   }
//   ${POST_DATA}
// `

export const NEW_CONTACT = gql`
  mutation NewContact(
    $name: String!
    $email: String!
    $phone: String!
    $message: String!
  ) {
    newContact(
      input: { name: $name, email: $email, phone: $phone, message: $message }
    ) {
      name
      email
      phone
      message
    }
  }
`

export const NEW_JOB = gql`
  mutation NewPost(
    $title: String!
    $description: String!
    $companyName: String!
    $hours: String!
    $img: String!
    $venue: String!
    $email: String!
    $employerName: String!
    $phone: String!
    $jobType: String!
  ) {
    newPost(
      input: {
        title: $title
        description: $description
        companyName: $companyName
        hours: $hours
        img: $img
        venue: $venue
        email: $email
        employerName: $employerName
        phone: $phone
        jobType: $jobType
      }
    ) {
      title
      description
      companyName
      hours
      img
      venue
      email
      employerName
      phone
      jobType
    }
  }
`

export const NEWS_SUBSCRIPTION = gql`
  mutation NewNews($name: String!, $email: String!) {
    newNews(input: { name: $name, email: $email }) {
      name
      email
    }
  }
`
