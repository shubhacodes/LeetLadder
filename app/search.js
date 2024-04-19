import getPostMetadata from '../../components/getPostMetadata';

const page_size = 2;

const filterPostsByMonth = (posts, month) => {
  return posts.filter(post => post.month === month);
};

const filterPostsByTopic = (posts, topic) => {
  return posts.filter(post => post.topic === topic);
};

const filterPosts = (posts, filters) => {
  let filteredPosts = [...posts];
  filters.forEach(filter => {
    switch (filter.type) {
      case 'month':
        filteredPosts = filterPostsByMonth(filteredPosts, filter.value);
        break;
      case 'topic':
        filteredPosts = filterPostsByTopic(filteredPosts, filter.value);
        break;
      // Add more cases for other types of filters if needed
      default:
        break;
    }
  });
  return filteredPosts;
};

const search = () => {
  const allPosts = getPostMetadata();
  
  // Example filters
  const filters = [
    { type: 'month', value: 'January' },
    { type: 'topic', value: 'Binary Search' }
  ];

  const filteredPosts = filterPosts(allPosts, filters);

  // Do something with filteredPosts, such as displaying them on your blog page
  
  console.log(filteredPosts);
};

search();