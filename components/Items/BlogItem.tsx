import React from "react";
import Image from "next/image";

interface IBlogItemProps {
  children: React.ReactNode;
  imgURL: string;
}

const BlogItem = ({ children, imgURL }: IBlogItemProps) => {
  return (
    <div className="blog-item flex flex-col gap-y-[36.59px] md:flex-row max-w-[710px] rounded-[11px] px-[28px] py-[50px] md:p-4 items-center mt-[46px] md:mt-[100px] w-fit">
      <Image
        src={imgURL ? imgURL : "/assets/1.png"}
        alt="photo"
        width={100}
        height={100}
        className="rounded-[11px] w-[115px] h-[137px] sm:w-[130px] sm:h-[140px] md:w-[178px] md:h-[211px]"
      ></Image>
      <p className={`ml-4 text-mini md:text-[26px]/[35px]`}>{children}</p>
    </div>
  );
};

export default BlogItem;
