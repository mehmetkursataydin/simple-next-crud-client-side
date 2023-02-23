"use client";
import { Card } from "@/components/card";
import { useAvatars, useCreateAvatar } from "@/lib/useApis";

export default function Page() {
  const { avatars, isLoading, isError } = useAvatars();
  const createAvatar = useCreateAvatar();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading avatars</div>;
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <div>
        <button className="btn-primary btn" onClick={() => createAvatar({})}>
          Kisi Ekle
        </button>
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="flex flex-col gap-4 p-10 overflow-auto h-fit">
        {avatars?.map((avatar) => (
          <Card
            key={avatar.id}
            image={avatar.avatar}
            favorited={avatar.favorited}
            id={avatar.id}
          />
        ))}
      </div>
    </div>
  );
}
