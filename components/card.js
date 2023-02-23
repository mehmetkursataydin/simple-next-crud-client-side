"use client";
import Image from "next/image";
import { useDeleteAvatar, useUpdateAvatar } from "@/lib/useApis";
import Link from "next/link";

export const Card = ({ image, favorited, id }) => {
  const updateAvatar = useUpdateAvatar();
  const deleteAvatar = useDeleteAvatar();
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div className="indicator">
        {favorited && (
          <span className="indicator-item badge badge-secondary"></span>
        )}
        <figure className="pl-7">
          <div className="avatar">
            <div className="mask mask-hexagon w-24">
              <Image src={image} alt={"avatar"} width={128} height={128} />
            </div>
          </div>
        </figure>
        <div className="card-body">
          <div className="card-actions justify-end">
            <button
              className="btn-primary btn"
              onClick={() => updateAvatar(id, { favorited: !favorited })}
            >
              Favorile
            </button>

            <Link className="btn-primary btn" href={`/avatar?id=${id}`}>
              Profil
            </Link>
            <button
              className="btn-primary btn"
              onClick={() => deleteAvatar(id)}
            >
              Sil
            </button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
