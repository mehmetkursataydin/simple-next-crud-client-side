"use client";
import { useAvatar } from "@/lib/useApis";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export default function AvatarPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log(searchParams);
  const { avatar, isLoading, isError } = useAvatar(searchParams.get("id"));

  if (isLoading) {
    return <div>Loading avatar...</div>;
  }

  if (isError) {
    return <div>Error loading avatar</div>;
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <Image src={avatar.avatar} alt={"avatar"} width={128} height={128} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{avatar.name}</h2>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={() => router.back()}>
              Geri
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
