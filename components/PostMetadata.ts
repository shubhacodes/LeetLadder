export interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  topic: string; // Ensure this matches the property in the markdown frontmatter
  slug: string;
  month: string; // Added to include the month extracted from the date
}