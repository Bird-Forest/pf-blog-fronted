import React from 'react';
import Post from './Post';
import { WrapPostsList } from './Posts.styled';
import EmptyPage from '../Helper/EmptyPage';
// import { base } from 'baseTheme';

export default function PostsList({ posts, ...otherProps }) {
  // const [theme, setTheme] = useState('');
  // posts.map(post => {
  //   if (post.tag === 'animals') {
  //     setTheme(base.animals);
  //   } else if (post.tag === 'recipes') {
  //     setTheme(base.recipes);
  //   } else if (post.tag === 'children') {
  //     setTheme(base.children);
  //   } else if (post.tag === 'health') {
  //     setTheme(base.health);
  //   }

  //   return theme;
  // });
  // console.log(theme);
  const Arr = Array.isArray(posts) && posts.length > 0;
  return (
    <WrapPostsList>
      {Arr ? (
        posts.map(post => <Post key={post._id} post={post} />)
      ) : (
        <EmptyPage />
      )}
    </WrapPostsList>
  );
}
