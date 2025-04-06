import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface AvatarStackProps {
  length?: number;
  images?: string[];
  fallbacks?: string[];
  alts?: string[];
}

const AvatarStack = ({
  length = 6,
  images = Array(length).fill("https://github.com/shadcn.png") as string[],
  fallbacks = Array(length).fill("CN") as string[],
  alts = Array(length).fill("Avatar") as string[],
}: AvatarStackProps) => {
  return (
    <div className={`flex flex-row -space-x-1`}>
      {Array.from({ length }).map((_, index) => (
        <Avatar key={index} className="border-2 border-secondary">
          <AvatarImage
            src={images[index] ?? images[0]}
            alt={alts[index] ?? alts[0]}
          />
          <AvatarFallback>{fallbacks[index] ?? fallbacks[0]}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
};

export default AvatarStack;
