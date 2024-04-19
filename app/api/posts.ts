import type { NextApiRequest, NextApiResponse } from 'next';
import getPostMetadata from '../../components/getPostMetadata';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { month, topic } = req.query;

    const posts = getPostMetadata();

    // Function to filter the posts based on the metadata
    const filteredPosts = posts.filter((post) => {
      const monthMatch = month ? post.month === month : true;
      const topicMatch = topic ? post.topic === topic : true;
      return monthMatch && topicMatch;
    });

    res.status(200).json(filteredPosts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}