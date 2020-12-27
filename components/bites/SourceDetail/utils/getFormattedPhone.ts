export function getFormattedPhone (phone: string): string {
  const first = phone.substring(0,3);
  const middle = phone.substring(3,6);
  const last = phone.substring(6,10);
  return `${first}.${middle}.${last}`;
}