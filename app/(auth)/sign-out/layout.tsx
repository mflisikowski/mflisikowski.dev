export const dynamic = "force-dynamic";

/**
 * A layout component for a SignOut page.
 *
 * @param children - The content to be rendered inside the layout component.
 * @returns The layout component with the provided content.
 */

interface SignOutLayoutProps {
  children: React.ReactNode;
}

const SignOutLayout = ({ children }: SignOutLayoutProps) => {
  return <main>{children}</main>;
};

export default SignOutLayout;
