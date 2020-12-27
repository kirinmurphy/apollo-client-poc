import { MSGS_PREFERRED_DELIVERY_METHODS } from "../../utils/dictionary";
import { PhoneType, SourceDeliveryOptionsProps } from "../types";
import { DirectDeliveryMessage } from "./DirectDeliveryMessage";

interface Props {
  phone: PhoneType;
  website: string;
  deliveryOptions: SourceDeliveryOptionsProps;
}

export function SourceDeliveryOptions (props: Props): JSX.Element {
  const { 
    phone, 
    website, 
    deliveryOptions: { available, preferredMethod, otherLink } 
  } = props;

  const copy = MSGS_PREFERRED_DELIVERY_METHODS;
  const thirdPartyLinks = copy.thirdPartyService.links;
  const isThirdPartyService = Object.keys(thirdPartyLinks).includes(preferredMethod);

  const directDeliveryOptions = {
    call: { link: `tel:${phone}` },
    website: { link: website },
    otherLink: { link: otherLink }
  };
  
  return available ? (
    <div className="delivery-method">
      {isThirdPartyService && (
        <span>
          {copy.thirdPartyService.text}{' '}
          <a href={thirdPartyLinks[preferredMethod].link}>
            {thirdPartyLinks[preferredMethod].name}
          </a>
        </span>
      )}

      {!isThirdPartyService && (
        <DirectDeliveryMessage 
          method={preferredMethod} 
          link={directDeliveryOptions[preferredMethod].link} 
        />
      )}          
    </div>
  ) : <></>;
}
