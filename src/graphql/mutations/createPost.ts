

import { gql } from "@apollo/client";

export interface ICreatePostDTO {
    description?: string;
    latitude?: number;
    longitude?: number;
}

export const createPostMutation = () => (
    gql`
        mutation create($input: CreatePostDTO!) {
            createPost(input: $input) {
                description
            }
        }
    `
)