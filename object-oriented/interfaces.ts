// Interfaces define object contracts.
// Prefer interface for public object shapes.

// Basic shape with optional and readonly fields.
interface Account {
  readonly id: number;
  name: string;
  email?: string;
}

// Extending adds new fields to the base contract.
interface Admin extends Account {
  permissions: string[];
}

// Declaration merging: same name combines properties.
interface Settings {
  theme: "light" | "dark";
}

interface Settings {
  locale: "en" | "pt";
}

const settings: Settings = {
  theme: "light",
  locale: "en",
};

function formatAccount(account: Account) {
  return (account.name + " (" + account.id + ")").toUpperCase();
}

const admin: Admin = {
  id: 1,
  name: "Dana",
  permissions: ["read", "write"],
};

formatAccount(admin);
