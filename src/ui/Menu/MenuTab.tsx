import { SelectionIndicator, Tab, type TabProps } from "react-aria-components";

type MenuTabProps = Omit<TabProps, "children" | "className"> & {
  children: React.ReactNode;
};

export default function MenuTab({ children, ...rest }: Readonly<MenuTabProps>) {
  return (
    <Tab
      {...rest}
      className="px-4 py-2 cursor-default outline-none relative text-theme-red-dark 
      transition-colors duration-200 border-b-4 border-transparent forced-color-adjust-none 
      focus-visible:after:content-[''] focus-visible:after:absolute 
      focus-visible:after:inset-1 focus-visible:after:rounded 
      focus-visible:after:border-2 focus-visible:after:border-theme-red-light 
      data-[hovered=true]:text-theme-red-light data-[focused=true]:text-theme-red-deep-dark 
      data-[selected=true]:border-b-4 data-[selected=true]:border-theme-red-dark 
      data-[selected=true]:text-theme-red-dark data-[disabled=true]:text-theme-grey-dark 
      data-[disabled=true]:border-theme-grey-dark"
    >
      {children}
      <SelectionIndicator className="absolute left-0 bottom-0 w-full border-b-4 border-theme-red-dark transition-[translate,width,height] duration-200 motion-reduce:transition-none" />
    </Tab>
  );
}
