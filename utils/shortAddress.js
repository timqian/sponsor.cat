export default function shot(address) {
  return address.slice(0, 4) + "..." + address.slice(-4);
}
