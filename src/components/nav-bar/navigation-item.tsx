import {
    NavigationMenuItem,
    NavigationMenuLink,
  } from "../ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";


export interface NavigationMenuItem{
  navigationLink: string;
  navigationDescription: string;
}

  export function NavigationItem ({navigationLink,navigationDescription}: NavigationMenuItem) {
    return(
      <NavigationMenuItem>
      <Link href={navigationLink} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {navigationDescription}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    
  );
  }
