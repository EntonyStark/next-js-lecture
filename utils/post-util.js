import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

const getPostData = (fileName) => {
  const filePath = path.join(postsDir, fileName);

  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  const slug = fileName.replace(/\.md$/, '');

  return {
    slug,
    content,
    ...data,
  };
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDir);

  return postFiles.map(getPostData).sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const getAllFeaturedPosts = () => {
  const allPosts = getAllPosts();

  return allPosts.filter((el) => el.isFeatured);
};

export const getSlugs = () => {
  const postFiles = fs.readdirSync(postsDir);

  return postFiles.map((e) => e.replace(/\.md$/, ''));
};

export const getSinglePost = (slug) => getPostData(`${slug}.md`);
