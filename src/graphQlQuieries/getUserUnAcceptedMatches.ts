export const getUserUnAcceptedMatches =  `
    mutation GetUserUnAcceptedMatches($token: String!) {
        getUserUnAcceptedMatches(token: $token) {
            id
            profilePicture
            name
            date
        }
    }
`