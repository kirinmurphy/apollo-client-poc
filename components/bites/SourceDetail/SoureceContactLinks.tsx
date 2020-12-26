import { ContactLinksProps, PhoneType } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

interface Props {
  phone: PhoneType;
  contactLinks: ContactLinksProps;
}

export function SourceContactLinks ({ phone, contactLinks }: Props): JSX.Element {
  const {
    website,
    facebook,
    twitter,
    instagram
  } = contactLinks || {};

  return (
    <div className="contact-info">
      <a className="phone" href={`tel:${phone}`}>{getFormattedPhone(phone)}</a>
      {website && <a href={website} className="contact-link website"><FontAwesomeIcon icon={faGlobeAmericas} /></a>}
      {facebook && <a href={facebook} className="contact-link facebook">FB</a>}
      {twitter && <a href={twitter} className="contact-link twitter">TW</a>}
      {instagram && <a href={instagram} className="contact-link instagram">INSTA</a>}
    </div>
  );
}

function getFormattedPhone (phone: string): string {
  const first = phone.substring(0,3);
  const middle = phone.substring(3,6);
  const last = phone.substring(6,10);
  return `${first}.${middle}.${last}`;
}