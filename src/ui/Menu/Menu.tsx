import { Link, TabList, Tabs } from "react-aria-components";
import MenuTab from "./MenuTab";
import MenuTabPanel from "./MenuTabPanel";

export default function Menu() {
  return (
    <nav>
      <Tabs
        className="flex flex-col text-theme-red-deep-dark"
        data-orientation="vertical"
      >
        <TabList
          aria-label="navigation menu"
          className="flex flex-row border-b border-theme-border mb-4"
          data-orientation="vertical"
        >
          <MenuTab id="Home">Home</MenuTab>
          <MenuTab id="Destinations">Destinations</MenuTab>
          <MenuTab id="About">About</MenuTab>
        </TabList>

        <MenuTabPanel id="Home"></MenuTabPanel>
        <MenuTabPanel id="Destinations">
          <Link href="/destinations">Destinations</Link>
        </MenuTabPanel>

        <MenuTabPanel id="About">
          <Link href="/about">About</Link>
        </MenuTabPanel>
      </Tabs>
    </nav>
  );
}
