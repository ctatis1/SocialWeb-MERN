import PostMessage from "../models/postMessage.js";

export const getPosts = async (request, response) => {
    try {
        const postMessages = await PostMessage.find({})
        return response.status(200).json(postMessages);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

export const createPosts = async (request, response) => {
    const { title, message, selectedFile, creator, tags } = request.body

    const newPost = new PostMessage({ title, message, selectedFile, creator, tags });

    try {
        await newPost.save();
        response.status(201).json(newPost);
    } catch (error) {
        response.status(409).json({ message: error.message })
    }
}