'use client'
import { useSession, signIn } from 'next-auth/react'
import PostComment from './PostComment';

export default function CommentSection() {
    const { data: session } =  useSession();
  return session ? (
    <div className='mt-24 sm:mt-32 lg:mt-40'>
      <PostComment />
    </div>
  ) : (
    <div className='mt-24 sm:mt-32 lg:mt-40'>
      <button onClick={() => signIn()}>Login to Comment</button>
    </div>
  );

}