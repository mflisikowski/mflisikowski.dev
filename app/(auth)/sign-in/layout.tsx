export const dynamic = "force-dynamic";

/**
 * A layout component for a SignIn page.
 *
 * @param children - The content to be rendered inside the layout component.
 * @returns The layout component with the provided content.
 */

interface SignInLayoutProps {
  children: React.ReactNode;
}

const SignInLayout = ({ children }: SignInLayoutProps) => {
  return <main>{children}</main>;
};

export default SignInLayout;
