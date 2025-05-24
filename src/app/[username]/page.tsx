import { notFound } from "next/navigation";
import connectToDatabase from "@/lib/mongo";
import User from "@/models/User";
import CaseStudy from "@/models/CaseStudy";

// interface Params {
//   params: {
//     username: string;
//   };
// }

type CaseStudyType = {
  _id: string;
  title: string;
  overview: string;
  // add other fields as needed
};

interface UserType {
  _id: string;
  name: string;
  username: string;
  // add other fields as needed
}

export default async function PublicPortfolio({ params }: { params: { username: string } }) {
  await connectToDatabase;

  const user = await User.findOne({ username: params.username }).lean<UserType>();
  if (!user) return notFound();

  const caseStudies = await CaseStudy.find({ userId: user._id }).lean<CaseStudyType[]>();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{`${user.name}'s Portfolio`}</h1>
      <div className="mt-6 grid gap-4">
        {caseStudies.map((cs) => (
          <div key={cs._id.toString()} className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">{cs.title}</h2>
            <p>{cs.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
