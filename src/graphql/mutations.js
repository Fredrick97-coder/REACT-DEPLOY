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

export const ADD_NEWS = gql`
  mutation AddNews($input: NewsLetterInput!) {
    newNewsLetter(input: $input) {
      ...newsLetter
    }
  }
  ${NEWS_LETTER}
`

export const ADD_POST = gql`
  mutation AddPost($input: PostInput!) {
    newPost(input: $input) {
      ...postData
    }
  }
  ${POST_DATA}
`

export const ADD_CONTACT = gql`
  mutation AddContact($input: ContactInput!) {
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
