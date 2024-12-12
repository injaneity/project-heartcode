import { NavigationItem, NavigationMenuItem } from "@/components/nav-bar/navigation-item";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { ModeToggle } from "../theme-button/theme-button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const navItems: NavigationMenuItem[] = [
    { navigationLink: "/", navigationDescription: "Project Heartcode" },
    { navigationLink: "/joelys", navigationDescription: "Joelys" },
    { navigationLink: "/vania", navigationDescription: "Vania" },
    { navigationLink: "/quiz", navigationDescription: "Quiz" },

]

export default function NavigationBar() {
    return(
        <NavigationMenu className="sticky top-0 list-none flex justify-between min-w-full h-[40px] bg-muted px-5">
            <div className="flex flex-row justify-start gap-4">
                {navItems.map((navItem, index) => <NavigationItem key={index} navigationLink={navItem.navigationLink} navigationDescription={navItem.navigationDescription} />)}
            </div>
            <div className="flex flex-row justify-end">
                <ModeToggle/>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </NavigationMenu>
    )
}