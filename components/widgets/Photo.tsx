import React from "react";
import { PhotoProps } from "./types";

export function getPhotoUrl (photo: PhotoProps): string {
  return process.env.IMAGE_ASSET_URL + photo.url;
}

interface Props {
  photo: PhotoProps;
}
export function Photo ({ photo }: Props): JSX.Element {
  const photoUrl = getPhotoUrl(photo);

  return (
    <>
      {photo && (
        <div className="img-wrap">
          <img src={photoUrl} />
        </div>
      )}
    </>
  );
}
