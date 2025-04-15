import Image from "next/image";
import Link from "next/link";

type Tool = {
  id: number;
  title: string;
  description: string;
  url: string;
  image: string;
};

const ToolCard = ({ id, title, description, url, image }: Tool) => (
  <div className="shadow-light100_darknone w-full">
    <div className="background-light900_dark200 light-border flex w-full items-center justify-left rounded-2xl border p-8">
      <div className="relative size-[64px]">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded"
        />
      </div>

      <div className="flex w-full flex-col items-start justify-between pl-4">
        <div className="mt-4 text-center">
          <h3 className="h3-bold text-dark200_light900 line-clamp-1">
            {title}
          </h3>
          <p className="body-regular text-dark500_light500 mt-2">
            {description}
          </p>
        </div>
      </div>

      <div>
        <Link href={url || "#"}>Visit</Link>
      </div>
    </div>
  </div>
);

export default ToolCard;
