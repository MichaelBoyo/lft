export interface Navigation {
  text: string;
  active: boolean;
}
export const navItems: Navigation[] = [
    {
        text: "General Details",
        active: true,
    },
    {
        text: "Documents",
        active: false,
    },
    {
        text: "Bank Details",
        active: false,
    },
    {
        text: "Loans",
        active: false,
    },
    {
        text: "Savings",
        active: false,
    },
    {
        text: "App and System",
        active: false,
    },
];