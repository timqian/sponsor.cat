export default function App({ activeTab, setActiveTab }) {
  return (
    <ul className="flex border-b my-8">
      <li className="-mb-px mr-1">
        <a
          className="inline-block py-2 px-4 font-semibold border-b-2 border-blue-600"
          href="#"
        >
          Sponsors
        </a>
      </li>
      <li className="mr-1">
        <a className=" inline-block py-2 px-4" href="#">
          Sponsoring
        </a>
      </li>
      <li className="mr-1">
        <a className="inline-block py-2 px-4" href="#">
          Tiers
        </a>
      </li>
    </ul>
  );
}
