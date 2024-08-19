import Profile from "./ui/profile";

export default function Page() {
  const usernames = [
    "MoeeinAali",
    "Kiarash-Sanei",
    "Imanm02",
    "ZzaradezZ",
    "JavadiSM",
    "Omidshafaatt",
    "ali1556",
    "kshyst",
    "8354",
    "rusell",
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {usernames.map((username) => (
        <Profile username={username} searchAgree={false} isExpandable={true} />
      ))}
    </div>
  );
}
