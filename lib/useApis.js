import useSWR from "swr";

const API_URL = "https://63f64b9cab76703b15bca9c2.mockapi.io/avatars/";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useAvatars() {
  const { data, error } = useSWR(API_URL, fetcher);

  return {
    avatars: data,
    isLoading: !error && !data,
    isError: error,
  };
}
export function useAvatar(id) {
  const { data, error } = useSWR(id ? `${API_URL}${id}` : null, fetcher);

  return {
    avatar: data,
    isLoading: !error && !data,
    isError: error,
  };
}
export function useCreateAvatar() {
  const { mutate } = useSWR(API_URL, fetcher);

  const createAvatar = async (avatarData) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(avatarData),
    });

    if (response.ok) {
      mutate();
    } else {
      throw new Error("Failed to create avatar");
    }
  };

  return createAvatar;
}

export function useUpdateAvatar() {
  const { data, mutate } = useSWR(API_URL, fetcher);

  const updateAvatar = async (id, avatarData) => {
    const updatedAvatar = {
      ...data.find((avatar) => avatar.id === id),
      ...avatarData,
    };
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedAvatar),
    });

    if (response.ok) {
      mutate();
    } else {
      throw new Error("Failed to update avatar");
    }
  };

  return updateAvatar;
}

export function useDeleteAvatar() {
  const { mutate } = useSWR(API_URL, fetcher);

  const deleteAvatar = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      mutate();
    } else {
      throw new Error("Failed to delete avatar");
    }
  };

  return deleteAvatar;
}
