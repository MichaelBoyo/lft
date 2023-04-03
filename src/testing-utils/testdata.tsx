import { Response } from "../utils/redux/apiConnection";

const data: Response = {
  createdAt: "2021-06-12T01:21:47.433Z",
  orgName: "micael corp",
  userName: "Michael.Boyo",
  email: "michaelboyo@gmail.com",
  phoneNumber: "08103297538",
  lastActiveDate: "2023-03-05T13:11:04.013Z",
  tier: 3,
  profile: {
    firstName: "Michael",
    lastName: "Boyo",
    phoneNumber: "0813239585",
    avatar:
      "https://michael-boyo-lendsqr-fe-test.vercel.app/assets/user-e9b1dd09.png",
    gender: "Male",
    bvn: "123456789",
    address: "Lagos Nigeria",
    currency: "NGN",
  },
  education: {
    level: "Bsc",
    employmentStatus: "Employed",
    sector: "Finance",
    duration: "2 Years",
    officeEmail: "mikee@yahoo.com",
    monthlyIncome: ["500.29", "6000.11"],
    loanRepayment: "262.83",
  },
  id: "1",
  guarantor: {
    firstName: "JOhn",
    lastName: "Setemi",
    phoneNumber: "048493048493",
    gender: "Male",
    address: "Ibadan",
  },
  accountBalance: "670.00",
  accountNumber: "GNU123",
  socials: {
    facebook: "@lendsqr",
    instagram: "@lendsqr",
    twitter: "@lendsqr",
  },
};
export default data;
