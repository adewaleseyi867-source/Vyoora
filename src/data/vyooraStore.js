import { createPost, isPost, POST_STATUSES } from "./vyooraModel.js";

const STORAGE_KEY = "vyoora.posts.v1";

function readStoredPosts() {
    let saved;
    try {
        saved = window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {
        throw new Error("VYOORA posts could not be read from this browser.");
    }

    if (saved === null) return [];

    let parsed;
    try {
        parsed = JSON.parse(saved);
    } catch (error) {
        throw new Error("Saved VYOORA posts contain invalid JSON.");
    }
    if (!Array.isArray(parsed) || !parsed.every(isPost)) {
        throw new Error("Saved VYOORA posts have an unexpected format.");
    }
    return parsed.map(createPost);
}

function writeStoredPosts(posts) {
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    } catch (error) {
        throw new Error("VYOORA posts could not be saved in this browser.");
    }
}

export function getPosts() {
    return readStoredPosts();
}

export function savePost(post) {
    const savedPost = createPost(post);
    if (!savedPost.id || !isPost(savedPost)) {
        throw new Error("A valid post with an ID is required.");
    }

    const posts = readStoredPosts();
    const index = posts.findIndex((entry) => entry.id === savedPost.id);
    if (index < 0) {
        posts.unshift(savedPost);
    } else {
        posts[index] = savedPost;
    }
    writeStoredPosts(posts);
    return savedPost;
}

export function updatePostStatus(id, newStatus) {
    if (!POST_STATUSES.includes(newStatus)) {
        throw new Error(`Unsupported post status: ${newStatus}`);
    }
    const posts = readStoredPosts();
    const post = posts.find((entry) => entry.id === id);
    if (!post) {
        throw new Error(`Post "${id}" was not found.`);
    }
    if (newStatus === "scheduled" && !post.scheduledDate) {
        throw new Error("Set a scheduled date before scheduling this post.");
    }

    post.status = newStatus;
    if (!["scheduled", "published"].includes(newStatus)) {
        post.scheduledDate = null;
    }
    writeStoredPosts(posts);
    return post;
}

export function deletePost(id) {
    const posts = readStoredPosts();
    const remaining = posts.filter((post) => post.id !== id);
    if (remaining.length === posts.length) return false;
    writeStoredPosts(remaining);
    return true;
}

export function clearPosts() {
    writeStoredPosts([]);
}
