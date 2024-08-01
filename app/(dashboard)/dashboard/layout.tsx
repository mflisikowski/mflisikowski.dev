export const dynamic = "force-dynamic";

/**
 * A layout component for a dashboard page.
 *
 * @param children - The content to be rendered inside the layout component.
 * @returns The layout component with the provided content.
 */

interface LandingLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: LandingLayoutProps) => {
  return <main>{children}</main>;
};

export default DashboardLayout;
