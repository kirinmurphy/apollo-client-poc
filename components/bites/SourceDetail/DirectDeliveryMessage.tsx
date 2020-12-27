import { MSGS_PREFERRED_DELIVERY_METHODS } from "../../utils/dictionary";
import { PreferredDeliveryMethodType } from "../types";

interface Props {
  link: string;
  method: PreferredDeliveryMethodType;
}

export function DirectDeliveryMessage ({ link, method }: Props): JSX.Element {
  const copy = MSGS_PREFERRED_DELIVERY_METHODS;

  return (
    <>
      <a href={link}>{copy[method].linkText}</a> {copy[method].text}
    </>
  );
}
