import Container from '@/components/Container';
import FunctionCard from '@/components/FunctionCard';
import { InferGetStaticPropsType } from 'next';
import { getSnippets } from '@/lib/sanity-api';

export default function Snippets({
  snippets
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Code Snippets – Dzmitry Sviryn"
      description="A mix of snippets I've found usefull and want to share"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Code Snippets
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Some random stuff I&apos;ve found useful and want to share. Includres
          shell scripts, functions, dirty hacks 🤓 ... whatever.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {snippets.map((snippet) => (
            <FunctionCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              logo={snippet.logo}
              description={snippet.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps({ preview = false }) {
  const snippets = await getSnippets(preview);

  return { props: { snippets } };
}