import { getContent } from '@/app/lib/getContent'
import { SearchBar } from '@/app/ui/search-bar'
import Link from 'next/link'

type Props = {
  params: {}
  searchParams: { title?: string }
}

const isEmptyObject = (obj: Object) => {
  return JSON.stringify(obj) === '{}'
}

export default async function Posts(props: Props) {
  const searchParams = props.searchParams
  const queryString = isEmptyObject(searchParams) ? '*' : `${searchParams.title}*`
  // const posts = await searchPosts(queryString);
  const posts = getContent('posts')
  return (
    <>
      <div className="flex flex-col   mx-auto w-full">
        <div className="flex flex-col">
          <h1 className="mb-4 text-3xl font-bold tracking-tight capsize  md:text-5xl text-gray-100">
            Posts
          </h1>
          <p className="font-semibold  text-gray-100 text-base mt-2 md:text-lg">
            Posts about code, dev life and various{' '}
            <span role="image" aria-label="technomagical">
              ⚗️
            </span>
            things.
          </p>
        </div>
      </div>
      <div className="flex flex-col   mx-auto pb-16 w-full">
        <SearchBar />
        <div className="grid grid-cols-1 divide-y  divide-gray-300/25">
          {posts.length ? (
            posts.map((post) => (
              <div key={post.slug} className="w-full py-4">
                <div className="w-full">
                  <Link
                    href={`/posts/${post.slug}`}
                    className=" w-full  duration-150 ease-in-out py-4"
                  >
                    <h3 className="text-xl md:text-2xl font-medium text-left  hover:text-active text-gray-100">
                      {post.metadata.title}
                    </h3>
                  </Link>
                  <p className="text-gray-400 md:text-lg">{post.metadata.summary}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 italic text-lg">No results found</p>
          )}
        </div>
      </div>
    </>
  )
}