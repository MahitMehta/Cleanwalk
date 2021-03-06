import { gql } from '@apollo/client';

export interface ICreateUserDTO {
    email?: string,
    pass?: string,
}

export const createUserMutation = () => (
    gql`
        mutation createUser($input: CreateUserDTO!) {
            createUser(input: $input) {
                _id,
                email,
                roles,
                status,
                accessToken,
            }
        }
    `
);