import NowPlaying from './NowPlaying';
import { SocialIcons } from 'components/Icons';

export default function Footer() {
  return (
    <footer className="flex flex-col items-start  max-w-2xl w-full mx-auto mb-4  px-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-4" />
      <NowPlaying />
      <SocialIcons />
      <p className="w-full text-gray-500 dark:text-gray-400 mb-1 pt-2  text-left md:text-center text-xs">
        © <span className="font-medium">{new Date().getFullYear()}</span>
        <span>{` • `}</span>
        Dzmitry Svirin{` • `}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-300  font-medium link-underline link-underline-gradient"
          href="https://svirins.codes/feed.xml"
        >
          RSS
        </a>
      </p>
      <p className="w-full  text-xs text-gray-500 dark:text-gray-400 text-left md:text-center">
        <span>The code of this site was originally a fork of </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-300  font-medium link-underline link-underline-gradient"
          href="https://leerob.io"
        >
          Lee Robinson
        </a>
        {` `}personal site,
        <span>almost entirely rewritten.</span>
      </p>
    </footer>
  );
}