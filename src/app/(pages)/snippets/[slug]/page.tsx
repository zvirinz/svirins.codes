export default async function SnippetsPage({
  params,
}: {
  params: {
    slug: string
    searchParams: URLSearchParams
  }
}) {
  return (
    <article className="flex flex-col justify-center items-start  mx-auto mb-16 w-full">
      <div className="flex justify-between w-full">
        {/* <div>
          <h1 className="font-bold capsize text-3xl  md:text-5xl tracking-tight mb-4  text-gray-100">
            {snippet.title}
          </h1>
          <p className=" text-gray-200 py-2 md:text-lg">
            {snippet.description}
          </p>
        </div>
        <div className="mt-2 md:mt-6 scale-125 md:scale-150 ml-4 origin-center">
          <StackIcon iconTitle={snippet.iconTitle!} iconType="snippetPage" />
        </div>
      </div>
      <div className="w-full  mt-4 prose  prose-invert  md:prose-lg">
        <PortableText
          value={snippet.body}
          onMissingComponent={false}
          // @ts-ignore
          components={PTComponents}
        /> */}
        No snippets yet
      </div>
    </article>
  )
}

export async function generateStaticParams() {
  const paths = ['test-snippet']
  return paths.map((slug) => ({
    slug,
  }))
}