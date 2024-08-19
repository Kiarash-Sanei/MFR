import Profile from "../../ui/profile";

export default function Page({ params }: { params: { username: string } }) {
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
  const username = params.username;
  return (
    <div className="flex flex-wrap justify-center">
      <Profile
        username={username}
        searchAgree={usernames.includes(username)}
        isExpandable={false}
      />
    </div>
  );
}
