export const GET_POST_QUERY = `
query allPosts{
  allPosts {
    _id
    employerName
    email
    phone
    companyName
    title
    jobType
    img 
    description
    venue
    hours
  }
}
`

export const ADD_JOBS = `
mutation Mutation {
  newPost(input:$PostInput) {
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

export const ADD_CONTACT = `
mutation Mutation{
  newContact(input:$ContactInput) {
    name
    email
    phone
    message
  }
}
`
