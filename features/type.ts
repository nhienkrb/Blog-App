import { Prisma, User, Post } from "@prisma/client";

export type PostWithRelations = Prisma.PostGetPayload<{
    include :{
        author:true,
        category:true,
        postTags:{
            include:{tag:true}
        }
    }
}>

export type UserBase = User;
export type PostBase = Post;