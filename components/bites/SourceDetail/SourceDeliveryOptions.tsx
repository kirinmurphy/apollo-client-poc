import { PhoneType, SourceDeliveryOptionsProps } from "../types";

interface PProps {
  phone: PhoneType;
  deliveryOptions: SourceDeliveryOptionsProps;
}

export function SourceDeliveryOptions ({ phone, deliveryOptions }: PProps): JSX.Element {
  const { available, preferredMethod } = deliveryOptions;
  return (
    <>
      {available && 
        <div className="delivery-method">
          {preferredMethod === 'uberEats' && (
            <span>Preferred delivery with <a href="https://www.ubereats.com">Uber Eats</a></span>
          )}

          {preferredMethod === 'call' && (
            <span><a href={`tel:${phone}`}>Call ahead</a> to place your order.</span>
          )}
        </div>
      }
    </>    
  );  
}
