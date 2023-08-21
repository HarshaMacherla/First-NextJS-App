import { useRouter } from "next/router";

const DETAILS = [
  { id: 1, name: "Harsha", role: "Senior Developer" },
  { id: 2, name: "Ashish", role: "Backend Developer" },
  { id: 3, name: "Prem", role: "Frontend Developer" },
];

const DeveloperPage = () => {
  const router = useRouter();

  const { id } = router.query;

  const developer = DETAILS.find((developer) => developer.id === parseInt(id));

  if (!developer) {
    return <h1>Developer doesn't exist!</h1>;
  }

  return <h1>{`${developer.name} - ${developer.role}`}</h1>;
};

export default DeveloperPage;
