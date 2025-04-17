import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Tool = {
  id: number;
  title: string;
  description: string;
  url: string;
  image: string;
  visitButtonText: string;
  tags: string[];
};

const ToolCard = ({
  id,
  title,
  description,
  url,
  image,
  visitButtonText,
  tags,
}: Tool) => (
  <div className="shadow-light100_darknone w-full">
    <div className="background-light900_dark200 light-border flex flex-col w-full items-center justify-between rounded-2xl border p-6">
      {/* Title and Image */}
      <div className="flex w-full items-center justify-between">
        <h3 className="h3-bold text-dark200_light900 line-clamp-1">{title}</h3>

        <div className="relative size-[32px]">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="rounded"
          />
        </div>
      </div>

      {/* Description */}
      <div className="flex w-full flex-col items-start justify-start mt-4 min-h-20">
        <p className="text-left paragraph-regular text-dark500_light500 mt-2">
          {description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex w-full flex-wrap items-start justify-start mt-4 gap-2">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            className="subtle-regular background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-start items-center gap-4 mt-4 w-full">
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="base-semibold text-dark400_light500 hover:text-dark200_light900"
        >
          <Button type="button" className="min-w-[120px]">
            {visitButtonText}
          </Button>
        </Link>

        {/* <Link
          href={`/tools/${id}`}
          className="base-semibold text-dark400_light500 hover:text-dark200_light900"
        >
          View docs
        </Link> */}
      </div>
    </div>
  </div>
);

export default ToolCard;
