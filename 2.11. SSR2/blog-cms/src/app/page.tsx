import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data: IBlog[] = await getBlogs();

  return (
    <div className="flex flex-col">
      <h1 className="p-4 text-2xl font-bold">Blogs</h1>
      <div className="flex gap-4 p-4 h-max text-black">
        {data.map((item) => {
          return (
            <div className="flex flex-col gap-4 bg-slate-200 rounded-lg w-1/3 h-full p-8">
              <div className="h-[200px] overflow-hidden">

              <div className="bg-red-300 absolute m-2 p-1 rounded-lg">
                <p>{item.fields.category}</p>
              </div>

              <Image 
              src={`https:${item.fields.thumbnail.fields.file.url}`} 
              alt="Thumbnail"
              width={600}
              height={300}
              />

              </div>

              <div>
              <p  className="font-semibold text-lg">{item.fields.title}</p>
              <p className="text-xs">published : {item.fields.date}</p>
              </div>

              <div className="flex gap-4 items-center">

              <div className="h-[70px] w-[70px] rounded-full border border-indigo-300 bg-white overflow-hidden">
              <Image
              src={`https:${item.fields.author.fields.avatar.fields.file.url}`}
              alt="author"
              width={100}
              height={100}
              />
              </div>

              <div>
              <p>{item.fields.author.fields.name}</p>
              <p className="text-sm text-neutral-500">{item.fields.author.fields.email}</p>
              </div>
              </div>
              
              <div className="rounded-full border border-neutral-900 mr-72 text-center px-5 py-2">
              <Link href={`/blog/${item.fields.slug}`}>Read More</Link>
              </div>

              </div>
          );
        })}
      </div>
    </div>
  );
}
