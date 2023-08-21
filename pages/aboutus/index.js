import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <ul>
        <li>
          <h2>
            <Link href="/aboutus/1">Harsha</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link href="/aboutus/2">Ashish</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link href="/aboutus/3">Prem</Link>
          </h2>
        </li>
      </ul>
    </>
  );
};

export default AboutUs;
