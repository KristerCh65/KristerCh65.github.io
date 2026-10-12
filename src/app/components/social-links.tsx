export const EMAIL = "kbmchavez@outlook.com";

type IconProps = { className?: string };

const LinkedInIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 50 50" aria-hidden="true">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
  </svg>
);

const GitHubIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
  </svg>
);

const GoogleDevIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 256 205" preserveAspectRatio="xMinYMin meet" aria-hidden="true">
    <path d="M27.008 53.504l-24.64 40.32C.768 96.32 0 99.264 0 102.4s.768 6.08 2.368 8.64l57.344 93.76h59.712L27.008 53.504zM59.712 0L33.92 42.112l29.888 48.896L119.488 0H59.712zm169.28 151.296l24.64-40.32c1.6-2.496 2.368-5.44 2.368-8.576s-.768-6.08-2.368-8.64L196.288 0h-59.712l92.416 151.296zM196.288 204.8l25.792-42.112-29.888-48.896-55.68 91.008h59.776z" clipRule="evenodd" />
  </svg>
);

export const MailIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18v12H3z M3 6l9 7 9-7" />
  </svg>
);

export const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/krister-m-5292511a8", Icon: LinkedInIcon },
  { name: "GitHub", href: "https://github.com/KristerCh65", Icon: GitHubIcon },
  { name: "Google Developer", href: "https://g.dev/KristerMChavez", Icon: GoogleDevIcon },
];
