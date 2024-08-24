import Image from "next/image";

export function AvatarMenuImage({ src }: { src: string }) {
  return (
    <Image
      src={src}
      width={36}
      height={36}
      alt="Avatar"
      className="overflow-hidden rounded-full"
    />
  );
}
