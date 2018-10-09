export const getFilteredPosts = (posts, searchValue) => 
posts.filter(post => ((post.body.toLowerCase().includes(searchValue.toLowerCase())||(post.title.toLowerCase().includes(searchValue.toLowerCase())))));

export const x=5;