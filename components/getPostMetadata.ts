import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    const date = new Date(matterResult.data.date);
    const month = date.toLocaleString('default', { month: 'long' });

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      topic: matterResult.data.topic,
      slug: fileName.replace(".md", ""),
      // Add the parsed month to the metadata
      month: month,
    };
  });

  return posts;
};
export default getPostMetadata;