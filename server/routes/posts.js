import express from "express";
import { getPosts, createPosts } from "../controllers/posts.js";

const postRouter = express.Router()

postRouter.get('/', getPosts);
postRouter.get('/', createPosts);

export default postRouter;