import { FC } from "react";
import {
  AuditLogs,
  BriefCase,
  FeesAndCharges,
  FeesAndPricing,
  Guarantors,
  Handshake,
  OrgDropDown,
  Home,
  Karma,
  Users,
  LoanRequests,
  Reports,
  Preferences,
  WhiteList,
  Transactions,
  Settlements,
  SystemMessages,
  Services,
  ServiceAccount,
  SavingsProducts,
  Savings,
  Sack,
  LogOut,
  SideBarLink,
  SidebarSection,
} from "../../assets";

import style from "./index.module.scss";

interface SideBarInterface {
  className: string;
}

interface SidebarElementsChildren {
  Icon: FC<{ className: string }>;
  name: string;
  to: string;
  key: string;
}

export interface SidebarElements {
  heading: string;
  children: Required<SidebarElementsChildren[]>;
}

const Sidebar: FC<SideBarInterface> = ({ className }) => {
  const sidebarElements: Required<SidebarElements[]> = [
    {
      heading: "CUSTOMERS",
      children: [
        {
          Icon: Users,
          name: "Users",
          to: "/users",
          key: "users",
        },
        {
          Icon: Guarantors,
          name: "Guarantors",
          to: "/guarantors",
          key: "guarantors",
        },
        {
          Icon: Sack,
          name: "Loans",
          to: "/loans",
          key: "loans",
        },
        {
          Icon: Handshake,
          name: "Decision Models",
          to: "/decision-models",
          key: "decison-models",
        },
        {
          Icon: Savings,
          name: "Savings",
          to: "/savings",
          key: "savings",
        },
        {
          Icon: LoanRequests,
          name: "Loan Requests",
          to: "/loan-requests",
          key: "loan-requests",
        },
        {
          Icon: WhiteList,
          name: "Whitelist",
          to: "/whitelist",
          key: "whitelist",
        },
        {
          Icon: Karma,
          name: "Karma",
          to: "/karma",
          key: "karma",
        },
      ],
    },
    {
      heading: "BUSINESSES",
      children: [
        {
          Icon: BriefCase,
          name: "Organization",
          to: "/organization",
          key: "organization",
        },
        {
          Icon: LoanRequests,
          name: "Loan Products",
          to: "/loan-products",
          key: "loan-products",
        },
        {
          Icon: SavingsProducts,
          name: "Savings Products",
          to: "/savings-products",
          key: "savings-products",
        },
        {
          Icon: FeesAndCharges,
          name: "Fees and Charges",
          to: "/fees-and-charges",
          key: "fees-and-charges",
        },
        {
          Icon: Transactions,
          name: "Transactions",
          to: "/transactions",
          key: "transactions",
        },
        {
          Icon: Services,
          name: "Services",
          to: "/services",
          key: "services",
        },
        {
          Icon: ServiceAccount,
          name: "Service Accounts",
          to: "/service-accounts",
          key: "service-accounts",
        },
        {
          Icon: Settlements,
          name: "Settlements",
          to: "/settlements",
          key: "settlements",
        },
        {
          Icon: Reports,
          name: "Reports",
          to: "/reports",
          key: "reports",
        },
      ],
    },
    {
      heading: "SETTINGS",
      children: [
        {
          Icon: Preferences,
          name: "Preferences",
          to: "/preferences",
          key: "preferences",
        },
        {
          Icon: FeesAndPricing,
          name: "Fees and Pricing",
          to: "/fees-and-pricing",
          key: "fees-and-pricing",
        },
        {
          Icon: AuditLogs,
          name: "Audit Logs",
          to: "/audit-logs",
          key: "audit-logs",
        },
        {
          Icon: SystemMessages,
          name: "System Messages",
          to: "/system-messages",
          key: "system-messages",
        },
        {
          Icon: LogOut,
          name: "Logout",
          to: "/logout",
          key: "log-out",
        },
      ],
    },
  ];
  return (
    <div
      className={`${style.Sidebar} ${className}`}
      data-testid="sidebar-container"
    >
      <div className={style.sideInnerbar}>
        <div className={style.Sidebar__switch}>
          <BriefCase className={style.Sidebar__switch_icon} />{" "}
          <span data-testid="switch-org">Switch Organization</span>{" "}
          <OrgDropDown className={style.Sidebar__switch__drop} />{" "}
        </div>
        <SideBarLink to="/dashboard" end>
          <Home className={style.Sidebar__link__icon} />
          <span data-testid="dashboard">Dashboard</span>
        </SideBarLink>
        {sidebarElements.map((props: SidebarElements) => (
          <SidebarSection {...props} key={`sidebarElements-${props.heading}`} />
        ))}
        <p className={style.version}>v1.2.0</p>
      </div>
    </div>
  );
};

export default Sidebar;
