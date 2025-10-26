import { TabPanel, type TabPanelProps } from "react-aria-components";

type MenuTabPanelProps = Omit<TabPanelProps, "children" | "className"> & {
  children?: React.ReactNode | null;
};

export default function MenuTabPanel({
  children,
  ...rest
}: Readonly<MenuTabPanelProps>) {
  return (
    <TabPanel
      {...rest}
      className="mt-1 p-2 rounded outline-none 
      focus-visible:outline-2 focus-visible:outline-red-light focus-visible:outline-offset-2"
    >
      {children}
    </TabPanel>
  );
}
