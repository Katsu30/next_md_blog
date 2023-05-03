import { Image } from '@/components/common/Image';
import { About } from '@/components/features/app/Background/About';

export const Background = () => (
  <div className="select-none vstack items-center gap-5 p-6 bg-primary-1 rounded-lg">
    <div className="vstack items-center gap-2">
      <Image
        className="object-cover w-28 h-28 rounded-full"
        alt="avatar"
        src="/assets/profile/profile_svg.svg"
      />
      <h1 className="text-2xl font-semibold text-primary-1">Katsu30</h1>
    </div>
    <About />
  </div>
);
