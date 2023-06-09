import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';
import { sns } from '@/config/sns';

export const Profile = () => (
  <div className="select-none vstack items-center gap-5 p-6 bg-primary-1 rounded-lg">
    <div className="vstack items-center gap-2">
      <Image
        className="object-cover w-28 h-28 rounded-full"
        alt="avatar"
        src="/assets/profile/profile_svg.svg"
      />
      <h1 className="text-2xl font-semibold text-primary-1">Katsu30</h1>
    </div>

    <div className="vstack items-center gap-2">
      <p className="text-primary-1">KATSUHIRO SHIRAISHI</p>
      <p className="text-primary-1">an engineer based in Tokyo</p>
      <p className="text-primary-1">seeking fun and better life</p>
    </div>

    <div className="flex gap-4">
      {sns.map(({ href, icon, label }) => (
        <Link key={href} href={href} passHref>
          <a className="text-primary-1" aria-label={label}>
            {icon}
          </a>
        </Link>
      ))}
    </div>
  </div>
);
