import React from 'react';
import UserProfile from '@/components/UserProfile';
import PostFeed from '@/components/PostFeed';
import { collection, query as queryF, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { getUserWithUsername, postToJSON } from '@/libraries/firebase';


async function UserProfilePage({params}) {
  const { username } = params;
 console.log(username);
  const userDoc = await getUserWithUsername(username);

  let user = null;
  let posts = null;

  if (userDoc) {
    user = userDoc.data();
    const postsQuery = queryF(
      collection(userDoc.ref, 'posts'),
      where('published', '==', true),
      orderBy('createdAt', 'desc'),
      limit(5)
    );
    const postsSnapshot = await getDocs(postsQuery);
    posts = postsSnapshot.docs.map((doc) => postToJSON(doc));
  }
  console.log(user);
  return (
    <main>
      <UserProfile user={user} />
      <PostFeed posts={posts} />
    </main>
  );
}

export default UserProfilePage;
