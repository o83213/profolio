// next image
import Image from "next/image";

function Avatar() {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/mainIconsdark.svg"}
        fill
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
}

export default Avatar;
