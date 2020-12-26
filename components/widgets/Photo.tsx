import React from "react";
import { PhotoProps } from "./types";

interface Props {
  photo: PhotoProps;
}

export function Photo ({ photo }: Props): JSX.Element {
  const photoUrl = process.env.IMAGE_ASSET_URL + photo.url;

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
