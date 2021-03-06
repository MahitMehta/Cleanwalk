import { gql } from '@apollo/client';
import { IUser } from '../../store/interfaces/user.interface';

export interface IPost {
    description: string; 
    createdAt: string; 
    location?: {
        type: string; 
        coordinates: Array<String>
    },
    user: IUser,
}

export const getPostsQuery = () => (
    gql`
        query getPostsQuery {
            getPosts {
                description,
                location {
                    coordinates
                },
                createdAt,
                user {
                    email
                }
            }
        }
    `
);