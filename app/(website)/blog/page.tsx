import { notFound } from 'next/navigation';
import { getPosts } from 'lib/sanity-api';
import PostPreview from 'components/PostPreview';

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className='flex flex-col  max-w-2xl mx-auto w-full pb-8'>
      <div className='flex flex-col'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight capsize  md:text-5xl text-gray-100'>
          Blog
        </h1>
        <h2 className='inner-header'>
          Posts about code, dev life and{' '}
          <span className='font-semibold  text-gradient'>various</span>{' '}
          <span role='image' aria-label='technomagical'>
            ⚗️
          </span>{' '}
          things.
        </h2>
      </div>
      <hr className='w-full max-w-2xl mx-auto border-1 border-gray-600 mt-4' />
      <div className='grid grid-cols-1 divide-y divide-gray-600'>
        {posts && posts.length > 0
          ? posts.map((post) => (
              <PostPreview
                key={post.title}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                tags={post.tags}
              />
            ))
          : notFound()}
      </div>
    </div>
  );
}
