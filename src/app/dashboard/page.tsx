import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
    return (
        <div>
            <h1 className="mb-8">DashboardPage</h1>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
}
